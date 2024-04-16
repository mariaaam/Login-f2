let InputEmail1=document.getElementById("InputEmail1");
let InputPassword1=document.getElementById("InputPassword1");
let user=[];


user= (JSON.parse(localStorage.getItem("info")))
function getLogin(){
   for(let i=0 ; i< user.length ; i++){
    if(InputEmail1.value == user[i].email && InputPassword1.value ==user[i].password){
        var y= user[i].name;
        console.log(y)
        localStorage.setItem("userName",y );
        location.href="../hoome.html";
        break;
    }
    else{
        document.getElementById('user').innerHTML="Email or password incorrect";
        
    }
   }
}

// console.log(user[0].name)
