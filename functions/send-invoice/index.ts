import { serve } from 'https://deno.land/std@0.208.0/http/server.ts';

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

    const { invoiceId, contactEmail } = await req.json();

    // TODO: Get invoice from Firebase
    // TODO: Generate/get PDF from storage
    // TODO: Send email with PDF attachment and payment instructions

    const emailTemplate = `
      <h2>Invoice from Signature By SB</h2>
      <p>Thank you for choosing Signature By SB for your music production needs.</p>
      <p>Please find your invoice attached. Payment instructions:</p>
      <ul>
        <li>Bank Transfer: [Account Details]</li>
        <li>UPI ID: signaturebysb@paytm</li>
        <li>PayPal: payments@signaturebysb.com</li>
      </ul>
      <p>Please reply to confirm payment or contact us with any questions.</p>
    `;

    // TODO: Send email using your preferred email service
    console.log('Sending invoice email to:', contactEmail);
    console.log('Email template:', emailTemplate);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Invoice sent successfully'
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
    console.error('Send invoice error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to send invoice'
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