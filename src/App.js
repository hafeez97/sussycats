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

  // Actions
  const checkIfWalletIsConnected = async () => {
    console.log("check if wallet is connected");
  };

  /*
   * Implement your connectWallet method here
   */
  const connectWalletAction = async () => {
    console.log("connect wallet action");
  };

  // Render Methods
const renderContent = () => {

  if (isLoading) {
    return <LoadingIndicator />;
  }
  
  /*
   * Scenario #1
   */
  if (!currentAccount) {
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
    /*
     * Scenario #2
     */
  }
};

  useEffect(() => {
    // setIsLoading(true);
    // checkIfWalletIsConnected();
  }, []);

  /*
 * Add this useEffect right under the other useEffect where you are calling checkIfWalletIsConnected
 */

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
        {/* 🪓⚔️🛡️🗡️🏹 */}
        {renderContent()}
      </div>
      <Sound
        url={isMetal ? ValhallaMetal: Valhalla}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        volume={20}
        loop
      />
      <div className="footer-container">
        <div className="footer-text"></div>
        &copy; 2022 sussycats Created with 🔥 by <b>Metafi</b>
      </div>
    </div>
  );
};

export default App;