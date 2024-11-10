import mongoose, { Document, Schema } from 'mongoose';

export interface IInquiry extends Document {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  requirements: string;
  teamSize: number;
  timeline: string;
  status: 'new' | 'contacted' | 'in_progress' | 'closed';
}

const inquirySchema = new Schema<IInquiry>({
  companyName: { type: String, required: true },
  contactPerson: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  requirements: { type: String, required: true },
  teamSize: { type: Number, required: true },
  timeline: { type: String, required: true },
  status: { type: String, enum: ['new', 'contacted', 'in_progress', 'closed'], default: 'new' },
}, {
  timestamps: true,
});

export const Inquiry = mongoose.model<IInquiry>('Inquiry', inquirySchema);