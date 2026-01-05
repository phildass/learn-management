import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, phone, whyLearnAI } = req.body;

    // Generate access code
    const accessCode = Math.random().toString(36).substring(2, 10).toUpperCase();

    try {
      // In production, save to database
      // For now, just send email confirmation
      
      // Configure email transporter
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: parseInt(process.env.EMAIL_PORT || '587'),
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });

      // Send confirmation email
      await transporter.sendMail({
        from: process.env.EMAIL_FROM || 'no-reply@iiskill.in',
        to: email,
        subject: 'Welcome to Learn Management - iiskills.cloud',
        html: `
          <h1>Welcome to Learn Management!</h1>
          <p>Dear ${name},</p>
          <p>Thank you for registering with Learn Management. Your account has been successfully created.</p>
          <h2>Your Access Code: <strong>${accessCode}</strong></h2>
          <p>You can now access all 100 lessons across our MBA-standard curriculum.</p>
          <p>Get started: <a href="${process.env.NEXT_PUBLIC_APP_URL}/login">Login to your account</a></p>
          <br>
          <p>Best regards,<br>The iiskills.cloud Team</p>
        `,
      });

      res.status(200).json({
        success: true,
        message: 'Registration successful',
        accessCode,
      });
    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({
        success: false,
        message: 'Registration failed',
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
