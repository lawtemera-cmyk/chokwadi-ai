// netlify/functions/verify-claim.js

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { claim } = JSON.parse(event.body);
    const AGENT_ENDPOINT = process.env.AGENT_ENDPOINT;
    const AGENT_KEY = process.env.AGENT_KEY;

    if (!AGENT_ENDPOINT || !AGENT_KEY) {
      console.error('Missing AGENT_ENDPOINT or AGENT_KEY');
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Missing agent credentials' }),
      };
    }

    console.log('Endpoint:', AGENT_ENDPOINT);
    console.log('Claim:', claim);

    const response = await fetch(AGENT_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': AGENT_KEY,
      },
      body: JSON.stringify({
        messages: [{ role: 'user', content: claim }]
      }),
    });

    console.log('Response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Agent error:', errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Agent error: ${response.status} - ${errorText}` }),
      };
    }

    const data = await response.json();
    console.log('Agent response:', JSON.stringify(data, null, 2));

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error in verify-claim function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: `Failed to verify claim: ${error.message}` }),
    };
  }
};
