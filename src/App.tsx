import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ResultsSection } from './components/ResultsSection';
import { HowItWorks } from './components/HowItWorks';
import { UseCases } from './components/UseCases';
import { TrustSection } from './components/TrustSection';
import { Footer } from './components/Footer';
import { DemoModal } from './components/DemoModal';
import { verifyClaim } from './api';
import type { VerificationState } from './types';
import './App.css';

export default function App() {
  const [verificationState, setVerificationState] = useState<VerificationState>({ status: 'idle' });
  const [currentClaim, setCurrentClaim] = useState('');
  const [showDemoModal, setShowDemoModal] = useState(false);
  const resultsRef = useRef<HTMLDivElement>(null);

  const handleVerify = async (claim: string) => {
    setCurrentClaim(claim);
    setVerificationState({ status: 'loading' });

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    try {
      const result = await verifyClaim(claim);
      setVerificationState({ status: 'success', result });
    } catch (err) {
      setVerificationState({
        status: 'error',
        message: err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.',
      });
    }
  };

  const handleReset = () => {
    setVerificationState({ status: 'idle' });
    setCurrentClaim('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans">
      <Navbar onRequestDemo={() => setShowDemoModal(true)} />

      <HeroSection
        onVerify={handleVerify}
        onRequestDemo={() => setShowDemoModal(true)}
        isLoading={verificationState.status === 'loading'}
      />

      <div ref={resultsRef}>
        <ResultsSection
          state={verificationState}
          claim={currentClaim}
          onReset={handleReset}
        />
      </div>

      <HowItWorks />
      <UseCases />
      <TrustSection />
      <Footer />

      {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
    </div>
  );
}
