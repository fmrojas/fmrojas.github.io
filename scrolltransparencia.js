$(document).ready(function(){
    onscroll = function(){
        var menuTransparency = $(document).scrollTop();
        if (menuTransparency >= 60){
        $('.MainMenu').addClass('MainMenu-scrolled');
        $('.MainMenu-link').addClass('MainMenu-link-scrolled');
        }
        else {
            $('.MainMenu').removeClass('MainMenu-scrolled');
            $('.MainMenu-link').removeClass('MainMenu-link-scrolled');
        }
    }
  }
)
