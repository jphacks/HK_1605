document.addEventListener ("deviceready", onDeviceReady, false);
var imageurl;

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
		var image = document.getElementById ('picture');
		image.src = "data:image/jpeg;base64," + imageData;
		//send_png(imageData);
		//alert(encode);
		//var target = document.getElementById("textArea");
		//target.value = makeSmall(imageData);
		imageurl = makeSmall(imageData);
		//send_png(imageurl);
		//alert(smallurl);
		myNavigator.pushPage("edit.html",{imageurl:imageurl});
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
	decode.src = imageurl;
	//document.getElementById("textArea").value = codelist[0].code;
	modal.hide();
}

function makeSmall(data) {
  // 画像データの縦横サイズを取得する
  var image = document.createElement("img");
  image.src = "data:image/jpeg;base64," + data;
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
