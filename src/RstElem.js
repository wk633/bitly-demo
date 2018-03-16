import React, { Component } from 'react';
import clickIcon from './click-icon.svg';
class RstElem extends Component{
    render(){
        return (
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
        )
    }
}
export default RstElem;