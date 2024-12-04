import React, { useState, useEffect } from 'react';
import Step1Screen from './scene/Step1Screen';
import DiagnosisLoadingScreen from './scene/DiagnosisLoadingScreen';
import LoadingScreen from './scene/LoadingScreen';

const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState('');

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => {
        setStep(1);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = (name, uploadedImage, fileName) => {
    setName(name);
    setUploadedImage(uploadedImage);
    setFileName(fileName);
    setStep(2);
  };

  return (
    <>
      {step === 0 && <LoadingScreen />} {}
      {step === 1 && <Step1Screen onNext={handleNext} />} {}
      {step === 2 && (
        <DiagnosisLoadingScreen
          name={name}
          uploadedImage={uploadedImage}
          fileName={fileName}
        />
      )} {}
    </>
  );
};

export default App;
