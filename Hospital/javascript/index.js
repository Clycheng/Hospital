// 轮播图
var carousel = document.getElementsByClassName("carousel-inner")[0];
var item = carousel.getElementsByClassName("item");
var carouselIndicators = document.getElementsByClassName("carousel-indicators")[0];
var dots = document.getElementsByClassName("carousel-indicators")[0].getElementsByTagName("li");
console.log(dots);
var count = 0;
var timer;
function fun() {
    clearInterval(timer);
    timer = setInterval(function () {
         count ++;
    for(var i = 0; i < item.length; i ++) {
        item[i].className = "item";
            dots[i].className = "";
        }
        if( count == 4) count = 0;
        item[count].className = "item active";
        dots[count].className = "active";
    },3000); 
}
fun();
carouselIndicators.onmouseover = function() {
    clearInterval(timer);
};
carouselIndicators.onmouseout = function() {
    fun();
}


