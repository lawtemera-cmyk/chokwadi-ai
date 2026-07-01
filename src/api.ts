import type { VerificationResult } from './types';

const PIPEDREAM_WEBHOOK = 'https://eov7k19rfqd9gyh.m.pipedream.net';

export async function verifyClaim(claim: string): Promise<VerificationResult> {
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
    const response = await fetch('/.netlify/functions/verify-claim', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ claim }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const data = await response.json();

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
    // Return a safe fallback that matches the type
    return {
      verdict: 'Unknown',  // Changed from 'Error' to 'Unknown'
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

