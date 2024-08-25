// JavaScript Document


//祝日一覧変数に代入
let holidayNames = ['正月','成人の日','建国記念日','天皇誕生日','春分の日','昭和の日','憲法記念日','みどりの日','こどもの日','海の日','山の日','敬老の日','秋分の日','スポーツの日','文化の日','勤労感謝の日'];
//変数の初期化
let i = 0;
//変数holidayNamesを出力し続ける
for(let i=0; i < holidayNames.length; i++){
	console.log(holidayNames[i]);
}
//変数holidayNamesが0以外である間、値を出力しつづける
while (i < holidayNames.length ){
	holidayNames = holidayNames.length;
	console.log(holidayNames[i]);
	i++;
}