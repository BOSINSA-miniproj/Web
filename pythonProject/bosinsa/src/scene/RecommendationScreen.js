import React, { useState } from 'react';

const RecommendationScreen = ({ recommendations, personalColor }) => {
  const [currentRecommendation, setCurrentRecommendation] = useState(
    recommendations[0]
  );

  const handleNextRecommendation = () => {
    const randomIndex = Math.floor(Math.random() * recommendations.length);
    setCurrentRecommendation(recommendations[randomIndex]);
  };

  const styles = {
    Spring: {
      background: 'linear-gradient(to bottom, #F0EAD6, #FFE4C4)',
      headerColor: '#F0EAD6',
    },
    Summer: {
      background: 'linear-gradient(to bottom, #B0C4DE, #ADD8E6)',
      headerColor: '#B0C4DE',
    },
    Fall: {
      background: 'linear-gradient(to bottom, #8B4513, #CD853F)',
      headerColor: '#8B4513',
    },
    Winter: {
      background: 'linear-gradient(to bottom, #FFFFFF, #E0E0E0)',
      headerColor: '#FFFFFF',
    },
  };

  const currentStyle = styles[personalColor] || {
    background: '#333',
    headerColor: '#333',
  };

  const containerStyle = {
    width: '100vw',
    height: '100vh',
    background: currentStyle.background,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
    gap: '20px',
    padding: '20px',
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: currentStyle.headerColor,
    color: 'black',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '2px solid #444',
    boxSizing: 'border-box',
  };

  const bosinsaStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '24px',
    fontWeight: 'bold',
    WebkitTextStroke: '1px black',
    color: 'black',
  };

  const coordinatorStyle = {
    fontSize: '16px',
    fontWeight: 'normal',
    background: 'linear-gradient(to right, #9734dd, #f9d5a2 70%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
  };

  const imageStyle = {
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '8px',
  };

  const hyperlinkStyle = {
    color: '#00BFFF',
    textDecoration: 'underline',
    fontSize: '16px',
  };

  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#4CAF50',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, color 0.2s ease',
  };

  const buttonHoverStyle = {
    transform: 'scale(1.05)',
    color: '#007BFF',
  };

  return (
    <>
      {/* 헤더 */}
      <div style={headerStyle}>
        <div style={bosinsaStyle}>BOSINSA</div>
        <div style={coordinatorStyle}>당신만의 코디네이터</div>
      </div>

      {/* 본문 */}
      <div style={containerStyle}>
        <p>{currentRecommendation.name}</p>
        <img
          src={currentRecommendation.image}
          alt="추천된 옷"
          style={imageStyle}
        />
        <a
          href={currentRecommendation.url}
          target="_blank"
          rel="noopener noreferrer"
          style={hyperlinkStyle}
        >
          상품 보러가기
        </a>
        <button
          style={buttonStyle}
          onMouseOver={(e) => {
            e.target.style.transform = buttonHoverStyle.transform;
            e.target.style.color = buttonHoverStyle.color;
          }}
          onMouseOut={(e) => {
            e.target.style.transform = 'scale(1)';
            e.target.style.color = 'white';
          }}
          onClick={handleNextRecommendation}
        >
          다른 옷 보기!
        </button>
      </div>
    </>
  );
};

export default RecommendationScreen;
