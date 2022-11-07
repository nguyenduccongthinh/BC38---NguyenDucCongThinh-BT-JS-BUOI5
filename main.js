//BÀI 1:
/* SƠ ĐỒ 3 KHỐI
INPUT: điểm 3 môn thi, điểm chuẩn, điểm cộng theo khu vực, điểm cộng theo đối tượng.
PROCESS:
1. Tính điểm tổng của thí sinh bằng công thức: điểm tổng = điểm môn 1 + điểm môn 2 + điểm môn 3 + điểm đối tượng + điểm khu vực
với các khu vực/đối tượng khác nhau thì có điểm cộng khác nhau
2. So sánh điểm tổng với điểm chuẩn. Nếu điểm tổng lớn hơn hoặc bằng điểm chuẩn thì thí sinh thi đậu, nhỏ hơn thì thí sinh thi rớt
OUTPUT: Kết quả đâu hoặc rớt
**/
function ex1(){
    var diemMon1 = document.getElementById("mon1").value*1;
    var diemMon2 = document.getElementById("mon2").value*1;
    var diemMon3 = document.getElementById("mon3").value*1;
    var diemChuan = document.getElementById("diemChuan").value*1;
//Tính điểm khu vực
    var khuVuc = document.getElementById("diemCongKV").value;
    var diemKV
    if (khuVuc === "X"){
        diemKV = 0;
    } else if( khuVuc === "A"){
        diemKV = 2;
    }else if( khuVuc === "B"){
        diemKV = 1;
    }else if( khuVuc === "C"){
        diemKV = 0.5;
    } else {
        diemKV = 0;
    }
//Tính điểm đối tượng
    var doiTuong = document.getElementById("diemCongDT").value*1;
    var diemDT;
    if (doiTuong === 0){
        diemDT = 0;
    } else if( doiTuong === 1){
        diemDT = 2.5;
    }else if( doiTuong === 2){
        diemDT = 1.5;
    }else if( doiTuong === 3){
        diemDT = 1;
    } else {
        diemDT = 0;
    }
//Tính đểm tổng
    var diemTong = diemMon1 + diemMon2 + diemMon3 + diemKV + diemDT;
//Xuất kết quả
    var ketQua;
    if(diemTong >= diemChuan){
        ketQua = "Thí sinh đạt: " + diemTong + " điểm - Kết quả đậu" 
        document.getElementById("ketQua").innerHTML= ketQua;
        document.getElementById("ketQua").style.color = "green";
        document.getElementById("ketQua").style.paddingTop = "10px";


    }else{
        ketQua = "Thí sinh đạt: " + diemTong + " điểm - Kết quả rớt" 
        document.getElementById("ketQua").innerHTML= ketQua;
        document.getElementById("ketQua").style.color = "red";
        document.getElementById("ketQua").style.paddingTop = "10px";

}
}

//BÀI 2: 
/* SƠ ĐỒ 3 KHỐI
INPUT: Nhập vào tên khác hàng và số lượng kW đã tiêu thụ
PROCESS:
Dựa vào số lượng kW đã tiêu thụ, tính ra ra số tiền phải trả. Với mỗi mức tiền khác nhau:
    từ 1- 50kw : giá 550
    từ 1- 100kw : giá 550 cho 50kw đầu, 650 cho 50kw sau
    từ 1- 200kw : giá 550 cho 50kw đầu, 650 cho 50kw tiếp theo, 850 cho 100kw cuối
    từ 1- 350kw : giá 550 cho 50kw đầu, 650 cho 50kw tiếp theo, 850 cho 100kw tiếp theo, 1100 cho 150kw cuối
    lớn hơn 350kw: giá 550 cho 50kw đầu, 650 cho 50kw tiếp theo, 850 cho 100kw tiếp theo, 1100 cho 150kw tiếp theo, 1300 cho cho các kw tiếp theo


OUTPUT: Số tiền khách hàng phải trả
**/

function ex2(){
    var hoTen = document.getElementById("hoTen").value;
    var soDien = document.getElementById("soDien").value*1;
    var soTien;
if(soDien <= 50){
soTien = soDien * 500;
}else if(soDien <= 100){
    soTien = (50 * 500) + (soDien - 50)*650;
}else if(soDien <= 200){
    soTien = (50 * 500) + (50*650) + (soDien - 100)*850;
}else if(soDien <= 350){
    soTien = (50 * 500) + (50*650) + (100*850) + (soDien - 200)*1100;
}else{
    soTien = (50 * 500) + (50*650) + (100*850) + (150*1100) + (soDien - 350)*1300;
}

console.log(soTien);
var ketQua = "Số tiền khách hàng " + hoTen + " phải trả là: " + soTien + " VND"
document.getElementById("thanhTien").innerHTML= ketQua;
document.getElementById("thanhTien").style.color = "red";
document.getElementById("thanhTien").style.paddingTop = "10px";
}





