$(function() {
    const menuItems = $('.main-menu').find('a');
    const contentElements=$('.content')

    menuItems.click(function(e) {
        e.preventDefault();
        menuItems.removeClass('selected');
        $(this).addClass('selected');

        const dataContent = $(this).data('content');
		contentElements.addClass('hidden');

        contentElements.each(function(index,item) {
            if($(item).hasClass(dataContent)) {
				$(item).removeClass('hidden');
			} 
        }); 
    });
});