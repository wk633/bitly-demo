import React, { Component } from 'react';
import clickIcon from './click-icon.svg';
class RstElem extends Component{
    render(){
        return (
            <div className="result-element">
                <div className="first-line">
                {this.props.info.title.length > 0 ? this.props.info.title : this.props.info.longUrl}
                </div>
                <div className="second-line">
                {this.props.info.longUrl}
                </div>
                <div className="last-line">
                <a target="_blank" href={this.props.info.shortUrl}>{this.props.info.shortUrl}</a>
                <div className="stat-num-icon">
                    <div className="stat-num">{this.props.info.globalCount}</div><img alt="click-icon" className="click-icon" src={clickIcon}></img>
                </div>
                </div>
            </div>
        )
    }
}
export default RstElem;