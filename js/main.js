var page = $("#campo-page");
var rpp = $("#campo-rpp");
var sort = $("#campo-sort");
var score = $("#campo-score");
console.log("fora "+page);
//https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow
//https://api.stackexchange.com/2.2/questions?page=1&pagesize=2&order=desc&sort=activity&site=stackoverflow
$(function(){
	$(".botao-busca").click(constroiURL);
});

function constroiURL(event){
	event.preventDefault();
	var valorPage = validaPage();
	var valorRpp = validaRpp();
	var valorSort = sort.val();
	var and = '';

	if(valorPage!=''&&valorRpp!=''){
		and = "&";
	}

	var url = "https://api.stackexchange.com/2.2/questions?"+valorPage+""+and+""+valorRpp+""+and+"order=desc&sort="+valorSort+"&site=stackoverflow";
	console.log(url);

	return url;
}

function validaPage(){
	var valorPage = page.val();
	if (valorPage!='' && valorPage>0) {
		return "page="+valorPage;
	}else{
		return '';
	}
}

function validaRpp(){
	var valorRpp = rpp.val();
	if (valorRpp!='' && valorRpp>0) {
		return "pagesize="+valorRpp;
	}else{
		return '';
	}
}

function insereElemento(novaLinha){
	var tabela = $(".tabela");
	var corpoTabela = tabela.find("tbody");

	corpoTabela.append(novaLinha);
}

function criaNovaLinha(titulo,autor,score,linkAutor,linkPergunta){
	var linha = $("<tr>");
	var colunaTitulo = $("<td>").text(titulo);
	var colunaAutor = $("<td>").text(autor);
	var colunaScore = $("<td>").text(score);

	var linkColunaAutor = $("<a>").attr("href",linkAutor);
	var linkColunaPergunta = $("<a>").attr("href",linkPergunta);

	colunaAutor.append(linkColunaAutor);
	colunaTitulo.append(linkColunaPergunta);

	linha.append(colunaTitulo);
	linha.append(colunaAutor);
	linha.append(colunaScore);

	insereElemento(linha);
}