import React, { useState, useEffect } from 'react';
import Step1Screen from './scene/Step1Screen';
import DiagnosisLoadingScreen from './scene/DiagnosisLoadingScreen';
import ResultScreen from './scene/ResultScreen';
import RecommendationScreen from './scene/RecommendationScreen';

const App = () => {
  const [step, setStep] = useState(1);
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
    setStep(4);
  };

  return (
    <>
      {step === 1 && <Step1Screen onNext={handleNext} />}
      {step === 2 && (
        <DiagnosisLoadingScreen
          name={name}
          uploadedImage={uploadedImage}
          fileName={fileName}
        />
      )}
      {step === 3 && (
        <ResultScreen
          name={name}
          personalColor={personalColor}
          onShowMore={handleShowMore}
        />
      )}
      {step === 4 && (
        <RecommendationScreen
          recommendations={recommendations}
          personalColor={personalColor}
        />
      )}
    </>
  );
};

export default App;
