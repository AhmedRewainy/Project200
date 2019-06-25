

var style ;


if( localStorage.getItem("userStyle") == null )
	{
		style = {color:'black' , image:'images/2.jpg' , fontSize:'16px'}
	}
else
	{
		style =JSON.parse( localStorage.getItem("userStyle"));
	}


	$(".change").css("color",style.color)
	$("#home").css("backgroundImage","url(./"+style.image+")" )
	$("body").css("fontSize",style.fontSize)




$("#toggleBtn").click(function(){
	
	$("#options-box").toggle();
})

var colors = ["orange" , "green" , "gray" , "#09c" , "tomato"]

var lis = $("#options-box ul li");

for(var i=0;i<lis.length ;i++)
	{

		lis.eq(i).css("backgroundColor",colors[i])
	}


lis.click(function(){
	
	var bgColor = $(this).css("backgroundColor");
	
	style.color = bgColor;
	localStorage.setItem("userStyle", JSON.stringify( style) );
	
	
	$(".change , #profile i").css("color",bgColor)
})


$(".img-change").click(function(){

	var imgSrc = $(this).attr("src");
	
		
	style.image = imgSrc;
	localStorage.setItem("userStyle", JSON.stringify( style) );
	
	
	
	$("#home").css("backgroundImage","url(./"+imgSrc+")" )
})




$("#plus").click(function(){
	
	
	if($("body").css("fontSize") >= "30px" )
		{
			$("body").css("fontSize","30px")
			
		}
	else
		{
			$("body").css("fontSize","+=1")
		}
	
			
	style.fontSize = $("body").css("fontSize");
	localStorage.setItem("userStyle", JSON.stringify( style) );
	
	
})
$("#minus").click(function(){
	
	
	if($("body").css("fontSize") <= "10px" )
		{
			$("body").css("fontSize","10px")
			
		}
	else
		{
			$("body").css("fontSize","-=1")
		}
	
		style.fontSize = $("body").css("fontSize");
	localStorage.setItem("userStyle", JSON.stringify( style) );
	
	
	
})



















