const isLogin = sessionStorage.getItem('isLogin')
      if(isLogin){
        window.location.href = 'home_admin.html'
      }


function login() {
    let uname = document.getElementById("username");
    let pass = document.getElementById("password");

    console.log("Username : " + uname.value);
    console.log("Password : " + pass.value);
    if(uname.value==="admin" && pass.value==="1234"){
        alert("Selamat Datang !!")
        window.location.href = 'home_admin.html'
        sessionStorage.setItem("isLogin", true)
}
else{
    alert("Username atau Password salah !!")
}
}

function signin() {
    alert("Selamat Mendaftar!!")
    window.location = "registrasi_admin.html"
}