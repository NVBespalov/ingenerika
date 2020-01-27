//import {show} from './class_gentable.js';
//const {a} = require('@vkontakte/vk-qr')

function show(){
	alert(a);
}

let deck = [
{age:25, name:'Serg', sex:'men'},
{age:19, name:'Liza', sex:'woman'},
{age:27, name:'Ivan', sex:'men'},
{age:23, name:'Anna', sex:'woman'}
];

function helloUser(){
 let usName = "Serg";
 let hello = new hiUser(usName); 
 hello.sayHi();
}

function table_obj(){
 let tab = new Table_from_obj(deck);
 tab.createTable();
}

 //alert(tab.arr_name);
//import 'class_gentable.js';

/* function show(){
	alert(f);
};*/

//заданный объект
/* let deck = [
{age:25, name:'Serg', sex:'men'},
{age:19, name:'Liza', sex:'woman'},
{age:27, name:'Ivan', sex:'men'}
]; */

/* import {sayHi} from './sayHi.js';

alert(sayHi); // function...
sayHi('John'); // Hello, John! */