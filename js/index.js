window.onload = function(){
	var projectUl = document.getElementById("project_ul");
	var projectLi = projectUl.getElementsByTagName("li");
	var projectImg = projectUl.getElementsByTagName("img");
	var projectA = projectUl.getElementsByTagName("a");

	var arrImg1 = ["img/h5_1.jpg","img/shop_1.jpg","img/php_1.jpg","img/pen_1.jpg","img/wechat_1.jpg","img/iphone_1.jpg"];
	var arrImg2 = ["img/h5_2.jpg","img/shop_2.jpg","img/php_2.jpg","img/pen_2.jpg","img/wechat_2.jpg","img/iphone_2.jpg"];
	for(var i=0;i<projectLi.length;i++){
		projectLi[i].index = i;
		projectLi[i].onmouseover = function(){
			projectImg[this.index].src = arrImg2[this.index];
			projectA[this.index].style.color = "#F36621";
		}
		projectLi[i].onmouseout = function(){
			projectImg[this.index].src = arrImg1[this.index];
			projectA[this.index].style.color = "#4B4B4B";
		}
	}

	var news = document.getElementById("news");
	var circle = document.getElementById("circle");
	news.onmouseover = function(){
		circle.style.transform = "translate(550px) rotate(1080deg)";
		circle.style.transition = "transform 2s linear";
	}
	news.onmouseout = function(){
		circle.style.transform = "translate(0) rotate(-1080deg)";
		circle.style.transition = "transform 2s linear";
	}
}