let login = document.querySelector("#login");
let dateNaissance = document.querySelector("#dateNaissance");
let form = document.querySelector("form");
allbien=[];

function validerLogin() {
    eerror= document.querySelector(".eerror");
    var RegEx = /^[a-z0-9]+$/i;
    var Valid = !(RegEx.test(login.value));
    length_Login=login.value.length;
    if( length_Login<6  ){
        login.className +=" error";
        eerror.style.display='block';
        eerror.innerHTML="le champ login dois contenir au minimum 6 lettres";
    }
    else if(length_Login>8){
        login.className +=" error";
        eerror.style.display='block';
        eerror.innerHTML="le champ login dois contenir au maximum 8 lettres";
    }
    else if(Valid == true){
        eerror.style.display='block';
        eerror.innerHTML = "le champ login dois etre alphanumirique ";
    }
    else{
        login.className +=" good";
        eerror.style.display='none';
        allbien.push(true);
    }

}
function validerDate(){
    eerror= document.querySelector(".errors");
    var dateformat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
    if(dateNaissance.value.match(dateformat))
    {
        dateNaissance.className += " good";
        eerror.style.display='none';
        allbien.push(true);
    }
    else{
        dateNaissance.className +=" error";
        eerror.style.display='block';
        eerror.innerHTML="Input a valid date [dd/mm/yyyy or dd-mm-yyyy format]";
    }
}
function valider(){
    if(allbien[0]==true && allbien[1]==true){
        //form.submit(); si vous vollez envoyer le formulaire
        swal("good!", "Form Envoyer", "success");
    }
        
}
