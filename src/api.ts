import type { VerificationResult } from './types';

const N8N_WEBHOOK = 'https://chokwadiai.app.n8n.cloud/webhook/verify-claim';

export async function verifyClaim(claim: string): Promise<VerificationResult> {
  const response = await fetch(N8N_WEBHOOK, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ claim }),
  });

  if (!response.ok) {
    throw new Error(`Verification failed: ${response.statusText}`);
  }

  const data = await response.json();

  if (!data.verdict || typeof data.confidence !== 'number' || !data.explanation) {
    throw new Error('Invalid response format from verification service');
  }

  return data as VerificationResult;
}
