var coachesOn = function(that){
	$(".coaches-inner .coach").removeClass("active");
	$(that).removeClass("passive").addClass("active");
	var person = $(that).attr("id").replace("coach-", "");
	switch (person)
	{
		case "alena":
			$(that).css("width", "50%");
	    $(".coaches-inner #coach-matthew").addClass("passive").css({
	      left: "50%",
	      width: "25%"
	    });
	    $(".coaches-inner #coach-dima").addClass("passive").css({
	      width: "25%"
	    });
			break;
		case "matthew":
			$(that).css({
	      left: "25%",
	      width: "50%"
	    });
	    $(".coaches-inner #coach-alena").addClass("passive").css({
	      width: "25%"
	    });
	    $(".coaches-inner #coach-dima").addClass("passive").css({
	      width: "25%"
	    });
			break;
		case "dima":
			$(that).css("width", "50%");
	    $(".coaches-inner #coach-matthew").addClass("passive").css({
	      left: "25%",
	      width: "25%"
	    });
	    $(".coaches-inner #coach-alena").addClass("passive").css({
	      width: "25%"
	    });
			break;
	}
};

var coachesOut = function(){
	$(".coaches-inner .coach").removeClass("active").removeClass("passive").css("width", "34%");
  $(".coaches-inner #coach-matthew").css("left", "33%");
};
