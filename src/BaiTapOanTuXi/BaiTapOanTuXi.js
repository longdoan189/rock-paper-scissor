import React, { Component } from 'react'
import {connect} from 'react-redux'
import './BaiTapOanTuXi.css'
import Computer from './Computer'
import KetQuaTroChoi from './KetQuaTroChoi'
import Player from './Player'

class BaiTapOanTuXi extends Component {
    render() {
        return (
            <div className="gameOanTuXi">
                <style>

                </style>
                <div className="row text-center mt-5">
                    <div className="col-4">
                        <Player/>
                    </div>
                    <div className="col-4">
                        <KetQuaTroChoi/>
                        <button onClick={() => {this.props.playGame()}} className='btn btn-success display-4 mt-5'>Play game</button>
                    </div>
                    <div className="col-4">
                        <Computer/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            //Khai báo lặp đi lặp lại
            let count = 0
            let randomComputerItem = setInterval(() => {
                dispatch({
                    type: 'RANDOM'
                })
                count += 1
                if (count > 10) {
                    clearInterval(randomComputerItem)
                    dispatch({
                        type: 'VERDICT'
                    })
                }
            }, 100)
            
        }
    }
}

export default connect(null, mapDispatchToProps)(BaiTapOanTuXi)