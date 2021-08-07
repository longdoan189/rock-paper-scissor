import React, { Component } from 'react';
import { connect } from 'react-redux';

class Player extends Component {
    render() {
        console.log(this.props.mangDatCuoc);
        return (
            <div className="text-center playerGame">
                <div className="theThink">
                    <img style={{transform:'rotate(90deg)'}} className="mt-3" width={'75px'} height={'75px'} src={this.props.mangDatCuoc.find(item=> item.datCuoc===true).hinhAnh} alt={this.props.mangDatCuoc.find(item=> item.datCuoc===true).hinhAnh}/>
                </div>
                <div className="speech-bubble"></div>
                <img style={{ width: '150px', height: '150px' }} src='./img/player.png' alt='player' />
                <div className="row">
                    {this.props.mangDatCuoc.map((item,index) => {
                        let border = {};
                        if (item.datCuoc) {
                            border = {border: '3px solid orange'}
                        }
                        return <div className="col-4">
                        <button className='btnItem' style={border} onClick={() => {
                            this.props.datCuoc(item.ma)
                        }}>
                            <img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
                        </button>
                    </div>
                    })}                    
                </div>

            </div>

        )
    }
}

const mapStateToProps = state => {
    return {
        mangDatCuoc: state.BaiTapOanTuXiReducer.mangDatCuoc
    }
}

const mapDispatchToProps = dispatch => {
    return {
        datCuoc: (maCuoc) => {
            dispatch({
                type: 'CHON_KBB',
                maCuoc
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)