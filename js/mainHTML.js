function basicButton_click(){
	var srcDiv = document.getElementById("Left");
	var targetDiv = document.getElementById("Right");
	var buttonValue = window.event.srcElement.innerText;
	var buttonClass = document.getElementsByClassName("basicButton");
	var imgClass = document.getElementsByClassName("liimg");
	var titleName = "<h1 class='Texth2'>" + buttonValue +"</h1>";
	var buttonDivLeft = "<div style='width: 200px;height: 300px;margin: 20px 0px 0px 20px;padding: 0px;float:left;'><div style='width: 200px;height: 290px;margin: 0px;padding: 0px;'><div style='width: 186px;height: 286px;margin: 0px;padding: 0px;border: 2px solid black;float: left;'>";
	var buttonDivRight = "</div><div style='width: 10px;height: 290px;margin: 0px;padding: 0px;float: left;'><div style='width: 10px;height: 10px;margin: 0px;padding: 0px;'></div><div style='width: 10px;height: 280px;background: gray;margin: 0px;padding: 0px;'></div></div></div><div style='width: 200px;height: 10px;margin: 0px;padding: 0px;'><div style='width: 10px;height: 10px;margin: 0px;padding: 0px;float: left;'></div><div style='width: 190px;height: 10px;background: gray;margin: 0px;padding: 0px;float: left;'></div></div></div>";
	//刷新左侧列表字体颜色
	for (var n = buttonClass.length - 1; n >= 0; n--) {
		buttonClass[n].style.color = "black";
		imgClass[n].src = "image/workBasic/lib0" + (n+1) + ".png";
	}
	//将被选中的列表的字体颜色改为 #2E9AFE
	window.event.srcElement.style.color = "white";
	//重设 Right Div 的背景为透明
	targetDiv.style.background = "transparent";
	//根据选择按钮呈现内容
	switch(buttonValue){
		case "杨青云作品" :
		//alert(imgClass[0].src);
		imgClass[0].src = "image/workBasic/li01.png";
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='twilightStars01_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/MapleStory-Button.png);'>暮色下的星辰 上</button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='twilightStars02_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/MapleStory-Button.png);'>暮色下的星辰 下</button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='lightHole_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/LightHole-Button.png);'>光核·隐月雪魂</button>" + buttonDivRight;
		break;
		case "楚放歌作品" :
		imgClass[1].src = "image/workBasic/li02.png";
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='wuyueHistory_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/WuyueHistory-Button.png);'>吴越春秋</button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='shortNovelCfg_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/ShortNovelCfg-Button.png);'>短篇合集</button>" + buttonDivRight;
		break;
		case "网络小说" :
		imgClass[2].src = "image/workBasic/li03.png";
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='odysseyOfKant_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/OdysseyOfKant-Button.png);'></button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='legendOfWukong_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/LegendOfWukong-Button.png);'></button>" + buttonDivRight;
		break;
		case "创意作品" :
		imgClass[3].src = "image/workBasic/li04.png";
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='sanGuoSha_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/WuyueHistory-Button.png);'>12班三国杀</button>" + buttonDivRight;
		break;
		case "摄影照片" :
		imgClass[4].src = "image/workBasic/li05.png";
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='photo01_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/Photo01-Button.png);'>一点札记</button>" + buttonDivRight;
		break;
		/*case "返回上一页" :
		srcDiv.innerHTML = "<p class='Texth3'>个人文章</p><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Xingzheng.png' alt='杨青云' />杨青云作品</button><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Yewu.png' alt='楚放歌' />楚放歌作品</button><p class='Texth3'>其他作品</p><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Ruanjian.png' alt='网络小说' />网络小说</button><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Zhinan.png' alt='创意作品' />创意作品</button><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Gengxin.png' alt='摄影照片' />摄影照片</button>";
		targetDiv.innerHTML = "<img src='image/workBasic/Background_Cygnus.png' style='margin-left:10px;width: 940px;height: auto;position: absolute;z-index: -1;'><p class='Texth2' style='margin: 380px 0px 5px 20px;'>欢迎光临</p><p class='Texth2' style='margin: 0px 0px 10px 20px;'>惜也阁</p><p class='Textp' style='margin: 5px 0px 5px 20px;'>本页面主要收录个人作品，并存档部分优秀小说。</p><p class='Textt' style='margin: 5px 0px 5px 20px;'>注意：本页面仅为个人收录使用，非盈利目的。若有任何诉求，请与 <a>yang021@outlook.com</a>联系。</p>";
		break;*/
		default :
		break;
	}
	/*此段代码已经用 switch 代替，留下仅供参考。
	if(buttonValue == "杨青云作品"){
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='twilightStars_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/MapleStory-Button.png);'>暮色下的星辰</button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='lightHole_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/LightHole-Button.png);'>光核·隐月雪魂</button></button>" + buttonDivRight;
	}
	if(buttonValue == "楚放歌作品"){
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='wuyueHistory_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/WuyueHistory-Button.png);'>吴越春秋</button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='shortNovelCfg_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:transparent;'>短篇合集</button>" + buttonDivRight;
	}
	if(buttonValue == "网络小说"){
		targetDiv.innerHTML = titleName + buttonDivLeft + "<button class='bookButton' onClick='odysseyOfKant_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/OdysseyOfKant-Button.png);'></button>" + buttonDivRight + buttonDivLeft + "<button class='bookButton' onClick='legendOfWukong_click()' onmouseover='changeBorder()' onmouseout='borderBack()' style='background:url(image/bookButton/LegendOfWukong-Button.png);'></button>" + buttonDivRight;
	}
	if(buttonValue == "返回上一页"){
		srcDiv.innerHTML = "<p class='Texth3'>个人文章</p><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Xingzheng.png' alt='杨青云' />杨青云作品</button><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Yewu.png' alt='楚放歌' />楚放歌作品</button><p class='Texth3'>其他作品</p><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Ruanjian.png' alt='网络小说' />网络小说</button><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Zhinan.png' alt='创意作品' />创意作品</button><button class='basicButton' onClick='basicButton_click()' onmouseover='changeColor()' onmouseout='colorBack()'><img class='liimg' src='image/workBasic/ShortCut-Gengxin.png' alt='摄影照片' />摄影照片</button>";
		targetDiv.innerHTML = "<img src='image/workBasic/Background_Cygnus.png' style='margin-left:10px;width: 940px;height: auto;position: absolute;z-index: -1;'><p class='Texth2' style='margin: 380px 0px 5px 20px;'>欢迎光临</p><p class='Texth2' style='margin: 0px 0px 10px 20px;'>惜也阁</p><p class='Textp' style='margin: 5px 0px 5px 20px;'>本页面主要收录个人作品，并存档部分优秀小说。</p><p class='Textt' style='margin: 5px 0px 5px 20px;'>注意：本页面仅为个人收录使用，非盈利目的。若有任何诉求，请与 <a>yang021@outlook.com</a>联系。</p>";
	}*/
}

function twilightStars01_click(){
	window.open("https://mp.weixin.qq.com/mp/homepage?__biz=MzA4Njg0NDg3OQ==&hid=5&sn=5168e68bb3af0c781971bb519d536399");
}

function twilightStars02_click(){
	window.open("https://mp.weixin.qq.com/mp/homepage?__biz=MzA4Njg0NDg3OQ==&hid=4&sn=b524b1c42f97d03f62f5534b69d3467a");
}

function wuyueHistory_click(){
	window.open("https://mp.weixin.qq.com/mp/homepage?__biz=MzA4Njg0NDg3OQ==&hid=2&sn=3f60e2ba389d197d91f7e811ab4f4db9");
}

function lightHole_click(){
	window.open("html/LightHole.html");
}

function shortNovelCfg_click(){
	window.open("html/shortStory_LiqiFeng.html");
}

function photo01_click(){
	window.open("https://mp.weixin.qq.com/s/RWMuVePfpmD7bP5ZNTskSw");
}

function changeColor(){
	var targetEle = window.event.srcElement;
	var i = String(targetEle.style.color);
	targetEle.style.background = "black";
	if (i == "rgb(46, 154, 254)") {
		targetEle.style.color = "white";
	}
	else {
		targetEle.style.color = "#BDBDBD";
	}
}

function colorBack(){
	var targetEle = window.event.srcElement;
	var i = String(targetEle.style.color);
	targetEle.style.background = "transparent";
	//alert(i);
	if (i == "rgb(46, 154, 254)") {
		targetEle.style.color = "#2E9AFE";
	}
	else {
		if (i == "white") {
			targetEle.style.color = "#2E9AFE";
		}
		else {
			targetEle.style.color = "black";
		}
	}
}