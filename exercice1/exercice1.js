let main=document.querySelector("#main");
const lignes =   parseInt(prompt("entrer le nombre des lignes : "));
const colones =  parseInt(prompt("entrer le nombre des colones : "));
function maketable(lignes,colones){
    console.log(lignes);
    if(isNaN(lignes)&& isNaN(colones)){
        main.innerHTML="<h1>ach katsana meni fi nadarak ! :(</h1>";
        return;
    }
    let table="<table> ";
    for(i=0;i<lignes;i++)
    {
        table+="<tr>";
        for(j=0;j<colones;j++)
        {
            table+="<td></td>";
        }   
        table+="</tr>";
    }
    table+="</table>";
    main.innerHTML=table;
}
maketable(lignes,colones);