import React from 'react';

const DiagnosisLoadingScreen = ({name, uploadedImage, fileName}) => {
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

  const imageStyle = {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    animation: 'fade 2s infinite',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>{`${name}님의 ${fileName} 기준으로 퍼스널 컬러를 진단 중입니다. 기대해주세요!`}</p>
      {uploadedImage && <img src={uploadedImage} alt="Uploaded" style={imageStyle} />}
      <div style={spinnerStyle}></div>
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
          @keyframes fade {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            opacity: 1;
          }
          }
        `}
      </style>
    </div>
  );
};

export default DiagnosisLoadingScreen;
