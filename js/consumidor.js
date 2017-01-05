$(function(){
	var url = $(".botao-busca").click(consomeAPI);
});

function consomeAPI(url){
	event.preventDefault();
	$.get(""+constroiURL(),function(data){
		console.log(data.items);
	});
}

function converteDados(items){
	for (var i = 0; i >= items.length; i++) {
		//	
	}
}