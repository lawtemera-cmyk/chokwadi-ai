import type { VerificationResult } from './types';

const PIPEDREAM_WEBHOOK = 'https://eov7k19rfqd9gyh.m.pipedream.net';

export async function verifyClaim(claim: string): Promise<VerificationResult> {
  // Send data to Pipedream for logging
  fetch(PIPEDREAM_WEBHOOK, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      claim_text: claim,
      verdict: "Unproven",
      confidence_score: 0
    }),
  }).catch(err => console.warn('Logging failed:', err));

  return {
    verdict: "Unproven",
    confidence: 0,
    explanation: "This is a demonstration of Chokwadi AI's interface. The full AI verification engine is being prepared. Your request has been logged.",
    sources: [
      {
        title: "Chokwadi AI Demo",
        domain: "chokwadi.ai",
        stance: "Neutral",
        url: "https://chokwadiai.app.n8n.cloud"
      }
    ]
  };
}

