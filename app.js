
const animation=document.querySelectorAll(".faq");
 animation.forEach(faq =>{
     faq.addEventListener("click", () =>{
         
        faq.classList.toggle('active');
     })
 })



