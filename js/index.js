











$(document).ready(function() 
	{console.log($(".st0"))
     var pathArray() = $("st0")

     $.each(pathArray, function (i, d) {
     	
     	var pathLength = d.getTotalLength()
     	console.log(pathLength)
     	$(d).css("stroke-dasharray", pathLength + " " + pathLength)
     	$(d).css("stroke-dashoffset", pathLength)

     })})


