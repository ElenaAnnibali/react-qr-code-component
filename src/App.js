/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
/* eslint-disable react/no-unknown-property */
import React from 'react';

const componentStyles = css`
  .card {
    width: 320px;
    height: 499px;
    background-color: #fff;
    justify-content: center;
    border-radius: 20px;
  }

  .qrCode {
    background: url('/images/image-qr-code.png');
    background-size: contain;
    position: relative;
    top: 16px;
    left: 16px;
    width: 288px;
    height: 288px;
    border-radius: 10px;
  }

  h3,
  p {
    text-align: center;
    margin: 0 35px 0 35px;
  }

  h3 {
    font-family: 'Outfit-Bold', Georgia, serif;
    font-size: 22px;
    position: relative;
    top: 35px;
    color: hsl(218, 44%, 22%);
  }

  p {
    position: relative;
    top: 54px;
  }
`;

function App() {
  return (
    <div css={componentStyles} className="App">
      <div className="card">
        <div className="qrCode" />
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
}

export default App;
