
//Move to a specific location in  the page.
//The behaviour: 'smooth' argument makes the jump smooth. 


function moveToSection(item){
  //document.getElementById("about").scrollIntoView({behavior: 'smooth'});	//Este es un selector de id
  document.getElementById(item).scrollIntoView({behavior: 'smooth'}); 
  //document.querySelector('.navigation__checkbox').checked=false;		//Este es un selector de clase, (checked=true para 'check' y checked=false para 'uncheck'), hace lo mismo que la linea siguiente
  document.querySelector('.navigation__checkbox').click();
  
}
