var page = $("#campo-page");
var rpp = $("#campo-rpp");
var sort = $("#campo-sort");
var score = $("#campo-score");

page.on('input', function(){
	fieldBehavior($(this));
});

rpp.on('input', function(){
	fieldBehavior($(this));
});

function fieldBehavior(field){
	console.log(field.val());
	var input=field.val();
	if(input<=0){
		field.val('');
	}else if (input>=100) {
		field.val(99);
	}
}

function constroiURL(){
	var valorPage = page.val();
	var valorRpp = rpp.val();
	var valorSort = sort.val();

	var query = validaInputPagina(valorPage,valorRpp);

	if(valorSort!=''){
		valorSort="&sort="+valorSort;
	}
	return "https://api.stackexchange.com/2.2/questions?"+query+"order=desc"+valorSort+"&site=stackoverflow";
}

function validaInputPagina(valorPage,valorRpp){
	if (valorPage!='' && valorRpp!='') {
		valorPage = "page="+valorPage+"&";
		valorRpp = "pagesize="+valorRpp+"&";
		return ""+valorPage+""+valorRpp;
	}else if(valorPage!=''||valorRpp!=''){
		alert("Os campos Page e RPP devem possuir valores maiores do que 0, Caso um dos campos Page e RPP seja preenchido o outro também deverá ser preenchido");
		return '';
	}else{
		return '';
	}
}

function insereElemento(novaLinha){
	var tabela = $(".tabela");
	var corpoTabela = tabela.find("tbody");

	corpoTabela.append(novaLinha);
}

function scrollResultados(){
    var posicaoResultados = $(".resultados").offset().top;

    $("body").stop().animate({
        scrollTop:posicaoResultados+"px"
    },600);
}

function criaNovaLinha(titulo,autor,score,linkAutor,linkPergunta){
	var linha = $("<tr>").addClass("pergunta");
	var colunaTitulo = $("<td>").addClass("tituloPergunta");
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
	if(valorScore<=scoreBusca||valorScore==''){
		return true;
	}else{
		return false;
	}
}