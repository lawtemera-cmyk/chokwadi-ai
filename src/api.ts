import type { VerificationResult } from './types';

// Pipedream webhook for logging (no n8n needed)
const PIPEDREAM_WEBHOOK = 'https://eov7k19rfqd9gyh.m.pipedream.net';

export async function verifyClaim(claim: string): Promise<VerificationResult> {
  // Send data to Pipedream for logging (fire and forget)
  fetch(PIPEDREAM_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      timestamp: new Date().toISOString(),
      claim_text: claim,
      verdict: "Demo mode - real verification coming soon",
      confidence_score: 0
    }),
  }).catch(err => console.warn('Logging failed:', err));

  // Return demo response so UI works smoothly
  return {
    verdict: "Demo Mode",
    confidence: 100,
    explanation: "This is a demonstration of Chokwadi AI's interface. The full AI verification engine is being prepared. Your request has been logged.",
    sources: [
      {
        title: "Chokwadi AI Demo",
        domain: "chokwadi.ai",
        stance: "supporting",
        url: "https://chokwadiai.app.n8n.cloud"
      }
    ]
  };
}

