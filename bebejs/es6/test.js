'use strict';
//es6 function 블록 스코프 설정
const sentenses = [
	{subject: 'JavaScript', verb: 'is', object : 'great'},
	{subject: 'Elepants', verb: 'are', object : 'large'}	
];

//es6 function 객체 분해
function say({subject, verb, object}){
	// es6 기능 : 템플릿 문자열
	// 아래 사용한 것은 따옴표가 아니라 백틱(`), 즉
	// 키보드의 탭기 바로 위에 있는 문자입니다.
	console.log(`${subject} ${verb} ${object}`);
}
// es6 기능 : for, of
for(let s of sentenses){
	say(s);
}