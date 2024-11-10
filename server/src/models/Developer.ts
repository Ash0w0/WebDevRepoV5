import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IDeveloper extends Document {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  primarySkill: string;
  skills: string[];
  linkedin: string;
  github: string;
  about: string;
  status: 'pending' | 'approved' | 'rejected';
  password: string;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

const developerSchema = new Schema<IDeveloper>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  experience: { type: String, required: true },
  primarySkill: { type: String, required: true },
  skills: [{ type: String }],
  linkedin: { type: String, required: true },
  github: { type: String, required: true },
  about: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  password: { type: String, required: true },
}, {
  timestamps: true,
});

developerSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error as Error);
  }
});

developerSchema.methods.comparePassword = async function(candidatePassword: string): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const Developer = mongoose.model<IDeveloper>('Developer', developerSchema);