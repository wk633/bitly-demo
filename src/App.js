import React, { Component } from 'react';
import background from './background-image.png';
import logo from './logo.svg';
import clickIcon from './click-icon.svg';
import './App.css';

class App extends Component {
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
              
                <div className="result-element">
                  <div className="first-line">
                    Bulletproof Coffee: Debunking the Hot Buttered Hype
                  </div>
                  <div className="second-line">
                    http:// gizmodo.com/xxxxx
                  </div>
                  <div className="last-line">
                    <a>bit.ly/19iOLs6B3</a>
                    <div className="stat-num-icon">
                      <div className="stat-num">34,908</div><img className="click-icon" src={clickIcon}></img>
                    </div>
                  </div>
                </div>

                <div className="result-element">
                  <div className="first-line">
                    Bulletproof Coffee: Debunking the Hot Buttered Hype
                  </div>
                  <div className="second-line">
                    http:// gizmodo.com/xxxxx
                  </div>
                  <div className="last-line">
                    <a>bit.ly/19iOLs6B3</a>
                    <div className="stat-num-icon">
                      <div className="stat-num">34,908</div><img className="click-icon" src={clickIcon}></img>
                    </div>
                  </div>
                </div>

                <div className="result-element">
                  <div className="first-line">
                    Bulletproof Coffee: Debunking the Hot Buttered Hype
                  </div>
                  <div className="second-line">
                    http:// gizmodo.com/xxxxx
                  </div>
                  <div className="last-line">
                    <a>bit.ly/19iOLs6B3</a>
                    <div className="stat-num-icon">
                      <div className="stat-num">34,908</div><img className="click-icon" src={clickIcon}></img>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
