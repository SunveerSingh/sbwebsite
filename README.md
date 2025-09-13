# Signature By SB - Website + Lead CRM

A premium website and integrated CRM system for Signature By SB, a music producer specializing in Punjabi music production, mixing, and mastering.

## Features

### Website
- **Landing Page**: Cinematic hero section with signature process, selected work, and services
- **The Collective**: Detailed service information with FAQ and process explanation  
- **Contact/Demo Submission**: Professional form with file uploads and lead capture

### CRM System
- **Pipeline Management**: Kanban-style deal tracking through production stages
- **Contact Management**: Centralized artist and client database
- **Task Management**: Automated follow-ups and deadline tracking
- **Quote Generation**: Professional PDF quotes with branded templates
- **Invoice Management**: Sequential numbering with payment tracking
- **WhatsApp Integration**: Direct messaging and webhook processing

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Firebase (Auth, Firestore, Storage, Functions)
- **Forms**: React Hook Form with Yup validation
- **Audio**: Custom before/after comparison players
- **PDF Generation**: jsPDF for quotes and invoices
- **File Uploads**: React Dropzone with progress tracking

## Getting Started

### Prerequisites
- Node.js 18+ 
- Firebase project with enabled services
- WhatsApp Business API (for messaging)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure Firebase:
   - Update `src/firebase/config.ts` with your Firebase credentials
   - Enable Authentication, Firestore, Storage, and Functions

3. Set up environment variables:
```bash
# Create .env file
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_WHATSAPP_VERIFY_TOKEN=your_webhook_token
```

4. Deploy Firebase Functions:
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Deploy functions
firebase deploy --only functions
```

5. Start development server:
```bash
npm run dev
```

## Configuration

### Business Settings
Update the following in the admin settings panel:
- Currency and tax rates
- Invoice numbering prefix
- Payment instructions
- Service pricing

### Email Templates
Customize email templates in the Firebase Functions for:
- Lead confirmations
- Quote deliveries
- Invoice notifications
- Follow-up sequences

### Audio Assets
Replace placeholder audio URLs in:
- `src/pages/Landing.tsx` (selected work section)
- `src/pages/Collective.tsx` (demo player)

## Deployment

### Build for Production
```bash
npm run build
```

### Firebase Hosting
```bash
firebase deploy --only hosting
```

### Environment Setup
- Production Firebase project
- WhatsApp Business API configuration
- Email service integration (SendGrid/Mailgun)
- Domain configuration

## Lead Pipeline Stages

1. **New** - Initial contact/demo submission
2. **Qualified** - Budget and timeline confirmed
3. **Discovery Booked** - Consultation scheduled
4. **Quote Sent** - Proposal delivered
5. **Deposit Received** - Project initiated
6. **Production** - Music creation phase
7. **Vocals Received** - Vocal recordings delivered
8. **Mix** - Mixing in progress
9. **Master** - Mastering phase
10. **Client Approval** - Final review
11. **Release Prep** - Distribution preparation
12. **Closed Won/Lost** - Project completed

## Support

For technical support or customization requests, contact the development team.

### Contact Details
- **WhatsApp**: +1 (647) 932-3409
- **Email**: hello@signaturebysb.com
- **Instagram**: @signaturebysb

---

Built with ❤️ for artists who demand excellence.