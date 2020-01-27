'use strict';

//переменная для show
//const a = 5;
/* export function sayHi(user) {
  alert(`Hello, ${user}!`);
} */

let a = 5;

class hiUser {
 
 constructor(userName){
   this.userName = userName; 
 }
 
 sayHi(){
   alert('hello' + this.userName);
 }
}

class Table_from_obj {
	
  constructor(arr_name) {
		this.arr_name = arr_name;
	}
	
  showCell(){
   let dek = this.arr_name[0];
   alert(dek.name);
  }
	
  createTable(){
	/* for (let key in this.arr_name){alert(key)};
	} */
	//переменная с шапкой таблицы из объекта
	//let table_head_obj_f = table_head_obj_1();
	//переменная с телом таблицы из объекта
	//let table_body_obj_f = table_body_obj_1();
	let arr_nam = this.arr_name;
	
	//функция для создания шапки таблицы 
	function table_head_obj_1(){
		
	//alert(arr_nam[1].name);
		let body_str = '';
		for (let key in arr_nam[0]){
			body_str += `<th>${key}</th>`
		}
	 return `<table>
				<thead>
					<tr>
					  ${body_str}
					</tr>
				</thead>
			 </table>`
	};
	
	let table_head_obj_f = table_head_obj_1();

	//функция для вывода на экран шапки таблицы
	(function table_head_obj(){
	 let tab = document.querySelector('.table');
	 tab.innerHTML = table_head_obj_f;
	}());

	//функция для создания тела таблицы
	function table_body_obj_1(){
		let body_str = '';
		for (let k = 0; k < arr_nam.length; k++) {
			let body_cell = '';
			for (let key in arr_nam[k]){
				body_cell += `<td>${arr_nam[k][key]}</td>`
			}
			body_str += `<tr>
					 ${body_cell}
				</tr>`;
		};
		return `<tbody>${body_str}</tbody>`;
	}

	let table_body_obj_f = table_body_obj_1();
	  
	//функция для вывода на экран тела таблицы
	(function table_body_obj(){
	try {let tab = document.querySelector('table');
	tab.innerHTML += table_body_obj_f;}
	catch (e) {alert("нет заголовка таблицы")};
	}());
  };	
};