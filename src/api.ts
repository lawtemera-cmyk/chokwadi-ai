import type { VerificationResult } from './types';

const PIPEDREAM_WEBHOOK = 'https://eov7k19rfqd9gyh.m.pipedream.net';

export async function verifyClaim(claim: string): Promise<VerificationResult> {
  console.log('verifyClaim called with:', claim);

  // Log to Pipedream
  fetch(PIPEDREAM_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      claim_text: claim,
    }),
  }).catch(err => console.warn('Logging failed:', err));

  try {
    console.log('Calling Netlify Function...');
    const response = await fetch('/.netlify/functions/verify-claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ claim }),
    });

    console.log('Netlify Function response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Netlify Function error:', errorText);
      throw new Error(`HTTP error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('Netlify Function response data:', data);

    // Ensure the response matches the VerificationResult type
    return {
      verdict: data.verdict || 'Unproven',
      confidence: typeof data.confidence_score === 'number' ? data.confidence_score : 0,
      explanation: data.explanation || 'No explanation available',
      sources: Array.isArray(data.sources) ? data.sources : [
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
    return {
      verdict: 'Unknown',
      confidence: 0,
      explanation: error instanceof Error ? error.message : 'Verification failed. Please try again.',
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

