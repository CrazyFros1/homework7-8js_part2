(function () {
    $(function () {
        $('input').mouseover(function () {
            del();
            var $tooltip = $(this).attr('title');
            $(this).after('<span>' + $tooltip + '</span>');
        }).mouseout(function () {
            del();
        })
    });
    $(function () {
        $('button').click(function () {
            $('.form input').each(function () {
                var $tooltip = $(this).attr('title');
                $(this).after('<span>' + $tooltip + '</span>');
            })
        })
    });
    function del() {
        $('.form span').remove();
    }
})();
