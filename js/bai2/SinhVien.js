function SinhVien(ten, ma, loai, email,sdt,diemRL, diemToan, diemLy,diemHoa) {
    this.tenSV = ten;
    this.maSV = ma;
    this.email = email;
    this.sdt = sdt;
    this.loaiSV = loai;
    this.diemRenLuyen = diemRL
    this.diemToan = diemToan;   
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
    this.diemTB = 0;
    this.tinhDTB = function () {
        this.diemTB = (this.diemToan + this.diemRenLuyen+ this.diemHoa +this.diemLy) / 4
    }
}
