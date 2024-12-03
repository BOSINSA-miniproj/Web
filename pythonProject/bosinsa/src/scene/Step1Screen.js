import React, { useState } from 'react';

const Step1Screen = ({ onNext }) => {
  const [name, setName] = useState('');
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!name || !uploadedImage) {
      alert('이름과 사진을 모두 입력해주세요.');
      return;
    }
    onNext();
  };

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
    paddingTop: '80px',
  };

  const headerStyle = {
    position: 'fixed',
    top: 0,
    width: '100%',
    backgroundColor: '#333',
    color: 'white',
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
    textStroke: '1px white',
    color: 'white',
  };

  const coordinatorStyle = {
    fontSize: '16px',
    fontWeight: 'normal',
    background: 'linear-gradient(to right, #9734dd, #f9d5a2 70%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textDecoration: 'none',
  };

  const inputStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #fff',
    outline: 'none',
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '16px',
    color: '#333',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const imageStyle = {
    marginTop: '20px',
    maxWidth: '300px',
    maxHeight: '300px',
    borderRadius: '8px',
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
        <h2>당신의 퍼스널 컬러를 진단해드릴게요</h2>
        <input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
        />
        <input type="file" accept="image/*" onChange={handleFileChange} style={inputStyle} />
        {uploadedImage && <img src={uploadedImage} alt="Uploaded Preview" style={imageStyle} />}
        <button onClick={handleSubmit} style={buttonStyle}>
          진단하기
        </button>
      </div>
    </>
  );
};

export default Step1Screen;
