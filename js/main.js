$(document).ready(function () {
    // show city-input-box list
    $('.city-input-box_search').click(function () {
        $(this).siblings('.city-input-box_list').addClass('show-city-input-box_list');
    });

    // set city name
    $.getJSON('./json/city-name.json', function (data) {
        for (let i = 0; i < data.length; i++) {
            let city_item = $("<li></li>").text(data[i].name);
            city_item.addClass('city-input-box_item');
            $('.city-input-box_list').append(city_item);
        }
    })
    
    // set city-input-box-input value 
    $('.city-input-box_list').on("click", ".city-input-box_item", function (e) {
        let target_city = $(this).text();
        $('.city-input-box_input').val(target_city);
        $('.submit-city-input-box_input').click();
        $('.city-input-box_list').removeClass('show-city-input-box_list');
    });

    // search in city list
    $('.city-input-box_input').keyup(function () {
        let target = $(this).val();

        let listLenght = $('.city-input-box_item').length;

        for (let i = 0; i < listLenght; i++) {
            let txtValue = $('.city-input-box_item')[i].textContent;

            if (txtValue.indexOf(target) > -1) {
                $('.city-input-box_item').eq(i).removeClass("hide-city-item")
                $('.city-input-box_item').eq(i).addClass("show-city-item")

            } else {
                $('.city-input-box_item').eq(i).removeClass("show-city-item")
                $('.city-input-box_item').eq(i).addClass("hide-city-item")
            }
        }
    });

    // city-input-lboxInput search
    $('.city-input-lboxInput').focusin(function() {
        $('.city-input-lbox__search-icon').css('color', '#000')
        $('.city-input-lbox__input').css('border', '1px solid #8cb1ff');
    });
    
    $('.city-input-lboxInput').focusout(function() {
        $('.city-input-lbox__search-icon').css('color', 'gray')
        $('.city-input-lbox__input').css('border', '1px solid gainsboro');
    });


    // show/hide more-visite-city-container and result-city-list-container
    $('.city-input-lboxInput').keyup(function() {
        $('.more-visite-city-container').css('display', 'none');
        if ($('.city-input-lboxInput').val().length == 0 ) {
            $('.more-visite-city-container').css('display', 'block');
            $('.result-city-list-container').css('display', 'none');
        }

        if ($('.city-input-lboxInput').val().length > 0 ) {
            $('.result-city-list-container').css('display', 'grid')
        }
    });
    
    // search in city list by lboxInput
    $('.city-input-lboxInput').keyup(function () {
        $('.result-city-list-container').empty();
        let target = $(this).val();

        let listLenght = $('.city-input-box_item').length;

        for (let i = 0; i < listLenght; i++) {
            let txtValue = $('.city-input-box_item')[i].textContent;

            if (txtValue.indexOf(target) > -1) {
                let resultCityItem = $("<a></a>").text(txtValue);
                resultCityItem.addClass('result-city-item');
                resultCityItem.attr("href", "../single.html");
                $('.result-city-list-container').append(resultCityItem)
            } 
        }
    });
});