// ES6
import {funcB} from './sconde'

funcB();
//var는 함수단위 스코프
//let const 블록 단위 스코프를 가진다.
//let const
var name = 'GeonWoo'

let name1 = 'GeonWoo'    //지금까지 var로 썻던 것을 렛으로 바꾸면 된다

const level = 20;       //수정 불가 - > 상수인 것
level = 21;    //error 발생

//arrow function

// function funcA(callback){

// }

const funcA = ()=>{}  //콜백은 보통 에로우 펑션으로 바꾼다. 메서드에서는 기존 펑션을 사용한다.

// setTimeout(function(){

// }, 2000)

// setTimeout(() => {
    
// }, 2000);

// //class

function Person(name){
    this.name = name;


class Person{


    constructor(name){
        this.name = name;
    }
}
}

var jack = new Person('jack');
console.log(jack)


//spread

// var obj = {name:'acb', age:20};

// var name = obj.name;
// var age = obj.age;

// let {name, age} = obj;