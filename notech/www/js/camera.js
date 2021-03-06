$(document).on('pageinit', '#home_page', function(){
	modal.show();
	socket.emit("list");
	//alert("sleep 2 seconds");
	setTimeout(function () {
	    socket.on("list_back", function(data){
	        codelist = data;
	        decoding();
	    });
	}, 500);
});

document.addEventListener ("deviceready", onDeviceReady, false);
var imageurl;
var course;

//This function is executed when Cordova loading completed.
function onDeviceReady () {
//	window.alert ('Loading Cordova is completed、Camera is now ready to be used.');
}

function snapPicture () {
	navigator.camera.getPicture (onSuccess, onFail,
		{ quality: 100,
		  destinationType: Camera.DestinationType.DATA_URL,
		  saveToPhotoAlbum:true,
		  correctOrientation:true,
		  allowEdit:false,
	      encodingType:0});


	//A callback function when snapping picture is success.
	function onSuccess (imageData) {
		//var image = document.getElementById ('picture');
		//image.src = "data:image/jpeg;base64," + imageData;
		//send_png(imageData);
		//alert(encode);
		//var target = document.getElementById("textArea");
		//target.value = makeSmall(imageData);
		imageurl = "data:image/jpeg;base64,"+imageData;
		//send_png(imageurl);
		//alert(smallurl);
		myNavigator.pushPage("edit.html");
	}

	//A callback function when snapping picture is fail.
	function onFail (message) {
		alert ('Error occured: ' + message);
	}
}

function decoding(){
	var decode = document.getElementById("decode");
	document.getElementById("img0").src = codelist[0].code;
	document.getElementById("img1").src = codelist[1].code;
	document.getElementById("img2").src = codelist[2].code;
	document.getElementById("img3").src = codelist[3].code;
	document.getElementById("img4").src = codelist[4].code;
	document.getElementById("img5").src = codelist[5].code;
	setcourse1(codelist[0].cource);
	setcourse2(codelist[1].cource);
	setcourse3(codelist[2].cource);
	setcourse4(codelist[3].cource);
	setcourse5(codelist[4].cource);
	setcourse6(codelist[5].cource);
	// document.getElementById("img0").src =  "1";
	// document.getElementById("img1").src =  "2";
	// document.getElementById("img2").src =  "3";
	// document.getElementById("img3").src =  "4";
	// document.getElementById("img4").src =  "5";
	// document.getElementById("img5").src =  "6";
	modal.hide();
}

function makeSmall(data) {
  // 画像データの縦横サイズを取得する
  var image = document.createElement("img");
  image.src = data;
  var width = image.naturalWidth;
  var height = image.naturalHeight;

  // 縮小する。今回は縦横それぞれ1/2
  var canvas = document.createElement("canvas");
  var n = 10;//ここは10
  canvas.width = width / n;
  canvas.height = height / n;
  canvas.getContext("2d").drawImage(image, 0, 0, width / n, height / n);

  // データURLにして返す。他にバイナリを返す toBlob() メソッドもあります。
  return canvas.toDataURL("image/jpeg", 1.0);
  // JPEG形式のほうが良い圧縮率が得られると思われます。
  // 第2引数は品質レベルで、0.0~1.0の間の数値です。高いほど高品質。
  // return canvas.toDataURL("image/jpeg", 0.5);
}

function goto_detail0() {
	imageurl = document.getElementById("img0").src;
	course = document.getElementById("n1").innerHTML;
	myNavigator.pushPage('detail.html');
}

function goto_detail1() {
	imageurl = document.getElementById("img1").src;
	course = document.getElementById("n2").innerHTML;
	myNavigator.pushPage('detail.html');
}

function goto_detail2() {
	imageurl = document.getElementById("img2").src;
	course = document.getElementById("n3").innerHTML;
	myNavigator.pushPage('detail.html');
}

function goto_detail3() {
	imageurl = document.getElementById("img3").src;
	course = document.getElementById("n4").innerHTML;
	myNavigator.pushPage('detail.html');
}

function goto_detail4() {
	imageurl = document.getElementById("img4").src;
	course = document.getElementById("n5").innerHTML;
	myNavigator.pushPage('detail.html');
}

function goto_detail5() {
	imageurl = document.getElementById("img5").src;
	course = document.getElementById("n6").innerHTML;
	myNavigator.pushPage('detail.html');
}

function setcourse1(index){
	var target = document.getElementById("n1");
	switch (index) {
		case 1:
			target.innerHTML = "線形代数学";
			break;
		case 2:
			target.innerHTML = "解析学";
			break;
		case 3:
			target.innerHTML = "データベース工学";
			break;
		case 4:
			target.innerHTML = "ネットワークセ...";
			break;
		case 5:
			target.innerHTML = "ハードウェア設計論";
			break;
		case 6:
			target.innerHTML = "OS";
			break;
		default:
			target.innerHTML = "不明";
			break;
	}
}

function setcourse2(index){
	var target = document.getElementById("n2");
	switch (index) {
		case 1:
			target.innerHTML = "線形代数学";
			break;
		case 2:
			target.innerHTML = "解析学";
			break;
		case 3:
			target.innerHTML = "データベース工学";
			break;
		case 4:
			target.innerHTML = "ネットワークセ...";
			break;
		case 5:
			target.innerHTML = "ハードウェア設計論";
			break;
		case 6:
			target.innerHTML = "OS";
			break;
		default:
			target.innerHTML = "不明";
			break;
	}
}

function setcourse3(index){
	var target = document.getElementById("n3");
	switch (index) {
		case 1:
			target.innerHTML = "線形代数学";
			break;
		case 2:
			target.innerHTML = "解析学";
			break;
		case 3:
			target.innerHTML = "データベース工学";
			break;
		case 4:
			target.innerHTML = "ネットワークセ...";
			break;
		case 5:
			target.innerHTML = "ハードウェア設計論";
			break;
		case 6:
			target.innerHTML = "OS";
			break;
		default:
			target.innerHTML = "不明";
			break;
	}
}

function setcourse4(index){
	var target = document.getElementById("n4");
	switch (index) {
		case 1:
			target.innerHTML = "線形代数学";
			break;
		case 2:
			target.innerHTML = "解析学";
			break;
		case 3:
			target.innerHTML = "データベース工学";
			break;
		case 4:
			target.innerHTML = "ネットワークセ...";
			break;
		case 5:
			target.innerHTML = "ハードウェア設計論";
			break;
		case 6:
			target.innerHTML = "OS";
			break;
		default:
			target.innerHTML = "不明";
			break;
	}
}

function setcourse5(index){
	var target = document.getElementById("n5");
	switch (index) {
		case 1:
			target.innerHTML = "線形代数学";
			break;
		case 2:
			target.innerHTML = "解析学";
			break;
		case 3:
			target.innerHTML = "データベース工学";
			break;
		case 4:
			target.innerHTML = "ネットワークセ...";
			break;
		case 5:
			target.innerHTML = "ハードウェア設計論";
			break;
		case 6:
			target.innerHTML = "OS";
			break;
		default:
			target.innerHTML = "不明";
			break;
	}
}

function setcourse6(index){
	var target = document.getElementById("n6");
	switch (index) {
		case 1:
			target.innerHTML = "線形代数学";
			break;
		case 2:
			target.innerHTML = "解析学";
			break;
		case 3:
			target.innerHTML = "データベース工学";
			break;
		case 4:
			target.innerHTML = "ネットワークセ...";
			break;
		case 5:
			target.innerHTML = "ハードウェア設計論";
			break;
		case 6:
			target.innerHTML = "OS";
			break;
		default:
			target.innerHTML = "不明";
			break;
	}
}
