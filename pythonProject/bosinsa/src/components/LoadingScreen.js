import React from 'react';

const LoadingScreen = () => {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    backgroundColor: '#333',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '48px',
    fontWeight: 'bold',
  };

  const textStyle = {
    color: 'white',
    fontSize: '100px',
    fontWeight: 'bold',
    animation: 'fadeIn 3s ease-in-out',
  };

  return (
    <div style={containerStyle}>
      <div style={textStyle}>BOSINSA</div>
      <style>
        {`
          @keyframes fadeIn {
            0% {
              opacity: 0;
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

export default LoadingScreen;
