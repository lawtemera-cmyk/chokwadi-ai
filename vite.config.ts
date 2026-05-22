export type Verdict = "True" | "False" | "Misleading" | "Unproven" | "Demo Mode";

export type SourceStance = "Agree" | "Contradict" | "Neutral";

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
