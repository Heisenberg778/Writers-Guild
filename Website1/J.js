 $(window).scroll(function(){
     
     var Scroll = $(this).scrollTop();
    
     if(Scroll > $('.sub-header h1').offset().top - ($(window).height()/1.7)){
         
         $('.photos td').each(function(i){
             
               setTimeout(function(){             
              $('.photos td').eq(i).addClass('is-showing');
             }, 150 * (i+1)); 
          });
     }
     
 });
    
