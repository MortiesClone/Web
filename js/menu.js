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
				topmenu.toggle();
			});
		}
		else{
			menu.hide();
			topmenu.show();
		}
    }
});