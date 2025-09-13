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

    if (req.method === 'GET') {
      // Webhook verification
      const url = new URL(req.url);
      const mode = url.searchParams.get('hub.mode');
      const token = url.searchParams.get('hub.verify_token');
      const challenge = url.searchParams.get('hub.challenge');

      if (mode === 'subscribe' && token === Deno.env.get('WHATSAPP_VERIFY_TOKEN')) {
        return new Response(challenge, { status: 200 });
      }
      
      return new Response('Forbidden', { status: 403 });
    }

    if (req.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    const payload = await req.json();

    // Process WhatsApp webhook payload
    if (payload.entry && payload.entry[0]) {
      const changes = payload.entry[0].changes;
      
      for (const change of changes) {
        if (change.value && change.value.messages) {
          for (const message of change.value.messages) {
            await processIncomingMessage(message, change.value.contacts[0]);
          }
        }
      }
    }

    return new Response('OK', { status: 200, headers: corsHeaders });

  } catch (error) {
    console.error('WhatsApp webhook error:', error);
    return new Response('Error', { status: 500, headers: corsHeaders });
  }
});

async function processIncomingMessage(message: any, contact: any) {
  const phoneNumber = message.from;
  const messageText = message.text?.body || '';
  const messageType = message.type;

  console.log(`Incoming WhatsApp from ${phoneNumber}: ${messageText}`);

  // TODO: 
  // 1. Find or create contact by phone number
  // 2. Find or create deal (source: 'whatsapp')
  // 3. Log as activity (type: 'whatsapp_in')
  // 4. Send notification to admin
  // 5. Auto-reply if first-time contact
}