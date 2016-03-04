 $(window).scroll(function(){
     
     var Scroll = $(this).scrollTop();
    
     if(Scroll > $('.sub-header h1').offset().top - ($(window).height()/1.7)){
         
         $('.photos td').each(function(i){
             
               setTimeout(function(){             
              $('.photos td').eq(i).addClass('is-showing');
             }, 150 * (i+1)); 
          });
     }
     
    if(Scroll > $('.sub-header h1').offset().top - ($(window).height()/1.7)){
        
        $('#li1').each(function(){
                       
                $('#li1').addClass('dot-display');
                       });
        $('#li2').each(function(){
                       
                $('#li2').removeClass('dot-display');
                       });
        
    }
     
          
    if(Scroll > $('.parallax').offset().top - ($(window).height()/1.7)){
        
        $('#li1').each(function(){
                       
                $('#li1').removeClass('dot-display');
                       });
        
        $('#li2').each(function(){
                       
                $('#li2').addClass('dot-display');
                       });
        
    }
     
      
     
 });

    
    
