$(function(){
	var url = $(".botao-busca").click(consomeAPI);
});

function consomeAPI(url){
	event.preventDefault();
	$.get(constroiURL(),function(data){
		console.log(data.items);
		atualizaTabela(data.items);
	});
}

function atualizaTabela(items){
	limpaTabela();
	for (var i = 0; i < items.length; i++) {
		criaNovaLinha(items[i].title,items[i].owner.display_name,items[i].score,items[i].owner.link,items[i].link);	
	}
}