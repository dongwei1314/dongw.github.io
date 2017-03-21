$(document).ready(function(){
        $(".l-pic-index").animate({'left':'8px'},1500);
        $(".r-pic-index").animate({'right':'9px'},1500);
        $(".l-bg-index").animate({'width':'432px','left':'73px'},1500);
        $(".r-bg-index").animate({'width':'432px','left':'504px'},1500,function(){
            $(".main-index").fadeIn(800);
        });
       $(".dwbtn").on("click",function () {
          var  index=$(".dwbtn").index($(this));
           $(".row .showbog").addClass("xiaoshi").eq(index).removeClass("xiaoshi")
       })

    });