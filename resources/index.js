// te rog sa inlocuiesti cu ready function aici de la jQuery 
//si trebuie sa faci un pic de curatenie, iti estea prea aglomerat codul si 80% din tot ce ai nevoie aici nu iti mai trebuie, este foarte greu sa iti dai seama ce e ok si ce nu e ok aici
document.addEventListener("DOMContentLoaded", function(event){
    const menuItems = $('.main-menu').find('a');
    const menuShop = $('.menuShop');
    console.log('menuShop')
    console.log('menuItems', menuItems.length)

        
        menuItems.click(function(e) {
               e.preventDefault();
               console.log('click');
               menuItems.removeClass('selected');
               $(this).addClass('selected');
            

       //la ambele variante nu iese selectia de data-content cum trebuie
    //    $('main-menu') tie nu iti selecteaza nimic aici, nu este nici clasa, nici id, doar text
       const dataContent=$('main-menu').attr('data-content');
       console.log($('main-menu').attr('data-content'));
       //si nici asa varianta ce am comentat-o mai jos nu iese
       //const dataCont=$('menu-item).attr('data-content');
       const contentElements=$('.content')
        console.log('content:', contentElements.length);
        contentElements.each(function(index,item) {
           contentElements.addClass('hidden');
            $(this).removeClass('hidden');
            
       } 
            )
              //const dataContent=menuItems.dataset.content;
              //console.log('dataContent', dataContent);
             //const contentElements=document.getElementsByClassName("content");
              //for(let i= 0; i < contentElements.length; i++) {
                //if(contentElements[i].classList.contains('hidden')){
                  //  continue;
               // } else {
                //    contentElements[i].classList.add("hidden");
              //  }
            //}
           // document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
             
              
              //o idee de cum poti sa ascunzi un element conditional
              //if(dataContent === 'orders-container') {
                  //menuShop e selectat mai sus oe randul 3
                //menuShop.classList.add('hidden');
              //} else {
                 //menuShop.classList.remove('hidden');
              //} 

              const dataLogo=menuItem.dataset.logo;
              console.log('dataLogo', dataLogo)
              const logoElements= $('.logo')//document.getElementsByClassName("logo");
              for(let m= 0; m < logoElements.length; m++) {
                  if(logoElements[m].classList.contains('hidden')){
                      continue;
                  } else {
                      logoElements[m].classList.add("hidden");
                  }
              }
              document.getElementsByClassName(dataLogo)[0].classList.remove("hidden");
            }
        )

          ordersLink=document.getElementById("order-link");
        console.log('ordersLink', ordersLink)
         
                         $('#order-link').click(function () {
                      const dataLink=$('.linked-page');
                      console.log('dataLink:', dataLink) 
                      $(this).removeClass('hidden');
                       $('content').addClass('hidden');
                         
               //const dataLink=ordersLink.dataset.content
               //console.log('dataLink', dataLink)
               //const linkElements=document.getElementsByClassName("content");
               //for(let n= 0; n< linkElements.length; n++) {
                  // if(linkElements[n].classList.contains('hidden')) {
                    //   continue;
                   //} else {
                   //    linkElements[n].classList.add("hidden");
                   // }
               
              // document.getElementsByClassName(dataLink)[0].classList.remove("hidden");
           }
           )
}
)