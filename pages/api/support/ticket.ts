import type { NextApiRequest, NextApiResponse } from 'next';

// Mock support ticket storage
let tickets: any[] = [];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;
    
    const ticket = {
      id: Date.now().toString(),
      name,
      email,
      subject,
      message,
      status: 'open',
      createdAt: new Date().toISOString(),
    };

    tickets.push(ticket);

    res.status(200).json({
      success: true,
      message: 'Ticket submitted successfully',
      ticketId: ticket.id,
    });
  } else if (req.method === 'GET') {
    // For admin to view all tickets
    res.status(200).json({
      success: true,
      tickets,
    });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
