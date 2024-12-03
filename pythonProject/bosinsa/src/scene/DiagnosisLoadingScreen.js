import React from 'react';

const DiagnosisLoadingScreen = () => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    textAlign: 'center',
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '6px solid #fff',
    borderTop: '6px solid #555',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px',
  };

  const textStyle = {
    fontSize: '20px',
    fontWeight: 'normal',
  };

  return (
    <div style={containerStyle}>
      <div style={spinnerStyle}></div>
      <p style={textStyle}>진단 중입니다. 잠시만 기다려 주세요...</p>
      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DiagnosisLoadingScreen;
