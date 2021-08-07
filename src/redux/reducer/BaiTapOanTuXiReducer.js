const stateDefault = {
    mangDatCuoc: [
        {ma: 'keo',hinhAnh: './img/keo.png', datCuoc: false},
        {ma: 'bua',hinhAnh: './img/bua.png', datCuoc: false},
        {ma: 'bao',hinhAnh: './img/bao.png', datCuoc: true},
    ],
    ketQua: 'Start now!',
    soBanThang: 0,
    soBanChoi: 0,
    computer: {ma: 'bao',hinhAnh: './img/bao.png', datCuoc: false},

}

const BaiTapOanTuXiReducer = (state=stateDefault, action) => {
    switch(action.type) {
        case 'CHON_KBB':  {
            //Reset mảng
            let mangCuocUpdate = [...state.mangDatCuoc];
            mangCuocUpdate = mangCuocUpdate.map((item,index) => {
                return {...item, datCuoc:false}
            });
            //Tìm ra mã cược
            let index = mangCuocUpdate.findIndex(qc => qc.ma === action.maCuoc)
            if (index !== -1) {
                mangCuocUpdate[index].datCuoc = true
            }
            // set state của giao diện
            state.mangDatCuoc = mangCuocUpdate;
            return {...state}
        }
        case 'RANDOM': {
           let soNgauNhien = Math.floor(Math.random()*3);
           let quanNgauNhien = state.mangDatCuoc[soNgauNhien];
           state.computer = quanNgauNhien;
           return {...state};
        }
        case 'VERDICT': {
            state.soBanChoi += 1;
            let player = state.mangDatCuoc.find(item => item.datCuoc === true);
            let computer = state.computer;
            let player_value = (player.ma === 'bao') ? 0  :  (player.ma === 'bua' ? 1 : 2);
            let computer_value = (computer.ma === 'bao') ? 0 : (computer.ma === 'bua' ? 1 : 2);
            console.log(player_value, computer_value);
            if (player_value === computer_value) {
                state.ketQua = 'Nice draw, YOLO';
                state.soBanThang += 0.5
            }
            else if ( (player_value - computer_value) % 2 === 0 ) {
                state.ketQua = (player_value > computer_value) ? 'You won, LOL' : 'You lost, HAHA'
            }
            else {
                state.ketQua = (player_value > computer_value) ? 'You lost, HAHA' : 'You won, LOL'
            }
            if (state.ketQua === 'You won, LOL') {
                state.soBanThang += 1
            }
            return {...state};
        }

        default: return {...state}
    }
}

export default BaiTapOanTuXiReducer;
