// $(document).ready(function(){
// 	$(document).
// });

// ScrollTop= (function(){
// 	var $top_btn= $(".scroll-top");
// });

window.onload = function(){
	var topBtn = document.getElementById("scroll-top");
	var timer = null;
	var pageHeight = document.documentElement.clientHeight;


	window.onscroll = function(){
		var backTop = document.body.scrollTop;
		if(backTop >= pageHeight){
			topBtn.style.display="block";
		}else{
			topBtn.style.display="none";
		}
	};

	topBtn.onclick = function(){
		timer = setInterval(function(){
			var backTop = document.body.scrollTop;
			var speedTop = backTop/5;
			document.body.scrollTop = backTop - speedTop;
			if(backTop == 0){
				clearInterval(timer);
			}
		}, 30);
	};
};