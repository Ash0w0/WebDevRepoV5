import { Request, Response } from 'express';
import { Developer } from '../models/Developer';
import { sendWelcomeEmail } from '../utils/email';
import jwt from 'jsonwebtoken';
import { config } from '../config';
import { z } from 'zod';

const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  experience: z.string(),
  primarySkill: z.string(),
  skills: z.string(),
  linkedin: z.string().url(),
  github: z.string().url(),
  about: z.string().min(50),
  password: z.string().min(8),
});

export const registerDeveloper = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);
    
    const developer = new Developer({
      ...validatedData,
      skills: validatedData.skills.split(',').map(skill => skill.trim()),
    });

    await developer.save();
    await sendWelcomeEmail(developer.email, developer.fullName);

    const token = jwt.sign({ id: developer._id }, config.jwtSecret);

    res.status(201).json({ developer, token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
};

export const getDeveloperStatus = async (req: Request, res: Response) => {
  try {
    const developer = await Developer.findById(req.params.id).select('-password');
    
    if (!developer) {
      return res.status(404).json({ error: 'Developer not found' });
    }

    res.json({ status: developer.status });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};