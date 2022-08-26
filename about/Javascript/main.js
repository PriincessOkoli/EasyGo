let newfunc = () =>{
    alert('Thanks for subscribing')

}


$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    });

    $('.toggle-btn').click(function(){
        $('.navbar .nav').toggleClass('active');
        $('.toggle-btn i').toggleClass('active');
    }); 
    $('.nav').click(function(){
        $('.navbar .nav').removeClass('active');
        $('.toggle-btn i').removeClass('active');
    })


});