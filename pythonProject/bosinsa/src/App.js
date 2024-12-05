import React, { useState, useEffect } from 'react';
import Step1Screen from './scene/Step1Screen';
import DiagnosisLoadingScreen from './scene/DiagnosisLoadingScreen';
import ResultScreen from './scene/ResultScreen';

const App = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [personalColor, setPersonalColor] = useState('');

  const handleNext = (name, uploadedImage, fileName) => {
    setName(name);
    setUploadedImage(uploadedImage);
    setFileName(fileName);
    setStep(2);
  };

  useEffect(() => {
    if (step === 2) {
      setTimeout(() => {
        const samplePersonalColor = "summer";
        setPersonalColor(samplePersonalColor);
        setStep(3);
      }, 3000);
    }
  }, [step]);

  const handleShowMore = () => {
    alert('다음 페이지로 이동합니다!');
  };

  return (
    <>
      {step === 1 && <Step1Screen onNext={handleNext} />}
      {step === 2 && <DiagnosisLoadingScreen name={name} uploadedImage={uploadedImage} fileName={fileName} />}
      {step === 3 && <ResultScreen name={name} personalColor={personalColor} onShowMore={handleShowMore} />}
    </>
  );
};

export default App;
