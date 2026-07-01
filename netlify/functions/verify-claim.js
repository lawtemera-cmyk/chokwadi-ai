// netlify/functions/verify-claim.js

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Get the claim from the request body
    const { claim } = JSON.parse(event.body);

    // Get the agent details from environment variables (set in Netlify)
    const AGENT_ENDPOINT = process.env.AGENT_ENDPOINT;
    const AGENT_KEY = process.env.AGENT_KEY;

    // Validate that the variables are set
    if (!AGENT_ENDPOINT || !AGENT_KEY) {
      console.error('Missing AGENT_ENDPOINT or AGENT_KEY');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'Server configuration error: Missing agent credentials' 
        }),
      };
    }

    console.log('Calling Foundry agent with claim:', claim);
    console.log('Endpoint:', AGENT_ENDPOINT);

    // Call your Foundry agent
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

    // Check if the response is OK
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Foundry agent error:', response.status, errorText);
      return {
        statusCode: response.status,
        body: JSON.stringify({ 
          error: `Agent error: ${response.status} - ${errorText}` 
        }),
      };
    }

    const data = await response.json();
    console.log('Foundry agent response:', JSON.stringify(data, null, 2));

    // Return the structured result to your frontend
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error in verify-claim function:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Failed to verify claim: ' + error.message 
      }),
    };
  }
};
