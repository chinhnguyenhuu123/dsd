async function loginapi(email, password) {
  let dem=0;
    let apiURL = `http://localhost:3000/user`
    let data = await fetch(apiURL).then(res => res.json())
    data.forEach(element =>{
        console.log(data);
       if(email==element.email&&password==element.password)  
       {
         dem++;
       }
    });
    if(dem==0){
      alert ('dang nhap that bai');
    }
    else{
      alert ('dang nhap thanh cong');
    }

}
function login(){  
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    if(email==""||password==""){
        alert('vui lòng nhập đầy đủ thông tin');
    }
    else{
       loginapi(email, password);
}
}
document.getElementById("login").addEventListener("submit", login);
function postData(data) {
    let apiURL = `http://localhost:3000/user`
    fetch(apiURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(res){
       return res.json();}
    )}
function register(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var repeatpassword = document.getElementById("Repeatpassword").value;
    let user = {
      name: name,
      email: email,
      password: password,
      repeatpassword: repeatpassword,
    };
    postData(user);
}
formregister.addEventListener("submit", register);