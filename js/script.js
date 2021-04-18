$(document).ready(function(e){

    $('.design-text, .dev-text, .pdt-mgt-text').hide();
    $('.design').click(function(){
        $('.design-image, .design-text').toggle();
    });
    $('.dev').click(function () {
        $('.dev-image, .dev-text').toggle();
    });
    $('.pdt-mgt').click(function () {
        $('.pdt-mgt-image, .pdt-mgt-text').toggle();
    });

    e.preventDefault();
});