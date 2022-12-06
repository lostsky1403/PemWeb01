function kirim() {
    let inp_nama = document.getElementById("username").value;
    let inp_pass = document.getElementById("password").value;
    let form = document.getElementById("form");

    if (inp_nama == "Admin" && inp_pass == "Integrity") {
        form.setAttribute("action", "dashboard.html");
        alert("Login Berhasil");
    } else {
        alert("Login Gagal");
    }
}