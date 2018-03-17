import React, { Component } from 'react';
import background from './background-image.png';
import logo from './logo.svg';

import config from './config/config.js';
import RstElem from './RstElem.js';

import Button from 'antd/lib/button';

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
      history: []
    }
    this.inputHandler = this.inputHandler.bind(this);
    this.shortenHandler = this.shortenHandler.bind(this);
  }
  componentDidMount(){

  }
  shortenHandler(){
    console.log(this.state.curInput);
    bitlySDK.shorten(this.state.curInput)
    .then((result) => {
      console.log(result);
      Promise.all([bitlySDK.info(result.url), bitlySDK.clicks(result.url), bitlySDK.expand(result.url)])
      .then((rst) => {
        console.log(rst);
        const history = this.state.history;
        const title = rst[0]["title"];
        const longUrl = rst[2]["long_url"];
        const globalCount = rst[1][0]["global_clicks"];
        const shortUrl = rst[2]["short_url"];
        history.push({
          title: (title != null && title.length > 0) ? title : rst[2]["long_url"],
          longUrl: longUrl,
          shortUrl: shortUrl,
          globalCount: globalCount
        })
        this.setState({
          history: history
        })
      })
    })
    .catch(e=>{
      console.log(e);
    });
  }
  inputHandler(e){
    this.setState({
      curInput: e.target.value
    })
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
            <Button>Button</Button>
          </nav>
          <div className="App-slogan">
            SHORTEN. SHARE. MEASURE.
          </div>
          <div className="App-sub-slogan">
            Join Bitly, the world's leading link management platform.
          </div>
          <div>
            <div className="App-input">
              <input onChange={this.inputHandler} className="input-area" placeholder="Paste a link to shorten it"/>
              <div onClick={this.shortenHandler} className="short-btn">SHORTEN</div>
            </div>
            <div className={this.state.history.length <= 1 ? "App-result-display-sp" : "App-result-display"}>
              <div className={this.state.history.length<=1 ? "result-wrapper-sp" : "result-wrapper"}>
                {
                  this.state.history.map((item, idx) => {
                    return <RstElem key={idx} info={item}></RstElem>
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
