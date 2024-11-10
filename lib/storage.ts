import fs from 'fs';
import path from 'path';
import { parse, stringify } from 'csv-parse/sync';

const DATA_DIR = path.join(process.cwd(), 'data');
const DEVELOPERS_FILE = path.join(DATA_DIR, 'developers.csv');
const INQUIRIES_FILE = path.join(DATA_DIR, 'inquiries.csv');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Initialize files with headers if they don't exist
const initializeFile = (filePath: string, headers: string[]) => {
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, stringify([headers]));
  }
};

// Initialize files with appropriate headers
initializeFile(DEVELOPERS_FILE, [
  'id',
  'fullName',
  'email',
  'phone',
  'experience',
  'primarySkill',
  'skills',
  'linkedin',
  'github',
  'about',
  'createdAt'
]);

initializeFile(INQUIRIES_FILE, [
  'id',
  'companyName',
  'contactPerson',
  'email',
  'phone',
  'requirements',
  'teamSize',
  'timeline',
  'createdAt'
]);

export async function saveDeveloper(data: any) {
  try {
    let developers = [];
    if (fs.existsSync(DEVELOPERS_FILE)) {
      const content = fs.readFileSync(DEVELOPERS_FILE);
      developers = parse(content, { columns: true });
    }
    
    const newDeveloper = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    developers.push(newDeveloper);
    
    fs.writeFileSync(DEVELOPERS_FILE, stringify(developers, { 
      header: true,
      columns: ['id', 'fullName', 'email', 'phone', 'experience', 'primarySkill', 'skills', 'linkedin', 'github', 'about', 'createdAt']
    }));

    return { success: true, id: newDeveloper.id };
  } catch (error) {
    console.error('Error saving developer:', error);
    throw error;
  }
}

export async function saveInquiry(data: any) {
  try {
    let inquiries = [];
    if (fs.existsSync(INQUIRIES_FILE)) {
      const content = fs.readFileSync(INQUIRIES_FILE);
      inquiries = parse(content, { columns: true });
    }
    
    const newInquiry = {
      ...data,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    inquiries.push(newInquiry);
    
    fs.writeFileSync(INQUIRIES_FILE, stringify(inquiries, {
      header: true,
      columns: ['id', 'companyName', 'contactPerson', 'email', 'phone', 'requirements', 'teamSize', 'timeline', 'createdAt']
    }));

    return { success: true, id: newInquiry.id };
  } catch (error) {
    console.error('Error saving inquiry:', error);
    throw error;
  }
}