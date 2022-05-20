import React, { useEffect, useState } from 'react';

import Sound from 'react-sound';
import Valhalla from './assets/valhalla.mp3';
import ValhallaMetal from './assets/valhalla_metal.mp3';
import { ethers } from 'ethers';
import './App.css';

// Components
import LoadingIndicator from './Components/LoadingIndicator';


const App = () => {

// State
const [currentAccount, setCurrentAccount] = useState(null);
const [characterNFT, setCharacterNFT] = useState(null);
const [metaMaskMsg, setMetaMaskMsg] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isPlaying, setIsPlaying] = useState(true);
const [isMetal, setIsMetal] = useState(true);
const [connected, setConnected] = useState(false);
const [phantom, setPhantom] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    console.log("check if wallet is connected");
  };


  const connectWalletAction = async () => {
    console.log("connect wallet action");
    try{
      const res = await window.solana.connect()
      setCurrentAccount(res.publicKey.toString())
      setConnected(true)
    }
    catch (err){
      console.log(err);
    }
  };

  const disconnectWalletAction =() => {
    window.solana.disconnect()
    setConnected(false)
  };

  // Render Methods
  const renderContent = () => {
    if (connected !== true) {
      return (
        <div className="connect-wallet-container">
          <button
            className="cta-button connect-wallet-button"
            onClick={connectWalletAction}
          >
            CONNECT WALLET TO PLAY
          </button>
        </div>
      );
    }
    else{
      return (
        <div className="connect-wallet-container">
          <button
            className="cta-button connect-wallet-button"
            onClick={disconnectWalletAction}
          >
            DISCONNECT
          </button>
        </div>
      )
    }
  };

// const renderContent = () => {
//   if (isLoading) {
//     return <LoadingIndicator />;
//   }
//   if (!currentAccount) {
//     return (
//       <div className="connect-wallet-container">
//         <button
//           className="cta-button connect-wallet-button"
//           onClick={connectWalletAction}
//         >
//           CONNECT WALLET TO PLAY
//         </button>
//       </div>
//     );
//   }
// };

  return (

    <div className="App">
      <div className="container">      
        <div className="sound-box">
          <span className="sound-toggle" 
            onClick={() => setIsPlaying(!isPlaying ? true : false)}>
              {isPlaying ? '🔊' : '🔇'} 
          </span>
          <span className="sound-toggle-no-animation" 
            onClick={() => setIsMetal(!isMetal ? true : false)}>
              {isMetal ? '🎸' : '🪕'}
          </span>

        </div>
        <div className="error">{metaMaskMsg ? 'You need MetaMask to play!' : ''}</div>
        <div className="header glow-text gradient-text">SUSSY CATS
          {/*<p className="sub-text">Fight For Valhalla</p>*/}
        </div>
        {renderContent()}
      </div>
      <Sound
        url={isMetal ? ValhallaMetal: Valhalla}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={20}
        loop
      />
      <div className="footer-container">
        <div className="footer-text"/>
        &copy; 2022 SUSSYCATS Created with 🔥 by <b>Metafi</b>
      </div>
    </div>
  );
};

export default App;