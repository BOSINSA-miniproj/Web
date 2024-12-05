import React, { useState, useEffect } from 'react';
import Step1Screen from './scene/Step1Screen';
import DiagnosisLoadingScreen from './scene/DiagnosisLoadingScreen';
import ResultScreen from './scene/ResultScreen';
import RecommendationScreen from './scene/RecommendationScreen';
import LoadingScreen from './scene/LoadingScreen';

const App = () => {
  const [step, setStep] = useState(0);
  const [name, setName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [fileName, setFileName] = useState('');
  const [personalColor, setPersonalColor] = useState('');

  const recommendations = [
    {
      name: '[with 김무열] 데일리 라운드 니트 - 12 COLOR',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20220818/2723767/2723767_17292130151891_big.jpg',
      url: 'https://www.musinsa.com/products/2723767',
    },
    {
      name: '워셔블 케이블 라운드 니트 - 5 COLOR',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20230824/3494992/3494992_17296467139345_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3494992',
    },
    {
      name: '[with 이병헌] 체크 셔츠 - 그린',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20220308/2345678/2345678_1_500.jpg',
      url: 'https://www.musinsa.com/products/2345678',
    },
    {
      name: '오버핏 그래피티 로고 후디-네이비',
      image: 'https://image.msscdn.net/thumbnails/images/goods_img/20230116/3026609/3026609_16740279294962_big.jpg?w=1200',
      url: 'https://www.musinsa.com/products/3026609',
    },
  ];

  useEffect(() => {
    if (step === 0) {
      const timer = setTimeout(() => setStep(1), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = (inputName, uploadedImage, fileName) => {
    setName(inputName);
    setUploadedImage(uploadedImage);
    setFileName(fileName);
    setStep(2);
  };

  useEffect(() => {
    if (step === 2) {
      const timer = setTimeout(() => {
        setPersonalColor('summer');
        setStep(3);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleShowMore = () => setStep(4);

  const handleRestart = () => {
    setName('');
    setUploadedImage(null);
    setFileName('');
    setPersonalColor('');
    setStep(1);
  };

  return (
    <>
      {/* 처음 로딩 화면 */}
      {step === 0 && <LoadingScreen />}
      {/* Step1Screen */}
      {step === 1 && <Step1Screen onNext={handleNext} />}
      {/* 진단 로딩 화면 */}
      {step === 2 && (
        <DiagnosisLoadingScreen
          name={name}
          uploadedImage={uploadedImage}
          fileName={fileName}
        />
      )}
      {/* 결과 화면 */}
      {step === 3 && (
        <ResultScreen
          name={name}
          personalColor={personalColor}
          onShowMore={handleShowMore}
        />
      )}
      {/* 추천 화면 */}
      {step === 4 && (
        <RecommendationScreen
          recommendations={recommendations}
          personalColor={personalColor}
          name={name}
          uploadedImage={uploadedImage}
          onRestart={handleRestart}
        />
      )}
    </>
  );
};

export default App;
