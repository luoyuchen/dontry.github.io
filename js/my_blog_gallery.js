$(document).ready(function($) {
	/*var dataImg = {"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"3.jpg"},{"src":"4.jpg"},{"src":"5.jpg"},{"src":"6.jpg"},{"src":"7.jpg"},{"src":"8.jpg"}]};
	  $(window).on("load",function(){
	$.each(dataImg.data,function(index,value){
			var box = $('<div>').addClass('box').appendTo('.gallery-container');
			console.log(box);
			var content = $('<div>').addClass('img_content').appendTo(box);			
			$('<img>').attr('src','images/'+$(value).attr('src')).appendTo(content);
			//$('img').css('width',box_width);
		});	
		
	});*/
	$(window).on("load",function(){
		placeImg("e:\web design\projects\bootstrap blog\images\pic");
		imgWaterFall();
	});
});


function imgWaterFall(){
	var box = $(".box");		
	
	var col_num = Math.floor($(".gallery-container").width()/box.eq(0).width());
	//console.log("box_width:"+box_width);
	console.log("gallery-container_width:"+$('.gallery-container').width());
	var boxArr = [];

	box.each(function(index, val) {
		 /* iterate through array or object */
		console.log(index+"--"+val);
		var box_height =  box.eq(index).height();

		 if(index < col_num){
		 	boxArr[index] = box_height;
		 	console.log("boxHeight:"+box_height);
		 }
		 else{
		 	var minBoxHeight = Math.min.apply(null, boxArr);
		 	console.log('minBoxHeight:'+minBoxHeight);
		 	var idx_min = $.inArray(minBoxHeight, boxArr);
		 	$(val).css({
		 		'position':'absolute',
		 		'top': minBoxHeight,
		 		'left': box.eq(idx_min).position().left
		 	});
		 	boxArr[idx_min] += box.eq(index).height();
		 	console.log(idx_min+"  "+boxArr[idx_min]);
		 }
	});
}


function listall( infd)  {    
//fdd:     
    var fd=fso.GetFolder(infd+"\\");//这里的变量一定要用var  申明     
    var fe=   new   Enumerator(fd.files); //这里的变量一定要用var  申明   
    while(!fe.atEnd())   {        
        var src="<div class=\"box\"><div class=\"img_content\"><img src=\""+fe.item()+"\"/></div></div>";  
        console.log(src);
        //document.write(src);  
        //document.write("<br>");       
        fe.moveNext();   
    }     
} 
           


function placeImg(str_location){
var fso = new   ActiveXobject("scripting.FileSystemobject");  
listall(str_location);     
//var curPath=location.href;    
//curPath=curPath.substr(8,curPath.length-16);    
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         );  
//listall(curPath);
}


