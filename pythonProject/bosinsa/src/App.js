import React, { useState, useEffect } from 'react';
import Step1Screen from './scene/Step1Screen';
import LoadingScreen from './scene/LoadingScreen';
import DiagnosisLoadingScreen from './scene/DiagnosisLoadingScreen';

const App = () => {
  const [currentStep, setCurrentStep] = useState('loading');

  useEffect(() => {
    if (currentStep === 'loading') {
      const timer = setTimeout(() => {
        setCurrentStep('step1');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentStep]);

  const handleNextToDiagnosisLoading = () => {
    setCurrentStep('diagnosisLoading');
  };

  return (
    <div>
      {currentStep === 'loading' && <LoadingScreen />}
      {currentStep === 'step1' && <Step1Screen onNext={handleNextToDiagnosisLoading} />}
      {currentStep === 'diagnosisLoading' && <DiagnosisLoadingScreen />}
    </div>
  );
};

export default App;
