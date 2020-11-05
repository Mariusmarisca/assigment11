// te rog sa inlocuiesti cu ready function aici de la jQuery 
//si trebuie sa faci un pic de curatenie, iti estea prea aglomerat codul si 80% din tot ce ai nevoie aici nu iti mai trebuie, este foarte greu sa iti dai seama ce e ok si ce nu e ok aici
$(function(){
    const menuItem=$('.main-menu').find('a');
    console.log('menuItem:', menuItem);
    const dataContent=$('.content');
    const logoItems=$('.logo');
    const ordersContainer=$('.orders-container');
    const buttonOrder=$('#buttonOrder');
    console.log('buttonOrder:', buttonOrder);
    const menuShop=$('.menuShop');
    console.log('menuShop', menuShop);
    

    menuItem.click(function(e) {
        e.preventDefault();
        menuItem.removeClass('selected');
        $(this).addClass('selected');

        const logoElements=$(this).data('logo');
        logoItems.addClass('hidden');
        logoItems.each(function(index,item){
            if($(item).hasClass(logoElements)){
                $(item).removeClass('hidden')
            }
        })
        
        const contentElements=$(this).data('content');
        console.log('contentElements:', contentElements);
         dataContent.addClass('hidden');

         dataContent.each(function(index,item){
             if($(item).hasClass(contentElements)){
                 $(item).removeClass('hidden');
                 menuShop.removeClass('hidden');
             }
        })
    }
    )
        
           buttonOrder.click(function(e){
               e.preventDefault();
               menuShop.addClass('hidden');
           })

        const orderLink=$('#order-link');
        console.log('orderLink:', orderLink);

        orderLink.click(function(e){
            e.preventDefault();
            const linkPage=$('.linked-page');
            dataContent.addClass('hidden');
            linkPage.removeClass('hidden');
            menuShop.removeClass('hidden')
        }
        )

}
)