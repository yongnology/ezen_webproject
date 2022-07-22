$(function() {
    $.ajax({
        url: 'header.html',
        success:function (data) {
            $('body').prepend(data);
        }
    })
});