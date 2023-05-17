
var emp1 = {
    id: "NV001",
    fullName: "Nguyen Thi Nhan Viet 1",
    age: 23,
    salary: 50,
    dateWork: 30,
    calcSalary: function () {
        return this.salary * this.dateWork;
    }
}
var emp2 = {
    id: "NV002",
    fullName: "Nguyen Thi Nhan Viet 2",
    age: 33,
    salary: 70,
    dateWork: 40,
    calcSalary: function () {
        return this.salary * this.dateWork;
    }
}

//Sử dụng 
console.log("Tên: " + emp1.fullName);
console.log("ID: " + emp1.id);
console.log("Tuổi: " + emp1.age);
console.log("Lương: " + emp1.calcSalary());
console.log("Tên: " + emp2.fullName);
console.log("Lương: " + emp2.calcSalary());
// class
function NhanVien(id,fullName,age,salary){
    this.id = id;
    this.fullName = fullName;
    this.age = age;
    this.salary = salary;
    this.calcSalary = function(){
        return this.salary*40;
    }
}

var emp3 = new NhanVien("3","Nguyen Thi Nhan Vien 3",25,100);

var emp4 = new NhanVien("4","Nguyen Thi Nhan Vien 4",26,100);
console.log(emp4);
// var sv1 = new NhanVien("Mai Thế Việt","maitheviet14@gmail.com");
// sv1.hoTen = 'Mai Thế Việt';
// sv1.email = 'maitheviet14@gmail.com'
// console.log("Tên: "+ sv1.hoTen + " - email: " + sv1.email);
// function SinhVien(tenSV, maSV,loaiSV, diem, xepLoai){
//     this.fullName = tenSV;
//     this.id = maSV;
//     this.type = loaiSV;
//     this.score = diem;
//     this.calc = function(){
//         var xepLoai='';
//         if (diem>5){
//             return "Giỏi"
//         }
//     }
// }
// var sv1 = new SinhVien("Mai The Viet","25211208883","Ngheo","10")
// document.getElementById('spanTenSV').innerHTML = sv1.fullName; 
// document.getElementById('spanMaSV').innerHTML = sv1.id;
// document.getElementById('spanLoaiSV').innerHTML = sv1.type;
// document.getElementById('spanDTB').innerHTML = sv1.score;
// document.getElementById('spanXepLoai').innerHTML = sv1.calc();