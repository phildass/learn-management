import type { NextApiRequest, NextApiResponse } from 'next';

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'phil123';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { password } = req.body;

    if (password === ADMIN_PASSWORD) {
      res.status(200).json({ 
        success: true, 
        message: 'Login successful',
        token: 'admin-session-token' // In production, use proper JWT
      });
    } else {
      res.status(401).json({ 
        success: false, 
        message: 'Invalid password' 
      });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
