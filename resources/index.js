document.addEventListener("DOMContentLoaded", function(event){
    const menuItems = document.getElementsByClassName("menu-item");
    const menuShop = document.getElementById('menuShop');
    console.log('menuItems', menuItems)

    for(let i = 0; i < menuItems.length; i++){
        const menuItem= menuItems[i];
        
        menuItem.addEventListener('click', function() {
           for(let j = 0; j < menuItems.length; j++) {
               if (menuItems[j].classList.contains('selected')){
                   menuItems[j].classList.remove("selected");
               } else {
                   continue;
               }
           }
           menuItem.classList.add("selected");

              const dataContent=menuItem.dataset.content;
              console.log('dataContent', dataContent)
              const contentElements=document.getElementsByClassName("content");
              for(let k= 0; k < contentElements.length; k++) {
                  if(contentElements[k].classList.contains('hidden')) {
                      continue;
                  } else {
                     contentElements[k].classList.add("hidden");
                  }
              }
              document.getElementsByClassName(dataContent)[0].classList.remove("hidden");
              
              //o idee de cum poti sa ascunzi un element conditional
              if(dataContent === 'orders-container') {
                  //menuShop e selectat mai sus oe randul 3
                  menuShop.classList.add('hidden');
              } else {
                menuShop.classList.remove('hidden');
              }

              const dataLogo=menuItem.dataset.logo;
              console.log('dataLogo', dataLogo)
              const logoElements=document.getElementsByClassName("logo");
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
    }
        const ordersLink= document.getElementById("order-link");
        console.log('ordersLink', ordersLink)
        
           ordersLink.addEventListener('click', function() {
               const dataLink=ordersLink.dataset.content
               console.log('dataLink', dataLink)
               const linkElements=document.getElementsByClassName("content");
               for(let n= 0; n< linkElements.length; n++) {
                   if(linkElements[n].classList.contains('hidden')) {
                       continue;
                   } else {
                       linkElements[n].classList.add("hidden");
                   }
               }
               document.getElementsByClassName(dataLink)[0].classList.remove("hidden");
           }
           )
}
)