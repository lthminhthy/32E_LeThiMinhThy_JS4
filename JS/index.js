document.getElementById('btnSapXep').onclick = function () {
    var soThu1 = Number(document.getElementById('soThu1').value);
    var soThu2 = Number(document.getElementById('soThu2').value);
    var soThu3 = Number(document.getElementById('soThu3').value);
    var ketQua1 = "";

    if (soThu1 > soThu2 && soThu1 > soThu3 && soThu2 > soThu3) {
        ketQua1 = soThu3 + "<" + soThu2 + "<" + soThu1;
    }
    else if (soThu1 > soThu2 && soThu1 > soThu3 && soThu2 < soThu3) {
        ketQua1 = soThu2 + "<" + soThu3 + "<" + soThu1;
    }


    else if (soThu1 > soThu2 && soThu3 > soThu2 & soThu1 > soThu3) {
        ketQua1 = soThu2 + "<" + soThu3 + "<" + soThu1;
    }
    else if (soThu1 > soThu2 && soThu3 > soThu2 & soThu1 < soThu3) {
        ketQua1 = soThu2 + "<" + soThu1 + "<" + soThu3;
    }


    else if (soThu1 > soThu2 && soThu3 > soThu1) {
        ketQua1 = soThu2 + "<" + soThu1 + "<" + soThu3;
    }


    else if (soThu2 > soThu1 && soThu2 > soThu3 && soThu1 > soThu3) {
        ketQua1 = soThu3 + "<" + soThu1 + "<" + soThu2;
    }
    else if (soThu2 > soThu1 && soThu2 > soThu3 && soThu1 < soThu3) {
        ketQua1 = soThu1 + "<" + soThu3 + "<" + soThu2;
    }



    else if (soThu2 > soThu3 && soThu3 > soThu1) {
        ketQua1 = soThu1 + "<" + soThu3 + "<" + soThu2;
    }
    else {
        ketQua1 = soThu1 + "<" + soThu2 + "<" + soThu3;
    }

    document.getElementById('ketQua1').innerHTML = ketQua1;
}


// Bài 2
document.getElementById('btnLoiChao').onclick = function () {
    var loiChao = document.getElementById('loiChao').value;

    var ketQua2 = "";

    switch (loiChao) {
        case "B": {
            ketQua2 = "Chào bố!"
        }; break;
        case "M": {
            ketQua2 = "Chào mẹ!"
        }; break;
        case "CG": {
            ketQua2 = "Chào Chị gái!"
        }; break;
        case "AT": {
            ketQua2 = "Chào Anh trai!"
        }; break;
        case "EG": {
            ketQua2 = "Chào Em gái!"
        }; break;
        case "ET": {
            ketQua2 = "Chào Em trai!"
        }; break;

    }
    document.getElementById('ketQua2').innerHTML = ketQua2;

}





// Bài 3:
document.getElementById('btnDem').onclick = function () {
    var so1 = Number(document.getElementById('so1').value);
    var so2 = Number(document.getElementById('so2').value);
    var so3 = Number(document.getElementById('so3').value);

    var countsoChan = 0;
    var countsoLe = 0;
    if (so1 % 2 == 0) {
        countsoChan++
    }
    if (so2 % 2 == 0) {
        countsoChan++
    }
    if (so3 % 2 == 0) {
        countsoChan++
    }
    countsoLe = 3 - countsoChan;
    document.getElementById('ketQua3').innerHTML = "Số lượng số chẵn là: " + countsoChan + " - Số lượng số lẻ là: " + countsoLe;
}


// Bai4
document.getElementById('btnDuDoan').onclick = function () {
    var canh1 = Number(document.getElementById('canh1').value);
    var canh2 = Number(document.getElementById('canh2').value);
    var canh3 = Number(document.getElementById('canh3').value);
    var ketQua4 = "";

    if (canh1 == canh2 && canh1 == canh3 && canh2==canh3) {
        ketQua4 = "Tam giác đều";
    }
    else if (canh1 == canh2 || canh1 == canh3 || canh2 == canh3) {
        ketQua4 = "Tam giác cân";
    }
    else if ((canh1 * canh1 + canh2 * canh2 == canh3 * canh3) || (canh1 * canh1 + canh3 * canh3 == canh2 * canh2) || (canh2 * canh2 + canh3 * canh3 == canh1 * canh1)) {
        ketQua4 = "Tam giác vuông"
    }
    else{
        ketQua4 = "Tam giác khác";
    }
    document.getElementById('ketQua4').innerHTML= ketQua4;
}