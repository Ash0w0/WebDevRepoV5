import nodemailer from 'nodemailer';
import { config } from '../config';
import { IInquiry } from '../models/Inquiry';

const transporter = nodemailer.createTransport({
  host: config.smtp.host,
  port: config.smtp.port,
  auth: {
    user: config.smtp.user,
    pass: config.smtp.pass,
  },
});

export const sendWelcomeEmail = async (email: string, name: string) => {
  try {
    await transporter.sendMail({
      from: `"Web Development Solutions" <${config.smtp.user}>`,
      to: email,
      subject: 'Welcome to Web Development Solutions',
      html: `
        <h1>Welcome ${name}!</h1>
        <p>Thank you for registering with Web Development Solutions. We'll review your profile and get back to you soon.</p>
        <p>Best regards,<br>Web Development Solutions Team</p>
      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};

export const sendInquiryNotification = async (inquiry: IInquiry) => {
  try {
    await transporter.sendMail({
      from: `"Web Development Solutions" <${config.smtp.user}>`,
      to: config.smtp.user,
      subject: 'New Client Inquiry',
      html: `
        <h1>New Client Inquiry</h1>
        <p><strong>Company:</strong> ${inquiry.companyName}</p>
        <p><strong>Contact:</strong> ${inquiry.contactPerson}</p>
        <p><strong>Email:</strong> ${inquiry.email}</p>
        <p><strong>Phone:</strong> ${inquiry.phone}</p>
        <p><strong>Team Size:</strong> ${inquiry.teamSize}</p>
        <p><strong>Timeline:</strong> ${inquiry.timeline}</p>
        <p><strong>Requirements:</strong></p>
        <p>${inquiry.requirements}</p>
      `,
    });
  } catch (error) {
    console.error('Error sending inquiry notification:', error);
  }
};