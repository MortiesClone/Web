$(document).ready(function(){

	var topmenu = $("ul#topmenu");
	var headholder = $("div#headholder")
	var menu = $("#menu")
	var showed = false;

	menu_control();

	$(window).resize(function() {
		menu_control();
    });
    
    function menu_control(){
    	if($(window).width() <= '600'){
        	menu.show();
			topmenu.hide();
			menu.click(function(){
				if($("ul#topmenu").css('display') == 'none')
					topmenu.slideDown();
				else if($("ul#topmenu").css('display') == 'block')
					topmenu.slideUp();
			});
		}
		else{
			menu.hide();
			topmenu.show();
		}
    }
});