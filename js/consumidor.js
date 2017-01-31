$(function(){
	$(".search-button").click(requestApiData);
});

function requestApiData(){
	event.preventDefault();
	$.get(buildURL(),function(data){
		refreshTable(data.items);
	});
}

function refreshTable(items){
	clearTable();
	for (var i = 0; i < items.length; i++) {
		if(scoreFilter(items[i].score)){
			createNewLine(items[i].title,items[i].owner.display_name,items[i].score,items[i].owner.link,items[i].link);	
		}
	}
	scrollToResult();
}