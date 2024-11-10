import { Request, Response } from 'express';
import { Inquiry } from '../models/Inquiry';
import { sendInquiryNotification } from '../utils/email';
import { z } from 'zod';

const inquirySchema = z.object({
  companyName: z.string().min(2),
  contactPerson: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  requirements: z.string().min(50),
  teamSize: z.number().min(1),
  timeline: z.string(),
});

export const submitInquiry = async (req: Request, res: Response) => {
  try {
    const validatedData = inquirySchema.parse(req.body);
    const inquiry = new Inquiry(validatedData);
    
    await inquiry.save();
    await sendInquiryNotification(inquiry);

    res.status(201).json({ message: 'Inquiry submitted successfully' });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ error: error.errors });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
};