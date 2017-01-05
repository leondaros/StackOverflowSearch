var page = $("#campo-page");
var rpp = $("#campo-rpp");
var sort = $("#campo-sort");
var score = $("#campo-score");

function constroiURL(){
	event.preventDefault();
	var valorPage = validaPage();
	var valorRpp = validaRpp();
	var valorSort = sort.val();
	var and = '';

	if(valorPage!=''&&valorRpp!=''){
		and = "&";
	}
	return "https://api.stackexchange.com/2.2/questions?"+valorPage+""+and+""+valorRpp+""+and+"order=desc&sort="+valorSort+"&site=stackoverflow";
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
	//var myNode = document.getElementsByTagName("tbody");
	//myNode.remove();
	//while (myNode.firstChild) {
    //	myNode.removeChild(myNode.firstChild);
	//}
}
