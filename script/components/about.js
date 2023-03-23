
const contenedorCard = document.querySelectorAll(".about__description_card");
        export function cardAnimation (){
    contenedorCard.forEach((e)=>{  
    e.addEventListener("click",evento=>{
        if(contenedorCard[1].classList.contains('desc-segundo') &&
        contenedorCard[1] == evento.currentTarget){
            contenedorCard[0].classList.replace('desc-primero','desc-tercero')
            contenedorCard[1].classList.replace('desc-segundo','desc-primero')
           contenedorCard[2].classList.replace('desc-tercero','desc-segundo')
          
        }else if(contenedorCard[1].classList.contains('desc-primero')
         && contenedorCard[0] == evento.currentTarget ){
                contenedorCard[0].classList.replace('desc-tercero','desc-primero');
                contenedorCard[1].classList.replace('desc-primero','desc-segundo');
                contenedorCard[2].classList.replace('desc-segundo','desc-tercero');
        }else if(contenedorCard[0].classList.contains('desc-primero') &&
           contenedorCard[2] == evento.currentTarget ){
                contenedorCard[0].classList.replace('desc-primero','desc-tercero');
               
                contenedorCard[2].classList.replace('desc-tercero','desc-primero');
           } 
           if(contenedorCard[1].classList.contains('desc-tercero') &&
           contenedorCard[1] == evento.currentTarget ){
                contenedorCard[0].classList.replace('desc-segundo','desc-tercero');
                contenedorCard[1].classList.replace('desc-tercero','desc-primero');
                contenedorCard[2].classList.replace('desc-primero','desc-segundo');
}
        if(contenedorCard[2].classList.contains('desc-primero')&&
            contenedorCard[1] == evento.currentTarget){
                contenedorCard[2].classList.replace('desc-primero','desc-segundo')
        }

        if(contenedorCard[2] == evento.currentTarget &&
            contenedorCard[2].classList.contains('desc-segundo')
            ){
                
                contenedorCard[1].classList.replace('desc-primero','desc-segundo')  
                contenedorCard[2].classList.replace('desc-segundo','desc-primero');  
            }
        if(contenedorCard[0] == evento.currentTarget &&
            contenedorCard[2].classList.contains('desc-primero')){
                contenedorCard[0].classList.replace('desc-tercero','desc-primero');
                contenedorCard[1].classList.add('desc-segundo');
                contenedorCard[2].classList.replace('desc-primero','desc-tercero')
            }
    })
})
}
cardAnimation();