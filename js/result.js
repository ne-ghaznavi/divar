// show|hide city-modal-container
$('.header-search-city').click(function() {
    $('.city-modal-container').addClass('show-city-modal-container');
    $('.single-wrapper').addClass('fit-vh');
});

$('.city-modal__btn-cancel').click(function() {
    $('.city-modal-container').removeClass('show-city-modal-container');
    $('.single-wrapper').removeClass('fit-vh');
});

// set state name and add to city-modal__main
$.getJSON('./json/state-name.json', function (data) {
    for (let i = 0; i < data.length; i++) {
        let state_item = $("<span></span>").text(data[i].name);
        let arrow = $("<span></span>").text('chevron_left');
        arrow.addClass('material-icons');
        let wrapperCityItem = $("<div></div>");
        wrapperCityItem.attr('data-id',data[i].id);
        wrapperCityItem.addClass('city-modal__main-item');
        wrapperCityItem.append(state_item);
        wrapperCityItem.append(arrow);
        $('.city-modal__main').append(wrapperCityItem);
    }
})

// show|hide city-modal__main-cityList
let stateId = '';
$('.city-modal__main').on('click','.city-modal__main-item', function(){
    $('.city-modal__main-cityList').addClass('show-city-modal__main-cityList');

    let cityListContainer = $("<div></div>").addClass('modal__cityList__item');
    let cityName = $("<span></span>");
    let cityInput = $("<input></input>").attr('type', 'checkbox');
    let checkboxRedesign = $("<div></div>").addClass('checkbox-redesign');

    cityListContainer.append(cityName);
    cityListContainer.append(cityInput);
    cityListContainer.append(checkboxRedesign);

    $('.modal__cityList__body').append(cityListContainer);


    let stateName = 'همه شهر‌های ' + $(this).children(':first-child').text();
    stateId = $(this).attr('data-id');
    $('.modal__cityList__item:first-of-type span').text(stateName);

    // set city name and add to city-modal__main-cityList
    $.getJSON('./json/city-name.json', function (data) {
        for (let i = 0; i < data.length; i++) {
            if (stateId == data[i].province_id) {
                let cityListContainer = $("<div></div>").addClass('modal__cityList__item');

                let cityName = $("<span></span>");
                cityName.text(data[i].name);

                let cityInput = $("<input></input>").attr('type', 'checkbox');

                let checkboxRedesign = $("<div></div>").addClass('checkbox-redesign');
                let tickIcon = $("<span></span>");
                tickIcon.addClass('material-icons')
                tickIcon.css('color', '#fff');
                tickIcon.text('done');
                checkboxRedesign.append(tickIcon);

                cityListContainer.append(cityName);
                cityListContainer.append(cityInput);
                cityListContainer.append(checkboxRedesign);

                $('.modal__cityList__body').append(cityListContainer);
            }
        }
    })
});

$('.modal__cityList__header span:first-of-type').click(function(){
    $('.city-modal__main-cityList').removeClass('show-city-modal__main-cityList')
    $('.modal__cityList__body').empty();
});

// select target city
$('.city-modal__main').on('click', '.modal__cityList__item', function() {
    $(this).toggleClass('activeCity');

    if ($(this).hasClass('activeCity')) {
        let targetCity = $(this).children(':first-child').text();
        $(this).children('.checkbox-redesign').css('background-color', '#a62626');

        // add target city to city-list
        let targetCityContainer = $('<div></div>').addClass('city-modal__header-item');
        let targetCityName = $("<span></span>").text(targetCity);
        let tergetDel = $("<span></span>").addClass('material-icons').text('close');
        let inputCityName = $("<input>").val(targetCity);
        inputCityName.attr("name","cityName")
        targetCityContainer.append(targetCityName);
        targetCityContainer.append(inputCityName);
        targetCityContainer.append(tergetDel);

        $('.city-modal__header-list').append(targetCityContainer);

        
    } else {
        let targetCity = $(this).children(':first-child').text();
        
        // delete target city form city-list
        let selecteCityList = $('.city-modal__header-list').children();
        for (let i = 0; i < selecteCityList.length; i++) {
            let HtmlCityItem = selecteCityList[i].children;
            if (targetCity == HtmlCityItem.item(0).textContent) {
                $(HtmlCityItem.item(0).parentNode).remove();
            }
        }

        $(this).children('.checkbox-redesign').css('background-color', '#fff');

    }
})

// remove all target city
$('.city-modal__header-btn-delete').click(function() {
    $('.city-modal__header-list').empty();
});

// remove target city 
$('.city-modal__header-list').on('click', '.city-modal__header-item', function() {
    $(this).remove();
});

// submit city list
$('.city-modal__btn-ok').click(function() {
    $('.submit-list-city').click();
});

// shoo|hide search-modal-container
$('.header-search-input').click(function() {
    $('.search-modal-container').addClass('show-search-modal-container');
});

$('.search-modal__header-icon').click(function() {
    $('.search-modal-container').removeClass('show-search-modal-container');
});

// show|hide category-modal
$('.category-fillter__btn').click(function() {
    $('.category-modal-container').addClass('show-category-modal-container');
});

$('.exit-category-modal').click(function() {
    $('.category-modal-container').removeClass('show-category-modal-container');
});

// show|hide category-modal__item
$('.category-modal__item').click(function() {
    $('.subcategory-modal-container').addClass('show-subcategory-modal-container');
});

$('.exit-subcategory-modal').click(function() {
    $('.category-modal-container').removeClass('show-category-modal-container');
    $('.subcategory-modal-container').removeClass('show-subcategory-modal-container');
});

$('.back-category-modal').click(function() {
    $('.subcategory-modal-container').removeClass('show-subcategory-modal-container');
});

// show|hide fillter-modal-container
$('.header-fillter__btn').click(function() {
    $('.fillter-modal-container').addClass('show-fillter-modal-container');
});

$('.exit-fillter-modal').click(function() {
    $('.fillter-modal-container').removeClass('show-fillter-modal-container');
});

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