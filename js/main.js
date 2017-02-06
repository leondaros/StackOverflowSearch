var page = $("#page-input");
var rpp = $("#rpp-input");
var sort = $("#sort-input");
var score = $("#score-input");

page.on('input', function(){
	if($(this).val()<=0){
		$(this).val('');
	}
});

rpp.on('input', function(){
	if($(this).val()<=0){
		$(this).val('');
	}else if ($(this).val()>100) {
		$(this).val(100);
	}
});

function buildURL(){
	var pageValue = page.val();
	var rppValue = rpp.val();
	var sortValue = sort.val();

	var query = validateInput(pageValue,rppValue);

	if(sortValue!=''){
		sortValue="&sort="+sortValue;
	}
	return "https://api.stackexchange.com/2.2/questions?"+query+"order=desc"+sortValue+"&site=stackoverflow";
}

function validateInput(pageValue,rppValue){
	if (pageValue!='' && rppValue!='') {
		pageValue = "page="+pageValue+"&";
		rppValue = "pagesize="+rppValue+"&";
		return ""+pageValue+""+rppValue;
	}else if(pageValue!=''||rppValue!=''){
		alert("Caso um dos campos Page e RPP seja preenchido o outro também deverá ser preenchido");
		return '';
	}else{
		return '';
	}
}

function insertElement(newLine){
	var table = $(".table");
	var tableBody = table.find("tbody");

	tableBody.append(newLine);
}

function scrollToResult(){
    var resultPosition = $(".search-results").offset().top;

    $("body").stop().animate({
        scrollTop:resultPosition+"px"
    },600);
}

function createNewLine(title,author,score,authorLink,questionLink){
	var newLine = $("<tr>").addClass("question");
	var titleColumn = $("<td>").addClass("titleQuestion");
	var authorColumn = $("<td>");
	var scoreColumn  = $("<td>").text(score);

	var linkAuthorColumn = $("<a>").attr("href",authorLink).text(author);
	var linkQuestionColumn = $("<a>").attr("href",questionLink).text(title);

	authorColumn.append(linkAuthorColumn);
	titleColumn.append(linkQuestionColumn);

	newLine.append(titleColumn);
	newLine.append(authorColumn);
	newLine.append(scoreColumn);

	insertElement(newLine);
}

function clearTable(){
	$("tbody").empty();
}

function scoreFilter(dataScore){
	var scoreValue = score.val();
	if(scoreValue<=dataScore||scoreValue==''){
		return true;
	}else{
		return false;
	}
}