{
	$(function(){
		$("h1").animate({
			color: "#f80"
		}, 3000);
		
		let iluminado = false;
		$("h2").click(function(){
			let elem = $(this);
			if(iluminado){
				elem.animate({
					"background-color": "#9f9"
				}, 500);
			}else{
				elem.animate({
					"background-color": "#ffc"
				}, 500);
			}
			iluminado = !iluminado;
		})
	});
}