let slideIndex = [1,1,1,1];		/*Aqui indicamos cuantos slideshows tendremos*/
let slideId = ["mySlides1", "mySlides2", "mySlides3","mySlides4"]		/*Aqui indicamos el nombre de clase de cada slider*/
showSlides(1, 0);			/*Con esto mostramos (inicializamos) las diapositivas al cargar la pagina, de lo contrario no habria imagen hasta comenzar el slideshow*/
showSlides(1, 1);			/*El primer 1, es el valor por defecto para mostrar la primer diapositiva, no se modifica el slideIndex, asi mostramos la primer imagen de cada slideshow*/
showSlides(1, 2);
showSlides(1, 3);


function plusSlides(n, no) {				/*Recibimos dos numeros, donde 'n' indica si estamos usando 'prev' (n=-1) o 'next' (n=1) y 'no' es el numero para identificar las slides, ya sea mySlides1, mySlides2, etc*/
    showSlides(slideIndex[no] += n, no);		/*Aqui actualizamos el valor de slideIndex, ya sea +1 o -1 y Llamamos a showSlides con el valor actual de slideIndex */	

//console.log(slideIndex[no]);
}


function showSlides(n, no) {		/*Recibimos dos numeros, donde 'n' es el valor actual de slideIndex y 'no' es el numero para identificar las slides, ya sea mySlides1, mySlides2, etc*/
    let i;
    let x = document.getElementsByClassName(slideId[no]);	/*Agregamos todos los elementos pertenecientes a un tipo de mySlides ya sea mySlides1, mySlides2, etc */

    //console.log(x);
    //console.log(slideIndex[no]);

    if (n > x.length) {slideIndex[no] = 1}    /*Si 'n' es mayor al tamanio del arreglo 'x', es decir al numero de slides del slideshow, quiere decir que estamos en la ultima diapositiva y deseamos mostrar la primera nuevamente, ademas volvemos a 1 el slideIndex*/ 
    if (n < 1) {slideIndex[no] = x.length}	/*Si 'n' es menor a 1, quiere decir que deseamos mostrar la ultima diapositiva al regresar con 'prev' inicialmente, por lo que pone en slideIndex el tamanio del arreglo 'x'*/
						/*Observese que n==1 no esta definido, por lo que este es el valor por defecto, directamente se pasa a las sig. lineas de codigo.*/
    for (i = 0; i < x.length; i++) {		/*Con este ciclo, ocultamos todas las imagenes de cada slideshow*/
           x[i].style.display = "none";  
        }
    x[slideIndex[no]-1].style.display = "block";  	/*Con esta linea mostramos la imagen en curso del slideshow*/
}
