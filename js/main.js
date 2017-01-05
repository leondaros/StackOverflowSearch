var page = $("#campo-page");
var rpp = $("#campo-rpp");
var sort = $("#campo-sort");
var score = $("#campo-score");

function constroiURL(){
	event.preventDefault();
	var valorSort = sort.val();
	return "https://api.stackexchange.com/2.2/questions?"+validaPreenchimentoCampos()+"order=desc&sort="+valorSort+"&site=stackoverflow";
}

function validaPreenchimentoCampos(){
	var valorPage = page.val();
	var valorRpp = rpp.val();
	if(validaPage(valorPage) && validaRpp(valorRpp)){
		return "page="+valorPage+"&pagesize="+valorRpp+"&";
	}else if(valorPage!=''||valorRpp!=''){
		alert("Os campos Page e RPP devem possui valores maiores do que 0, caso um deles seja preenchido o outro também deverá ser preenchido");
		return '';
	}

}

function validaPage(valorPage){
	if (valorPage!='' && valorPage>0) {
		return true;
	}else{
		return false;
	}
}

function validaRpp(valorRpp){
	if (valorRpp!='' && valorRpp>0) {
		return true;
	}else{
		return false;
	}
}

function insereElemento(novaLinha){
	var tabela = $(".tabela");
	var corpoTabela = tabela.find("tbody");

	corpoTabela.append(novaLinha);
}

function criaNovaLinha(titulo,autor,score,linkAutor,linkPergunta){
	var linha = $("<tr>").addClass("pergunta");
	var colunaTitulo = $("<td>");
	var colunaAutor = $("<td>");
	var colunaScore = $("<td>").text(score);

	var linkColunaAutor = $("<a>").attr("href",linkAutor).text(autor);
	var linkColunaPergunta = $("<a>").attr("href",linkPergunta).text(titulo);

	colunaAutor.append(linkColunaAutor);
	colunaTitulo.append(linkColunaPergunta);

	linha.append(colunaTitulo);
	linha.append(colunaAutor);
	linha.append(colunaScore);

	insereElemento(linha);
}

function limpaTabela(){
	$("tbody").empty();
}

function filtraScore(scoreBusca){
	var valorScore = score.val();
	if(valorScore<=scoreBusca){
		return true;
	}else{
		return false;
	}
}
