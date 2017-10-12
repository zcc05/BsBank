/**
 * Created by Cheng on 2016/7/5.
 */
$(function () {
    var img = 0;
    $(".nextarrowL").on("click", function () {
        if (img >= 3) {
            $(".slidescreen2")[0].style.left = 0;
            img = 0;
        }
        img++;
        var target = -img * 290;
        $(".slidescreen2").stop().animate({"left": target}, 500)
    })
    $(".nextarrowR").on("click", function () {
        if (img == 0) {
            $(".slidescreen2")[0].style.left = -900 + "px";
            img = 3;
        }
        img--;
        var target = -img * 290;
        $(".slidescreen2").stop().animate({"left": target}, 500)
    })



    window.onload=function(){
        var sure = document.getElementById('sure');
        sure.onclick = function () {
            window.location.href = '../psw/enterPassword2.html';
        }
    }


})