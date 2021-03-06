$(document).ready(function () {

    var mc = {
        '0-1': 'featured-rating',
        '2-3': 'featured-rating-orange',
        '4-5': 'featured-rating-green'
    };

    function between(x, min, max) {
        return x >= min && x <= max;
    }



    var dc;
    var first;
    var second;
    var th;

    $('span').each(function (index) {

        th = $(this);

        dc = parseInt($(this).attr('data-color'), 10);


        $.each(mc, function (name, value) {


            first = parseInt(name.split('-')[0], 10);
            second = parseInt(name.split('-')[1], 10);

            if (between(dc, first, second)) {
                th.addClass(value);
            }



        });

    });
});