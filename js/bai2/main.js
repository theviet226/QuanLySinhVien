// // const form = document.querySelector("#formQLSV");
// // const alertElement = document.querySelector(".alert");
// // const maSV = document.querySelector("#txtMaSV").value;
// // const tenSV = document.querySelector("#txtTenSV").value;
// // const email = document.querySelector("#txtEmail").value;
// // const sdt = document.querySelector("#txtSDT").value;
// // const loaiSV = document.querySelector("#loaiSV").value;
// // const diemRL = document.querySelector("#txtDiemRL").value;
// // const diemToan = document.querySelector("#txtDiemToan").value;
// // const diemLy = document.querySelector("#txtDiemLy").value;
// // const diemHoa = document.querySelector("#txtDiemHoa").value;
// // const addBtn = document.querySelector(".btn-success");
// // const resetBtn = document.querySelector(".btn-dark");


// const svList = new DanhSachSinhVien();
// let editFlag = false;
// let editID = "";


// getLocalStorage();
// addBtn.addEventListener("click", function(e){
//     e.preventDefault();
//     if(!editFlag){
//         addItem();
//     }else{
//         editItem();
//     }
// })

// resetBtn.addEventListener("click",clearItems);

// function getLocalStorage(arr){
//     localStorage.setItem("GroceryList", JSON.stringify(arr));
// }
// function getLocalStorage() {
//     svList.list = localStorage.getItem("GroceryList") ? JSON.parse(localStorage.getItem("GroceryList")) : [];
//     showItems();
// }

// function renderStudent(student) {
//     var tbody = document.getElementById("tbodySinhVien");

//     // Tạo một hàng mới trong bảng
//     var row = document.createElement("tr");

//     // Thêm các ô dữ liệu cho hàng
//     var maSVCell = document.createElement("td");
//     maSVCell.textContent = student.maSV;
//     row.appendChild(maSVCell);

//     var tenSVCell = document.createElement("td");
//     tenSVCell.textContent = student.tenSV;
//     row.appendChild(tenSVCell);

//     var emailCell = document.createElement("td");
//     emailCell.textContent = student.email;
//     row.appendChild(emailCell);

//     var loaiSVCell = document.createElement("td");
//     loaiSVCell.textContent = student.loaiSV;
//     row.appendChild(loaiSVCell);

//     var sdtCell = document.createElement("td");
//     sdtCell.textContent = student.sdt;
//     row.appendChild(sdtCell);

//     var diemTBCell = document.createElement("td");
//     diemTBCell.textContent = calculateAverage(student.diemRL, student.diemToan, student.diemLy, student.diemHoa);
//     row.appendChild(diemTBCell);

//     var actionCell = document.createElement("td");
//     // Thêm các nút chức năng cho hàng (ví dụ: nút Xóa)
//     // actionCell.innerHTML = "<button class='btn btn-danger' onclick='deleteStudent(" + student.maSV + ")'>Xóa</button>";
//     row.appendChild(actionCell);

//     // Thêm hàng vào tbody
//     tbody.appendChild(row);
// }
// function addStudent() {
//     // Lấy giá trị từ các trường input
//     var maSV = document.getElementById("txtMaSV").value;
//     var tenSV = document.getElementById("txtTenSV").value;
//     var email = document.getElementById("txtEmail").value;
//     var sdt = document.getElementById("txtSDT").value;
//     var loaiSV = document.getElementById("loaiSV").value;
//     var diemRL = document.getElementById("txtDiemRL").value;
//     var diemToan = document.getElementById("txtDiemToan").value;
//     var diemLy = document.getElementById("txtDiemLy").value;
//     var diemHoa = document.getElementById("txtDiemHoa").value;

//     // Kiểm tra tính hợp lệ của dữ liệu đầu vào
//     if (maSV === "" || tenSV === "" || email === "" || sdt === "" || loaiSV === "" || diemRL === "" || diemToan === "" || diemLy === "" || diemHoa === "") {
//       // Hiển thị thông báo lỗi nếu dữ liệu không hợp lệ
//       alert("Vui lòng điền đầy đủ thông tin sinh viên.");
//       return;
//     }

//     // Tạo đối tượng sinh viên từ lớp Student
//     var student = new SinhVien(ten, ma, loai, email,sdt,diemRL, diemToan, diemLy,diemHoa);

//     // Gọi phương thức render() để tạo hàng dữ liệu và hiển thị trên bảng
//     var tbody = document.getElementById("tbodySinhVien");
//     var newRow = student.renderStudent();
//     tbody.appendChild(newRow);

//     // Sau khi thêm sinh viên thành công, làm sạch các trường input trong biểu mẫu
//     resetForm();
//   }
// // Định nghĩa lớp Student
// class Student {
//     constructor(maSV, tenSV, email, sdt, loaiSV, diemRL, diemToan, diemLy, diemHoa) {
//       this.maSV = maSV;
//       this.tenSV = tenSV;
//       this.email = email;
//       this.sdt = sdt;
//       this.loaiSV = loaiSV;
//       this.diemRL = diemRL;
//       this.diemToan = diemToan;
//       this.diemLy = diemLy;
//       this.diemHoa = diemHoa;
//     }

//     calculateAverage() {
//       // Thực hiện tính điểm trung bình
//       return (parseFloat(this.diemRL) + parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 4;
//     }

//     render() {
//       // Tạo một hàng mới trong bảng
//       var row = document.createElement("tr");

//       // Thêm các ô dữ liệu cho hàng
//       var maSVCell = document.createElement("td");
//       maSVCell.textContent = this.maSV;
//       row.appendChild(maSVCell);

//       var tenSVCell = document.createElement("td");
//       tenSVCell.textContent = this.tenSV;
//       row.appendChild(tenSVCell);

//       var emailCell = document.createElement("td");
//       emailCell.textContent = this.email;
//       row.appendChild(emailCell);

//       var loaiSVCell = document.createElement("td");
//       loaiSVCell.textContent = this.loaiSV;
//       row.appendChild(loaiSVCell);

//       var sdtCell = document.createElement("td");
//       sdtCell.textContent = this.sdt;
//       row.appendChild(sdtCell);

//       var diemTBCell = document.createElement("td");
//       diemTBCell.textContent = this.calculateAverage();
//       row.appendChild(diemTBCell);

//       var actionCell = document.createElement("td");
//       // Thêm các nút chức năng cho hàng (ví dụ: nút Xóa)
//       // actionCell.innerHTML = "<button class='btn btn-danger' onclick='deleteStudent(" + this.maSV + ")'>Xóa</button>";
//       row.appendChild(actionCell);

//       return row;
//     }
//   }

//   // Hàm để thêm sinh viên
//   function addStudent() {
//     // Lấy giá trị từ các trường input
//     var maSV = document.getElementById("txtMaSV").value;
//     var tenSV = document.getElementById("txtTenSV").value;
//     var email = document.getElementById("txtEmail").value;
//     var sdt = document.getElementById("txtSDT").value;
//     var loaiSV = document.getElementById("loaiSV").value;
//     var diemRL = document.getElementById("txtDiemRL").value;
//     var diemToan = document.getElementById("txtDiemToan").value;
//     var diemLy = document.getElementById("txtDiemLy").value;
//     var diemHoa = document.getElementById("txtDiemHoa").value;

//     // Kiểm tra tính hợp lệ của dữ liệu đầu vào
//     if (maSV === "" || tenSV === "" || email === "" || sdt === "" || loaiSV === "" || diemRL === "" || diemToan === "" || diemLy === "" || diemHoa === "") {
//       // Hiển thị thông báo lỗi nếu dữ liệu không hợp lệ
//       alert("Vui lòng điền đầy đủ thông tin sinh viên.");
//       return;
//     }

//     // Tạo đối tượng sinh viên từ lớp Student
//     var student = new Student(maSV, tenSV, email, sdt, loaiSV, diemRL, diemToan, diemLy, diemHoa);

//     // Gọi phương thức render() để tạo hàng dữ liệu và hiển thị trên bảng
//     var tbody = document.getElementById("tbodySinhVien");
//     var newRow = student.render();
//     tbody.appendChild(newRow);

//     // Sau khi thêm sinh viên thành công, làm sạch các trường input trong biểu mẫu
//     resetForm();
//   }
class Student {
    constructor(maSV, tenSV, email, sdt, loaiSV, diemRL, diemToan, diemLy, diemHoa) {
        this.maSV = maSV;
        this.tenSV = tenSV;
        this.email = email;
        this.sdt = sdt;
        this.loaiSV = loaiSV;
        this.diemRL = diemRL;
        this.diemToan = diemToan;
        this.diemLy = diemLy;
        this.diemHoa = diemHoa;
    }
    calculateAverage() {
        return (parseFloat(this.diemRL) + parseFloat(this.diemToan) + parseFloat(this.diemLy) + parseFloat(this.diemHoa)) / 4;
    }

    // Chuyển đối tượng sinh viên thành một đối tượng plain object
    toJSON() {
        return {
            maSV: this.maSV,
            tenSV: this.tenSV,
            email: this.email,
            sdt: this.sdt,
            loaiSV: this.loaiSV,
            diemRL: this.diemRL,
            diemToan: this.diemToan,
            diemLy: this.diemLy,
            diemHoa: this.diemHoa
        };
    }

    // Phương thức tĩnh để tạo một đối tượng sinh viên từ một plain object
    static fromJSON(json) {
        return new Student(
            json.maSV,
            json.tenSV,
            json.email,
            json.sdt,
            json.loaiSV,
            json.diemRL,
            json.diemToan,
            json.diemLy,
            json.diemHoa
        );
    }

    render() {
        var row = document.createElement("tr");
        row.innerHTML = `
        <td>${this.maSV}</td>
        <td style = "width:20%; margin :auto;">${this.tenSV}</td>
        <td>${this.email}</td>
        <td>${this.sdt}</td>
        <td>${this.loaiSV}</td>
        <td>${this.calculateAverage()}</td>
        <td style = "width:15%; margin :auto;">
             <button class="btn btn-primary btn-sm" onclick="editStudent('${this.maSV}')">Edit</button>
             <button class="btn btn-danger btn-sm" onclick="deleteStudent('${this.maSV}')">Delete</button>
        </td>
    `;
        return row;
    }
}

function saveStudents(students) {
    localStorage.setItem("students", JSON.stringify(students));
}

function loadStudents() {
    var students = [];
    var storedStudents = localStorage.getItem("students");
    if (storedStudents) {
        var parsedStudents = JSON.parse(storedStudents);
        if (Array.isArray(parsedStudents)) {
            students = parsedStudents.map(Student.fromJSON);
        }
        
    }
    
    return students;
}

function renderStudents(students) {
    var tbodySinhVien = document.getElementById("tbodySinhVien");
    tbodySinhVien.innerHTML = "";

    students.forEach(function (student) {
        var row = student.render();
        tbodySinhVien.appendChild(row);
    });
    renderStudentsOnPage(students, currentPage);
    renderPagination(students);
}

var students = loadStudents();
renderStudents(students);
function addStudent() {
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var sdt = document.getElementById("txtSDT").value;
    var loaiSV = document.getElementById("loaiSV").value;
    var diemRL = document.getElementById("txtDiemRL").value;
    var diemToan = document.getElementById("txtDiemToan").value;
    var diemLy = document.getElementById("txtDiemLy").value;
    var diemHoa = document.getElementById("txtDiemHoa").value;

    if (maSV === "" || tenSV === "" || email === "" || sdt === "" || diemRL === "" || diemToan === "" || diemLy === "" || diemHoa === "") {
        alert("Vui lòng điền đầy đủ thông tin sinh viên");
        return;
    }

    var student = new Student(maSV, tenSV, email, sdt, loaiSV, diemRL, diemToan, diemLy, diemHoa);
    students.push(student);
    // Hiển thị danh sách sinh viên
    renderStudents(students);

    // Xóa giá trị nhập trong các trường input
    document.getElementById("txtMaSV").value = "";
    document.getElementById("txtTenSV").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtSDT").value = "";
    document.getElementById("loaiSV").value = "Nghèo";
    document.getElementById("txtDiemRL").value = "";
    document.getElementById("txtDiemToan").value = "";
    document.getElementById("txtDiemLy").value = "";
    document.getElementById("txtDiemHoa").value = "";

    // Lưu danh sách sinh viên vào localStorage
    saveStudents(students);
    showNotification("Thêm sinh viên thành công", true);
    // showNotification("Thêm sinh viên thất bại", false);
}
function updateStudent() {
    // Lấy giá trị từ các trường input
    var maSV = document.getElementById("txtMaSV").value;
    var tenSV = document.getElementById("txtTenSV").value;
    var email = document.getElementById("txtEmail").value;
    var sdt = document.getElementById("txtSDT").value;
    var loaiSV = document.getElementById("loaiSV").value;
    var diemRL = document.getElementById("txtDiemRL").value;
    var diemToan = document.getElementById("txtDiemToan").value;
    var diemLy = document.getElementById("txtDiemLy").value;
    var diemHoa = document.getElementById("txtDiemHoa").value;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    if (maSV === "" || tenSV === "" || email === "" || sdt === "" || diemRL === "" || diemToan === "" || diemLy === "" || diemHoa === "") {
        alert("Vui lòng điền đầy đủ thông tin sinh viên");
        return;
    }

    // Tạo đối tượng Student
    var student = new Student(maSV, tenSV, email, sdt, loaiSV, diemRL, diemToan, diemLy, diemHoa);

    // Tìm vị trí sinh viên cần cập nhật trong danh sách
    var index = students.findIndex(function (item) {
        return item.maSV === maSV;
    });

    // Kiểm tra xem sinh viên có tồn tại trong danh sách không
    if (index !== -1) {
        // Cập nhật thông tin sinh viên tại vị trí tìm được
        students[index] = student;

        // Hiển thị danh sách sinh viên
        renderStudents(students);

        // Xóa giá trị nhập trong các trường input
        document.getElementById("txtMaSV").value = "";
        document.getElementById("txtTenSV").value = "";
        document.getElementById("txtEmail").value = "";
        document.getElementById("txtSDT").value = "";
        document.getElementById("loaiSV").value = "Nghèo";
        document.getElementById("txtDiemRL").value = "";
        document.getElementById("txtDiemToan").value = "";
        document.getElementById("txtDiemLy").value = "";
        document.getElementById("txtDiemHoa").value = "";

        // Lưu danh sách sinh viên vào localStorage
        saveStudents(students);
        showNotification("Cập nhật sinh viên thành công", true);
    } else {
        showNotification("Sinh viên không tồn tại", false);
    }

    // showNotification("Cập nhật sinh viên thất bại", false);

}

function resetForm() {
    // Xóa giá trị nhập trong các trường input
    document.getElementById("txtMaSV").value = "";
    document.getElementById("txtTenSV").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtSDT").value = "";
    document.getElementById("loaiSV").value = "Nghèo";
    document.getElementById("txtDiemRL").value = "";
    document.getElementById("txtDiemToan").value = "";
    document.getElementById("txtDiemLy").value = "";
    document.getElementById("txtDiemHoa").value = "";

    // Xóa danh sách sinh viên trong localStorage
    localStorage.removeItem("students");

    // Xóa danh sách sinh viên trên bảng
    var tbodySinhVien = document.getElementById("tbodySinhVien");
    tbodySinhVien.innerHTML = "";
}
function editStudent(maSV) {
    // Tìm sinh viên cần chỉnh sửa trong danh sách
    var student = students.find(function (item) {
        return item.maSV === maSV;
    });

    // Kiểm tra sinh viên có tồn tại hay không
    if (student) {
        // Đổ dữ liệu sinh viên vào các trường input
        document.getElementById("txtMaSV").value = student.maSV;
        document.getElementById("txtTenSV").value = student.tenSV;
        document.getElementById("txtEmail").value = student.email;
        document.getElementById("txtSDT").value = student.sdt;
        document.getElementById("loaiSV").value = student.loaiSV;
        document.getElementById("txtDiemRL").value = student.diemRL;
        document.getElementById("txtDiemToan").value = student.diemToan;
        document.getElementById("txtDiemLy").value = student.diemLy;
        document.getElementById("txtDiemHoa").value = student.diemHoa;
    }
}

function deleteStudent(maSV) {
    // Tìm vị trí sinh viên cần xoá trong danh sách
    var index = students.findIndex(function (item) {
        return item.maSV === maSV;
    });

    // Kiểm tra sinh viên có tồn tại hay không
    if (index !== -1) {
        // Xoá sinh viên khỏi danh sách
        students.splice(index, 1);

        // Hiển thị danh sách sinh viên
        renderStudents(students);

        // Lưu danh sách sinh viên vào localStorage
        saveStudents(students);
        showNotification("Xóa sinh viên thành công", true);
    } else {
        showNotification("Sinh viên không tồn tại", false);

    }


}
function searchStudents() {
    // Lấy giá trị từ trường input tìm kiếm
    var searchValue = document.getElementById("txtSearch").value.toLowerCase();

    // Tạo một danh sách sinh viên kết quả tìm kiếm
    var searchResults = students.filter(function (student) {
        return student.tenSV.toLowerCase().includes(searchValue);
    });

    // Hiển thị danh sách sinh viên tìm kiếm
    renderStudents(searchResults);
}
function showNotification(message, isSuccess) {
    var alertElement = document.querySelector(".alert");
    alertElement.innerText = message;
    alertElement.classList.add(isSuccess ? "alert-success" : "alert-danger");

    setTimeout(function () {
        alertElement.innerText = "";
        alertElement.classList.remove("alert-success", "alert-danger");
    }, 3000);
}

var currentPage = 1; // Trang hiện tại
var studentsPerPage = 5; // Số lượng sinh viên hiển thị trên mỗi trang

function renderStudentsOnPage(students, page) {
    var tbodySinhVien = document.getElementById("tbodySinhVien");
    tbodySinhVien.innerHTML = "";

    var startIndex = (page - 1) * studentsPerPage;
    var endIndex = startIndex + studentsPerPage;

    var studentsOnPage = students.slice(startIndex, endIndex);

    studentsOnPage.forEach(function (student) {
      var row = student.render();
      tbodySinhVien.appendChild(row);
    });
  }
  function renderPagination(students) {
    var totalPages = Math.ceil(students.length / studentsPerPage);

    var paginationContainer = document.getElementById("paginationContainer");
    paginationContainer.innerHTML = "";

    for (var i = 1; i <= totalPages; i++) {
      var button = document.createElement("button");
      button.classList.add("btn", "btn-primary", "btn-sm", "m-1");
      button.innerText = i;
      button.onclick = function () {
        currentPage = parseInt(this.innerText);
        renderStudentsOnPage(students, currentPage);
      };

      paginationContainer.appendChild(button);
    }
  }
//   function renderStudents(students) {
//     renderStudentsOnPage(students, currentPage);
//     renderPagination(students);
//   }