let InputName=document.getElementById("InputName");
let InputEmail1=document.getElementById("InputEmail1");
let InputPassword1=document.getElementById("InputPassword1");

 let container=[];
// console.log(InputEmail1 ,InputName);
if(localStorage.getItem("info")!=null){
    container=JSON.parse(localStorage.getItem("info"))
}
else{
   
}

    function validationeEmail(){
        let regex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let test=InputEmail1.value;
        if(regex.test(test)==true){
            InputEmail1.classList.add("is-valid");
            InputEmail1.classList.remove("is-invalid");
            document.getElementById("error").classList.add("d-none");

            return true;

        }
        else{
            document.getElementById("error").innerHTML="example --- test@mail.com";
            document.getElementById("error").classList.remove("d-none");
            InputEmail1.classList.remove("is-valid");
            InputEmail1.classList.add("is-invalid");
            return false;
        }
    }


    function validationepass(){
        let regex=/^[A-Z][a-z]{2,5}[0-9]{2,3}$/;
        let test=InputPassword1.value;
        if(regex.test(test)==true){
            InputPassword1.classList.add("is-valid");
            InputPassword1.classList.remove("is-invalid");
            document.getElementById("errorPass").classList.add("d-none");
            return true;

        }
        else{

            document.getElementById("errorPass").innerHTML="start captial cha and ring 2-5 small ch and num 2-3";
            document.getElementById("errorPass").classList.remove("d-none");
            InputPassword1.classList.remove("is-valid");
            InputPassword1.classList.add("is-invalid");
            return false;
        }
    }

function add(){
    if(InputEmail1.value =="" || InputName.value == ""  || InputPassword1.value=="" ){
        document.getElementById("contain").innerHTML="all input required"
    }
    else if(validationeEmail()==true && validationepass()==true){
           let userINF={
    name:InputName.value,
    email:InputEmail1.value,
    password:InputPassword1.value
}
container.push(userINF);
// console.log(container);
localStorage.setItem("info",JSON.stringify(container));
location.href="../index.html";
    }
 


}
