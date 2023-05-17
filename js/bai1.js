
function SinhVien(ten, ma, loai, diemToan, diemVan) {
    this.tenSV = ten;
    this.maSV = ma;
    this.loaiSV = loai;
    this.diemToan = diemToan;
    this.diemVan = diemVan;
    this.diemTB = 0;
    this.tinhDTB = function () {
        this.diemTB = (this.diemToan + this.diemVan) / 2
    }
    this.xepLoai = function () {
        if (8 <= this.diemTB && this.diemTB <=10) {
            return "Giỏi"
        } else if (6 <= this.diemTB && this.diemTB <= 8) {
            return "Khá"
        } else if (4 <= this.diemTB && this.diemTB <= 6) {
            return "Trung Bình"
        } else {
            return "Yếu"
        }
    }
}

function showInfo() {

    var ten = document.getElementById('txtTenSV').value;
    var ma = document.getElementById('txtMaSV').value;
    var loai = document.getElementById('loaiSV').value;
    var diemToan = Number(document.getElementById('txtDiemToan').value);
    var diemVan = Number(document.getElementById('txtDiemVan').value);
    console.log(ma,ten,loai,diemToan,diemVan);

    var sv = new SinhVien(ten, ma, loai, diemToan, diemVan);
    sv.tinhDTB();
    console.table(sv);


    document.getElementById('spanTenSV').innerHTML = sv.tenSV;
    document.getElementById('spanMaSV').innerHTML = sv.maSV;
    document.getElementById('spanLoaiSV').innerHTML = sv.loaiSV;
    document.getElementById('spanDTB').innerHTML = sv.diemTB;
    document.getElementById('spanXepLoai').innerHTML = sv.xepLoai();

}
document.querySelector(".btn-success").onclick = showInfo;
