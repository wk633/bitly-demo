import React, { Component } from 'react';
import background from './background-image.png';
import logo from './logo.svg';

import config from './config/config.js';
import RstElem from './RstElem.js';

const BitlySDK = window.BitlySDK;
const bitlySDK = new BitlySDK({
  login: config.login,
  apiKey: config.apiKey
});

class App extends Component {
  constructor(){
    super();
    this.state = {
      curInput: '',
      history: [1,2,3]
    }
  }
  componentDidMount(){
    // bitlySDK.shorten('http://google.com/').then(function(result){
    //   console.log(result);
    //   Promise.all([bitlySDK.info(result.url), bitlySDK.clicks(result.url)])
    //   .then(function(rst){
    //     console.log(rst);
    //   });
    // });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header" style={{backgroundImage: `url(${background})`}}>
          <nav className="App-nav">
            <img src={logo} className="App-logo"></img>
            <div className="App-link">TOUR</div>
            <div className="App-link">ENTERPRISE</div>
            <div className="App-link">RESOURCES</div>
            <div className="App-link">ABOUT</div>
          </nav>
          <div className="App-slogan">
            SHORTEN. SHARE. MEASURE.
          </div>
          <div className="App-sub-slogan">
            Join Bitly, the world's leading link management platform.
          </div>
          <div>
            <div className="App-input">
              <input className="input-area" placeholder="Paste a link to shorten it"/>
              <div className="short-btn">SHORTEN</div>
            </div>
            <div className="App-result-display">
              <div className="result-wrapper">
                {
                  this.state.history.map(item => {
                    return <RstElem></RstElem>
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
