




var article= {


              titre : "" , 
              numero : "", 
              prix : " ", 
              description: " ", 

    

            }


  function  formulaire() {

    article.titre= document.getElementById("titre").value;
    article.numero= document.getElementById("numéro").value;
    article.prix= document.getElementById("prix").value;
    article.description= document.getElementById("description").value; 
    document.getElementById("one").className = "off";
    document.getElementById("off").className = "one";
    
    

} ; 




//Affiché 


document.getElementById("aftitre").innerHTML = article.titre 
document.getElementById("afnumero").innerHTML = article.numero
document.getElementById("afprix").innerHTML = article.prix
document.getElementById("afdes").innerHTML = article.description

