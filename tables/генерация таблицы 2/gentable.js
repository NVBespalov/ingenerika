//заданный массив
let arr = ['mary','jonn','mark','bob','ann','janet','glory'];
//заданный объект
let deck = [
{age:25, name:'Serg', sex:'men'},
{age:19, name:'Liza', sex:'woman'},
{age:27, name:'Ivan', sex:'men'}
];
//переменная с массивом приведенным к строке
let arr_str_f = arr_to_str();
//переменная с шапкой таблицы из массива
let table_head_f = table_head_1();
//переменная с телом таблицы из массива
let table_body_f = table_body_1();
//переменная с шапкой таблицы из объекта
let table_head_obj_f = table_head_obj_1();
//переменная с телом таблицы из объекта
let table_body_obj_f = table_body_obj_1();


//функция приведения массива к строке
function arr_to_str(){
 let arr_str = arr.join(", ");
 return arr_str;
};

//функция вывода строки с массивом на экран
function show_array(){
 let arr_sign = document.querySelector('.print_array');
 arr_sign.innerHTML = " " + arr_str_f;
}

//функция удаления строки с массиивом с экрана
function reset_array(){
 let arr_sign = document.querySelector('.print_array');
 arr_sign.innerHTML = "";
}

//ФУНКЦИИ СОЗДАНИЯ ТАБЛИЦЫ ИЗ МАССИВА
//функция для создания шапки таблицы 
	function table_head_1(){
	 return `<table>
				<thead>
					<tr>
					   <th>№</th>
					   <th>Имя</th>
					</tr>
				</thead>
			 </table>`
	}
	

 //функция для вывода на экран шапки таблицы
function table_head(){
 let tab = document.querySelector('.table');
 tab.innerHTML = table_head_f;
} 

//функция для создания тела таблицы
function table_body_1(){
	/* let body_str = '';
	for (i = 0; i < arr.length; i++) {
		body_str += `<tr>
                  <td>${i}</td>
                  <td>${arr[i]}</td>
            </tr>`;
	}; */
	let body_str = '';
	arr.forEach(function(v,i,a){
		body_str += `<tr>
                  <td>${i}</td>
                  <td>${v}</td>
            </tr>`;
	});
		return body_str;
	}
	
  
//функция для вывода на экран тела таблицы
function table_body(){
let tab = document.querySelector('table');
tab.innerHTML += table_body_f;
}

//ФУНКЦИИ СОЗДАНИЯ ТАБЛИЦЫ ИЗ МАССИВА ОБЪЕКТОВ
////функция для создания шапки таблицы 
function table_head_obj_1(){
	let body_str = '';
	for (key in deck[0]) {
		body_str += `<th>${key}</th>`;
	};
	return `<table>
			<thead>
                <tr>
                   ${body_str}
                </tr>
            </thead>
		 </table>`
}

//функция для вывода на экран шапки таблицы
function table_head_obj(){
 let tab = document.querySelector('.table');
 tab.innerHTML = table_head_obj_f;
}

//функция для создания тела таблицы
function table_body_obj_1(){
	let body_str = '';
	for (let k = 0; k < deck.length; k++) {
		body_cell = '';
		for (y in deck[k]){
			body_cell += `<td>${deck[k][y]}</td>`;
		}
		body_str += `<tr>
                 ${body_cell}
            </tr>`;
	};
	return `<tbody>${body_str}</tbody>`;
}	
  
//функция для вывода на экран тела таблицы
function table_body_obj(){
try {let tab = document.querySelector('table');
tab.innerHTML += table_body_obj_f;}
catch (e) {alert("нет заголовка таблицы")};
};

/*function drawTableBody(document) {
    return `<tr>
        <td>${document.id}</td>
        <td>${document.name}</td>
    </tr>`
}*/
