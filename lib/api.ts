import { z } from 'zod';

const developerSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  experience: z.string().min(1, "Please select years of experience"),
  primarySkill: z.string().min(1, "Please select primary skill"),
  skills: z.string().min(2, "Please list your technical skills"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL"),
  github: z.string().url("Please enter a valid GitHub URL"),
  about: z.string().min(50, "Please provide at least 50 characters about yourself"),
});

const inquirySchema = z.object({
  companyName: z.string().min(2, "Company name must be at least 2 characters"),
  contactPerson: z.string().min(2, "Contact person name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  requirements: z.string().min(50, "Requirements must be at least 50 characters"),
  teamSize: z.number().min(1, "Team size must be at least 1"),
  timeline: z.string().min(1, "Please provide a timeline"),
});

export async function registerDeveloper(data: any) {
  try {
    const validatedData = developerSchema.parse(data);
    const { saveDeveloper } = await import('./storage');
    const result = await saveDeveloper(validatedData);
    return result;
  } catch (error) {
    console.error('Error registering developer:', error);
    throw error;
  }
}

export async function submitInquiry(data: any) {
  try {
    const validatedData = inquirySchema.parse(data);
    const { saveInquiry } = await import('./storage');
    const result = await saveInquiry(validatedData);
    return result;
  } catch (error) {
    console.error('Error submitting inquiry:', error);
    throw error;
  }
}