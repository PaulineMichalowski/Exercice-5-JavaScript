function donnee(){
   var premier_nombre = document.getElementById('premier_nombre').value;
   var deuxieme_nombre = document.getElementById('deuxieme_nombre').value;
//   result = parseInt(premier_nombre) * deuxieme_nombre;
   if(isNaN(premier_nombre) == false && isNaN(deuxieme_nombre) == false){
        result = Math.trunc(premier_nombre) * deuxieme_nombre;
        alert(result);
     }
 }
