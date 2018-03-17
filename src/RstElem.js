import React, { Component } from 'react';
import clickIcon from './click-icon.svg';
class RstElem extends Component{
    trans(num){
        return (num+"").replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    }
    render(){
        const hashcode = this.props.info.shortUrl.split("/")[3];
        const globalCount = this.trans(this.props.info.globalCount);
        return (
            <div className="result-element">
                <div className="first-line">
                {this.props.info.title.length > 0 ? this.props.info.title : this.props.info.longUrl}
                </div>
                <div className="second-line">
                {this.props.info.longUrl}
                </div>
                <div className="last-line">
                <a target="_blank" href={this.props.info.shortUrl}>bitly/<span style={{fontWeight: "normal"}}>{hashcode}</span></a>
                <div className="stat-num-icon">
                    <div className="stat-num">{globalCount}</div><img alt="click-icon" className="click-icon" src={clickIcon}></img>
                </div>
                </div>
            </div>
        )
    }
}
export default RstElem;