// JavaScript Document

//btnを定数に代入する

const btnItem = document.getElementById('btn');
//textを定数に代入する
const textItem = document.getElementById('text');
//2秒の待ち時間を設定し、非同期処理を実行する
btnItem.addEventListener('click',() => {

setTimeout(() => {
	textItem.textContent = "ボタンをクリックしました";
	
},2000);

});
	