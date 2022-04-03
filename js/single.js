// show|hide desc-menu-modal
$('.header-category-btn').click(function () {
    $('.desk-search-box-dropdown').removeClass('show-desk-search-box-dropdown');
    $('.desc-menu-modal').toggleClass('show-desc-menu-modal');
    if ($('.desc-menu-modal').hasClass('show-desc-menu-modal')) {
        $(this).children('span').css({
            'transform': 'rotate(' + 180 + 'deg)'
        });
    } else {
        $(this).children('span').css({
            'transform': 'rotate(' + 0 + 'deg)'
        });
    }
});

// show desk-sebmenu-list
$('.desk-menu-item').mouseenter(function() {
    let menuItemIndex = $(this).attr('data-menuItem');
    let submenuList = $('.desk-submenu-list');

    for (let i = 0; i < submenuList.length; i++) {
        submenuList.eq(i).removeClass("desk-sebmenu-active-list");
        
        if ( submenuList[i].attributes[1].value == menuItemIndex ) {
            submenuList.eq(i).addClass("desk-sebmenu-active-list");
        }
    } 
});

// show desk-search-box-dropdown
$('.desk-search-box-input').click(function() {
    $('.desc-menu-modal').removeClass('show-desc-menu-modal');
    $(this).siblings('.desk-search-box-dropdown').toggleClass('show-desk-search-box-dropdown');
});