// JavaScript Document

//btnというIdを持つHTML要素を取得し、定数に代入する

const Btn = document.getElementById('btn');

const text0 = document.getElementById('text0');

text0.style.display= 'none';
//HTM要素がクリックするときにイベント処理を実行する

Btn.addEventListener('click',() =>{
	const text = document.getElementById('text');
	
	 text.style.display = 'none';
	 text0.style.display = 'block';
	
});