
ecrant = document.querySelector("input");
ecrant.focus();
first=0;
operators=['*','/','+','-'];
function turnOff(){
    ecrant.value="";
    pile=[];
}
function turnOn(){
    ecrant.focus();
    ecrant.value="0";
    pile=[];
}
function clearOne(){
    ecrant.focus();
    var len=ecrant.value;
    myNmbr=len.split("");//string to array
    myNmbr.pop()//delete the last element in the array
    myNmbr=myNmbr.join("");// array to string
    ecrant.value=myNmbr;
    pile=[];
    pile.push(ecrant.value)
}
function clearAll(){
    ecrant.focus();
    ecrant.value="";
    pile=[];
}



function addToGroup(e){
    if(first ==0){
        ecrant.focus();
        ecrant.value =e;
        first=1;
        return;
    }
    else if(operators.includes(e) === true){
        ecrant.focus();
        pile.push(parseInt(ecrant.value));
        pile.push(e);
        first=0;
        ecrant.value =null;
        return;
    }   
    ecrant.focus();
    ecrant.value +=e;    
}

function addition(number1,number2){
    console.log(number1+number2);
    return number1+number2;
}

function substriction(number1,number2){
    return number1-number2;
}

function produit(number1,number2){
    return number1*number2;
}

function devision(number1,number2){
    if(number2==0)
        return false;
    return number1/number2;
}

function  calculer(group){
    switch(group[1]){
        case '+':
            ecrant.focus();
            ecrant.value=addition(parseInt(group[0]), parseInt(ecrant.value));
            pile=[];
            pile.push(parsInt(ecrant.value));
            break;
        case '-':
            ecrant.focus();
            ecrant.value=substriction(parseInt(group[0]), parseInt(ecrant.value));
            pile=[];
            pile.push(parsInt(ecrant.value));
            break;
        case '*':
            ecrant.focus();
            ecrant.value=produit(parseInt(group[0]), parseInt(ecrant.value));
            pile=[];
            pile.push(parsInt(ecrant.value));
            break;
        case '/':
            ecrant.focus();
            res=devision(parseInt(group[0]), parseInt(ecrant.value))
            if(res===false){
                swal("Oops!", "Devision by 0 !", "error");
                first=0;
            }
            else{
                ecrant.value=res;
                pile=[];
                pile.push(parsInt(ecrant.value));
            }
                
            break;
    }
}
