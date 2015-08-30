$(function(){
	var x = 10;
	var y = 20;
	$(".jtooltip").on("click", function(){
		return false;
	})
	$(".jtooltip").mouseover(function(event){
		this.myTitle = this.title;
		this.title = "";
		var imgTitle = this.myTitle ? "<br/>" + this.myTitle : "";
		var tooltip = "<div id='tooltip'><img src='" + this.href + "' alt='heyhey'/>" + imgTitle + "</div>";
		$(this).append(tooltip);
		$("#tooltip")
			.css({
				"top": "-220px",
				"left": "-58px"
			}).show("slow");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).show;
});