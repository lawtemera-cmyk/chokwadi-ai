import type { VerificationResult } from './types';

const PIPEDREAM_WEBHOOK = 'https://eov7k19rfqd9gyh.m.pipedream.net';

export async function verifyClaim(claim: string): Promise<VerificationResult> {
  // Send data to Pipedream for logging (keep this)
  fetch(PIPEDREAM_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      claim_text: claim,
    }),
  }).catch(err => console.warn('Logging failed:', err));

  try {
    // Call your Netlify Function
    const response = await fetch('/.netlify/functions/verify-claim', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ claim }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Verification failed');
    }

    const data = await response.json();

    // Return the data in the format your frontend expects
    return {
      verdict: data.verdict || 'Unproven',
      confidence: data.confidence_score || 0,
      explanation: data.explanation || 'No explanation available',
      sources: data.sources || [
        {
          title: 'Chokwadi AI',
          domain: 'chokwadi.ai',
          stance: 'Neutral',
          url: 'https://chokwadi.netlify.app'
        }
      ]
    };
  } catch (error) {
    console.error('Verification error:', error);
    // Return a fallback response if the agent fails
    return {
      verdict: 'Error',
      confidence: 0,
      explanation: error instanceof Error ? error.message : 'Failed to verify claim. Please try again.',
      sources: [
        {
          title: 'Chokwadi AI',
          domain: 'chokwadi.ai',
          stance: 'Neutral',
          url: 'https://chokwadi.netlify.app'
        }
      ]
    };
  }
}
 
