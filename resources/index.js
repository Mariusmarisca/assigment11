$(function(){
    const menuItem=$('.main-menu').find('a');;
    const dataContent=$('.content');
    const logoItems=$('.logo');
    const ordersContainer=$('.orders-container');
    const buttonOrder=$('#buttonOrder');
    const menuShop=$('.menuShop');
    const galleryItem=$('.gallery-item');
    const overlayItem=$('.overlay');
    const imgWrapper=$('.img-wrapper');

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
    });

    
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
        })

        galleryItem.click(function() {
            imgWrapper.css({backgroundImage:"url(assets/product-1/" + $(this).data('img') + ")"});
            overlayItem.fadeIn();  
        })
        imgWrapper.click(function(){
            e.stopPropagation();
        })
        overlayItem.click(function(){
            $(this).fadeOut();
        })

})