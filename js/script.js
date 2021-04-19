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

    $('#contactUsForm').submit(function(event){
        let userName = $('#userName').val();
        let userEmail = $('#userEmail').val();
        let userMessage = $('#userName').val();
        alert("Hello " + userName + ". We have received your message. Thank you for contacting us.")

        event.preventDefault();
    });

    e.preventDefault();
});