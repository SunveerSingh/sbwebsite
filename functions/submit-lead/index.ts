import { serve } from 'https://deno.land/std@0.208.0/http/server.ts';

interface LeadSubmission {
  name: string;
  artistName?: string;
  email: string;
  whatsapp: string;
  location?: string;
  timezone?: string;
  instagram?: string;
  spotify?: string;
  youtube?: string;
  projectType: string;
  services: string[];
  budgetMin?: number;
  budgetMax?: number;
  timelineStart?: string;
  timelineEnd?: string;
  urgency?: string;
  hearAbout?: string;
  notes?: string;
  files?: any[];
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

serve(async (req: Request) => {
  try {
    if (req.method === 'OPTIONS') {
      return new Response(null, { status: 200, headers: corsHeaders });
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    const submission: LeadSubmission = await req.json();

    // Calculate priority score
    const calculatePriorityScore = (data: LeadSubmission): number => {
      let score = 50; // Base score

      // Budget influence
      if (data.budgetMin && data.budgetMin >= 5000) score += 20;
      else if (data.budgetMin && data.budgetMin >= 2000) score += 10;

      // Urgency influence
      if (data.urgency === 'Rush (under 1 week)') score += 15;
      else if (data.urgency === 'Priority (1-2 weeks)') score += 10;

      // Services influence
      if (data.services.includes('Production')) score += 15;
      if (data.services.length > 3) score += 10;

      // Social presence
      if (data.spotify || data.youtube) score += 10;
      if (data.instagram) score += 5;

      return Math.min(100, Math.max(10, score));
    };

    const priorityScore = calculatePriorityScore(submission);

    // Create contact and deal records (Firebase integration needed)
    const contactData = {
      name: submission.name,
      artistName: submission.artistName,
      email: submission.email,
      whatsappE164: submission.whatsapp,
      instagram: submission.instagram,
      spotify: submission.spotify,
      youtube: submission.youtube,
      location: submission.location,
      timezone: submission.timezone,
      notes: submission.notes,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const dealData = {
      title: `${submission.projectType} - ${submission.name}`,
      source: 'website',
      stage: 'New',
      services: submission.services,
      budget: {
        min: submission.budgetMin || 0,
        max: submission.budgetMax || 0,
        currency: 'USD'
      },
      timeline: {
        start: submission.timelineStart ? new Date(submission.timelineStart) : undefined,
        end: submission.timelineEnd ? new Date(submission.timelineEnd) : undefined
      },
      priorityScore,
      ownerUserId: 'sb1', // Default to SB
      createdAt: new Date(),
      updatedAt: new Date()
    };

    // TODO: Save to Firebase
    console.log('Contact:', contactData);
    console.log('Deal:', dealData);

    // TODO: Send confirmation email
    // TODO: Send WhatsApp confirmation
    // TODO: Create discovery call task

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Demo submitted successfully',
        contactId: 'generated-contact-id',
        dealId: 'generated-deal-id'
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );

  } catch (error) {
    console.error('Submit lead error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Internal server error'
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      }
    );
  }
});