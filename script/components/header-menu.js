const spanMenu = document.querySelector('[data-span-menu]'); 
//Funcion que añade y remueve clases para agregar animaciones en el header con keyframes
const header = document.querySelector('[data-header]');
if(screen.width < 1024){
  header.classList.remove("header")
  header.classList.add('header__hide');
}else if(screen.width >= 1024){
  header.classList.remove("header2")
} 

export const animacionHeader  = spanMenu.addEventListener('click', ()=>{
  const header = document.querySelector('[data-header]');
  const link = document.querySelectorAll('.header__link');
  const tieneHeader =  header.classList.contains("header2");
  if(tieneHeader){
    header.classList.add("header");
    header.classList.remove("header2")
  }
 

  if(!header.classList.contains('header__hide')){
    header.classList.add('header__hide')
    header.classList.remove('header__show')
    link.forEach(e =>{ 
        e.classList.add('header__hide');
        e.classList.remove('header__show')
    }
        )
  }else{
    header.classList.remove('header__hide')
    header.classList.add('header__show')
    link.forEach(e =>{ 
        e.classList.remove('header__hide');
        e.classList.add('header__show')
    })
  }
 
})


const headerUL = document.getElementById("header__ul")
 
export const redireccionamientoDeLinksHeader = headerUL.addEventListener('click',(e)=>{
   const url = e.target.childNodes[0].href;
   if(url){
   return window.location.href = url;
   }
})
