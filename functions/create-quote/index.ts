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

    const { dealId, items, currency, taxPct, validDays } = await req.json();

    // Calculate totals
    const subtotal = items.reduce((sum: number, item: any) => sum + item.subtotal, 0);
    const tax = (subtotal * taxPct) / 100;
    const total = subtotal + tax;

    const quote = {
      dealId,
      items,
      currency,
      taxPct,
      totals: { subtotal, tax, total },
      validUntil: new Date(Date.now() + validDays * 24 * 60 * 60 * 1000),
      status: 'draft',
      createdAt: new Date()
    };

    // TODO: Save quote to Firebase
    // TODO: Generate branded PDF
    // TODO: Upload PDF to Firebase Storage

    return new Response(
      JSON.stringify({
        success: true,
        quoteId: 'quote-' + Date.now(),
        quote
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
    console.error('Create quote error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'Failed to create quote'
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