export type Verdict = "True" | "False" | "Misleading" | "Unverified" | "Demo Mode";

export type SourceStance = "supporting" | "contradicting" | "neutral";

export interface Source {
  title: string;
  domain: string;
  stance: SourceStance;
  url: string;
}

export interface VerificationResult {
  verdict: Verdict;
  confidence: number;
  explanation: string;
  sources: Source[];
}

export type VerificationState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; result: VerificationResult }
  | { status: 'error'; message: string };
