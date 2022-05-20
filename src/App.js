import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import LoadingIndicator from './Components/LoadingIndicator';
import Faqs from "./Components/faqs";


const App = () => {

// State
const [currentAccount, setCurrentAccount] = useState(null);
const [connected, setConnected] = useState(false);
  const [phantom, setPhantom] = useState(null);

  useEffect(() => {
    if ("solana" in window) {
      setPhantom(window["solana"]);
    }
  }, []);


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
    if (phantom) {
      if(!connected){
        return (
          <div>
            <a onClick={connectWalletAction} href="#" className="card">
              <img src="https://thesussycats.netlify.app/assets/img/gif/01.gif" className="card__image" alt="" />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img className="card__thumb" src="https://pbs.twimg.com/profile_images/1394116783792025603/jTMcoZRY_400x400.jpg" alt="" />
                  <div className="card__header-text">

                    <h3 className="card__title">CONNECT TO PLAY</h3>
                  </div>
                </div>
                <p className="card__description">The connection will take you to sussy cat World <br/><br/><br/></p>
              </div>
            </a>
          </div>
        );
      }
      return (
        <button onClick={disconnectWalletAction}>disconnect</button>
      )


    }
    else{
      return (
        <div>
          <a href="https://phantom.app/"
             target="_blank" className="card">
            <img src="https://thesussycats.netlify.app/assets/img/gif/01.gif" className="card__image" alt="" />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                  <path />
                </svg>
                <img className="card__thumb" src="https://pbs.twimg.com/profile_images/1394116783792025603/jTMcoZRY_400x400.jpg" alt="" />
                <div className="card__header-text">

                  <h3 className="card__title">GET PHANTOM</h3>
                </div>
              </div>
            </div>
          </a>
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
<>
  <div className="App">

    <div className="container">
      <div className="sound-box">
        <a href="https://discord.com/invite/54j5Dfn6zk" target="_blank">
          <button className="btn"><i className="fab fa-discord"></i> Discord</button>
        </a>
        <a href="https://twitter.com/CatsSussy" target="_blank">
          <button className="btn" style={{marginLeft:"5px"}}><i className="fab fa-twitter"></i> Twitter</button>
        </a>
      </div>
      <div className=" header home__title">Sussy Cats</div>
      <div>
        {renderContent()}
      </div>


    </div>


    {/*<div className="footer-container">*/}
    {/*  <div className="footer-text"/>*/}
    {/*  &copy; 2022 SUSSYCATS Created with 🔥 by <b>Metafi</b>*/}
    {/*</div>*/}
    <Faqs/>
  </div>

</>

  );
};

export default App;