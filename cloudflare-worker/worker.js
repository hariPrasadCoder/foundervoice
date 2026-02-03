// Cloudflare Worker - Book Signup API
// Deploy to Cloudflare Workers and set NOTION_API_KEY secret

const NOTION_DATABASE_ID = '8505bf71-6d1a-43ac-880a-627d1ff761c1';

export default {
  async fetch(request, env) {
    // CORS headers
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    // Handle preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    try {
      const { email } = await request.json();

      if (!email || !email.includes('@')) {
        return new Response(JSON.stringify({ error: 'Valid email required' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Get API key from environment secret
      const notionKey = env.NOTION_API_KEY;
      if (!notionKey) {
        return new Response(JSON.stringify({ error: 'Server config error' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      // Add to Notion
      const response = await fetch('https://api.notion.com/v1/pages', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${notionKey}`,
          'Notion-Version': '2025-09-03',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          parent: { database_id: NOTION_DATABASE_ID },
          properties: {
            'Email': { title: [{ text: { content: email } }] },
            'Signed Up': { date: { start: new Date().toISOString().split('T')[0] } },
            'Source': { select: { name: 'Website' } }
          }
        }),
      });

      if (!response.ok) {
        console.error('Notion error:', await response.text());
        return new Response(JSON.stringify({ error: 'Failed to save' }), {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
      }

      return new Response(JSON.stringify({ success: true }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: 'Something went wrong' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }
  }
};
