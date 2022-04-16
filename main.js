function getEleID(element) {
    return document.getElementById(element);
}

/**
 * Bài 1
 * Đầu vào : num1, num2, num3, temp
 * Xử lý: 
 * + so sánh các cặp để lấy số lớn nhất
 * + dùng temp để đảo vị trí
 * Đầu ra : show kết quả
 */

getEleID("btnSort").onclick = function(){
    var num11 = getEleID("txtNum11").value * 1;
    var num12 = getEleID("txtNum12").value * 1;
    var num13 = getEleID("txtNum13").value * 1;
    var temp = 0;
    if (num11 > num12) {
        temp = num11;
        num11 = num12;
        num12 = temp;
    }
    if (num11 > num13) {
        temp = num11;
        num11 = num13;
        num13 = temp;
    }
    if (num12 > num13) {
        temp = num12;
        num12 = num13;
        num13 = temp;
    }
    kq = "Dãy số tăng dần : " + num11 + " " + num12 + " " + num13;
    getEleID("txtSort").innerHTML = kq;
}

/**
 * Bài 2
 * Đầu vào : khai báo bố, mẹ, anh trai, em gái
 * Xử lý : kiểm tra ai đang check để lấy thông tin
 * Đầu ra : show kết quả
 */

getEleID("btnHello").onclick = function(){
    var bo = getEleID("radioBo").checked;
    var me = getEleID("radioMe").checked;
    var anhTrai = getEleID("radioAnhTrai").checked;
    var emGai = getEleID("radioEmGai").checked;
    var kq = "Hello";
    if (bo) {
        kq = kq + " " + getEleID("txtBo").textContent;
    } else if (me){
        kq = kq + " " + getEleID("txtMe").textContent;
    } else if (anhTrai){
        kq = kq + " " + getEleID("txtAnhTrai").textContent;
    } else if(emGai){
        kq = kq + " " + getEleID("txtEmGai").textContent;
    } else {
        kq = "How are U ????"
    }
    getEleID("txtHello").innerHTML = kq;
}

/**
 * Bài 3 :
 * Đầu vào : khai báo 3 số và biến đếm chẵn, lẻ
 * Xử lý : chia cho 2 để kiểm tra chẵn lẻ và tăng biến đếm khi thỏa điều kiện
 * Đầu ra : show kết quả
 */

getEleID("btnChanLe").onclick = function(){
    var num31 = getEleID("txtNum31").value;
    var num32 = getEleID("txtNum32").value;
    var num33 = getEleID("txtNum33").value;
    var chan = 0;
    var le = 0;
    if (num31 % 2 == 0) {
        chan += 1;
    } else {
        le += 1;
    }
    if (num32 % 2 == 0) {
        chan += 1;
    } else {
        le += 1;
    }
    if (num33 % 2 == 0) {
        chan += 1;
    } else {
        le += 1;
    }
    kq = "Có " + chan + " số chẵn và " + le + " số lẻ";
    getEleID("txtChanLe").innerHTML = kq;
}

/**
 * Bài 4 
 * Đầu vào : khai báo 3 canh tam giác
 * Xử lý : kiểm tra điều kiện của tam giác cân, đều, vuông
 * Đầu ra : in kết quả 
 */

getEleID("btnTamGiac").onclick = function(){
    var a = getEleID("txtNum41").value;
    var b = getEleID("txtNum42").value;
    var c = getEleID("txtNum43").value;
    var kq = "";
    if (a*a == b*b + c*c || b*b == a*a + c*c || c*c == a*a + b*b) {
        kq = "Đây là tam giác vuông";
    } else if (a == b && b == c) {
        kq = "Đây là tam giác đều";
    } else if (a == b || a == c || b == c){
        kq = "Đây là tam giác cân";
    } else {
        kq = "Đây là tam giác thường";
    }
    getEleID("txtTamGiac").innerHTML = kq;
};



























