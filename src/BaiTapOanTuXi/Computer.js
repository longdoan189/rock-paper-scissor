import React, { Component } from 'react'
import {connect} from 'react-redux'
class Computer extends Component {
    render() {
        let keyframe = `@keyframes randomItem${Date.now()} {
            0% {top: -50px;}
            25% {top: 100px;}
            50% {top: -50px;}
            75% {top: 100px;}
            100% {top: 0px;}
          }`
        return (
            <div className="text-center playerGame">
                <style>
                    {keyframe}
                </style>
                <div className="theThink" style={{position: 'relative'}}>
                    <img style={{position: 'absolute', animation: `randomItem${Date.now()} 0.1s `, 
                        transform:'rotate(90deg)', left:'30%'}} 
                        className="mt-3" width={'75px'} height={'75px'}
                        src={this.props.computer.hinhAnh} alt={this.props.computer.hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: '150px', height: '150px' }} src='./img/playerComputer.png' alt='computer' />
                
            </div>

        )
    }
}
const mapStateToProps = state => {
    return {
        computer: state.BaiTapOanTuXiReducer.computer
    }
}

export default connect(mapStateToProps)(Computer)