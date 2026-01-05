# API Documentation - Learn Management

## Overview
This document describes all API endpoints available in the Learn Management platform.

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://learn-management.iiskills.cloud/api`

---

## Authentication APIs

### Register User
Create a new user account with payment.

**Endpoint:** `POST /api/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91 9876543210",
  "whyLearnAI": "I want to advance my management career..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Registration successful",
  "accessCode": "ABC12345"
}
```

**Email Sent:**
- To: User's email
- From: no-reply@iiskill.in
- Contains: Access code and welcome message

---

### Login (Coming Soon)
Authenticate user and create session.

**Endpoint:** `POST /api/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "accessCode": "ABC12345"
}
```

---

## News APIs

### Get News Articles
Fetch business news with search and pagination.

**Endpoint:** `GET /api/news`

**Query Parameters:**
- `page` (optional): Page number (default: 1)
- `search` (optional): Search term for filtering

**Request:**
```
GET /api/news?page=1&search=startup
```

**Response:**
```json
{
  "articles": [
    {
      "title": "Startup funding in India reaches $12 billion",
      "description": "Indian startup ecosystem...",
      "url": "https://example.com/article",
      "publishedAt": "2026-01-05T10:30:00Z",
      "source": "Economic Times"
    }
  ],
  "total": 6,
  "page": 1,
  "totalPages": 1
}
```

---

## Admin APIs

### Admin Login
Authenticate admin user.

**Endpoint:** `POST /api/admin/login`

**Request Body:**
```json
{
  "password": "phil123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "admin-session-token"
}
```

**Error Response:**
```json
{
  "success": false,
  "message": "Invalid password"
}
```

---

## Support APIs

### Create Support Ticket
Submit a support request.

**Endpoint:** `POST /api/support/ticket`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "technical",
  "message": "I'm having trouble accessing Module 2..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Ticket submitted successfully",
  "ticketId": "1704444000000"
}
```

---

### Get All Tickets (Admin)
Retrieve all support tickets.

**Endpoint:** `GET /api/support/ticket`

**Headers:**
```
Authorization: Bearer admin-token
```

**Response:**
```json
{
  "success": true,
  "tickets": [
    {
      "id": "1704444000000",
      "name": "John Doe",
      "email": "john@example.com",
      "subject": "technical",
      "message": "...",
      "status": "open",
      "createdAt": "2026-01-05T10:00:00Z"
    }
  ]
}
```

---

## Curriculum APIs (Future)

### Get All Modules
**Endpoint:** `GET /api/curriculum/modules`

### Get Module Details
**Endpoint:** `GET /api/curriculum/modules/:id`

### Get Lesson Details
**Endpoint:** `GET /api/curriculum/lessons/:id`

---

## Progress APIs (Future)

### Get User Progress
**Endpoint:** `GET /api/progress/:userId`

### Update Lesson Progress
**Endpoint:** `POST /api/progress/lesson`

**Request Body:**
```json
{
  "userId": "user-id",
  "lessonId": "lesson-1-1",
  "completed": true,
  "quizScore": 4
}
```

### Update Module Progress
**Endpoint:** `POST /api/progress/module`

---

## Jobs APIs (Future)

### Get Job Listings
**Endpoint:** `GET /api/jobs`

**Query Parameters:**
- `page`: Page number
- `search`: Search term
- `type`: Job type filter

### Post Job (Admin)
**Endpoint:** `POST /api/jobs`

**Request Body:**
```json
{
  "title": "Business Manager",
  "company": "Tech Solutions",
  "location": "Bangalore",
  "type": "full-time",
  "salary": "₹12-18 LPA",
  "description": "...",
  "applyUrl": "https://..."
}
```

---

## Payment APIs (Future - Razorpay Integration)

### Create Payment Order
**Endpoint:** `POST /api/payment/create-order`

**Request Body:**
```json
{
  "amount": 999,
  "currency": "INR",
  "email": "john@example.com"
}
```

**Response:**
```json
{
  "orderId": "order_xxxx",
  "amount": 999,
  "currency": "INR",
  "key": "rzp_test_xxxx"
}
```

### Verify Payment
**Endpoint:** `POST /api/payment/verify`

**Request Body:**
```json
{
  "orderId": "order_xxxx",
  "paymentId": "pay_xxxx",
  "signature": "signature_xxxx"
}
```

---

## Webhook APIs (Future)

### Razorpay Webhook
**Endpoint:** `POST /api/webhook/razorpay`

Handles payment success/failure notifications from Razorpay.

---

## Error Responses

All APIs use standard HTTP status codes:

- `200` - Success
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `405` - Method Not Allowed
- `500` - Internal Server Error

**Error Response Format:**
```json
{
  "error": "Error message description",
  "code": "ERROR_CODE"
}
```

---

## Rate Limiting

API endpoints are rate-limited to prevent abuse:
- Anonymous: 100 requests/hour
- Authenticated: 1000 requests/hour
- Admin: Unlimited

---

## Authentication

Most protected endpoints require authentication:

**Header:**
```
Authorization: Bearer <token>
```

Or session-based authentication via cookies.

---

## Data Models

### User
```typescript
{
  id: string;
  name: string;
  email: string;
  phone: string;
  accessCode: string;
  whyLearnAI: string;
  createdAt: Date;
  progress: {
    modulesCompleted: number;
    lessonsCompleted: number;
    examPassed: boolean;
  }
}
```

### Module
```typescript
{
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  category: string;
  lessons: Lesson[];
}
```

### Lesson
```typescript
{
  id: string;
  moduleId: string;
  lessonNumber: number;
  title: string;
  content: string[];
  quiz: Quiz[];
  estimatedTime: number;
}
```

### Quiz
```typescript
{
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}
```

---

## Notes

- All timestamps are in ISO 8601 format (UTC)
- All monetary amounts are in INR (Indian Rupees)
- Email addresses are validated and must be unique
- Phone numbers should include country code
- Access codes are 8 characters (alphanumeric, uppercase)

---

For API support or questions, contact: support@iiskills.cloud
