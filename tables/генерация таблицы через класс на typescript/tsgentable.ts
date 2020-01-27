//let i = 0; let t = 5; let str: string = 'row';
//https://winnote.ru/security/160-windows-powershell.-vypolnenie-scenariev-otklyucheno-v-etoy-sisteme.html

//показ переменной
let a:number = 5;
function show():void {
	alert(a);
}

//функция и класс для приветствия пользователя
class hiUser {
    
    constructor(public userName:string){ 
    }
    
    sayHi():void{
      alert('hello' + this.userName);
    }
   }

   function helloUser():void{
    let usName:string = "Serg";
    let hello = new hiUser(usName); 
    hello.sayHi();
   }

//массив объектов для таблицы
type Deck = {age:number|string, name:string, sex:string};
let deck:Deck[] = [
    {age:25, name:'Serg', sex:'men'},
    {age:19, name:'Liza', sex:'woman'},
    {age:27, name:'Ivan', sex:'men'},
    {age:23, name:'Anna', sex:'woman'}
    ];

//класс с функцией для создания таблицы
class Table_from_obj {
	
        constructor(public arr_name:Deck[]) {}
          
        showCell():void{
         let dek:Deck = this.arr_name[0];
         alert(dek.name);
        }
          
        createTable(){
         
          let arr_nam:Deck[] = this.arr_name;
          
          //функция для создания шапки таблицы 
          function table_head_obj_1():string{
              
              let body_str:string = '';
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
          (function table_head_obj():void{
           let tab:Element | null = document.querySelector<HTMLInputElement>('.table');
           tab.innerHTML = table_head_obj_f;
          }());
      
        //функция для создания тела таблицы
          function table_body_obj_1():string{
              let body_str:string = '';
              for (let k:number = 0; k < arr_nam.length; k++) {
                  let body_cell:string = '';
                  for (let key in arr_nam[k]){
                      let cell:string = JSON.stringify(arr_nam[k][key]);
                      body_cell += `<td>${cell}</td>`
                  }
                  body_str += `<tr>
                           ${body_cell}
                      </tr>`;
              };
              return `<tbody>${body_str}</tbody>`;
          }
      
          let table_body_obj_f:string = table_body_obj_1();
            
          //функция для вывода на экран тела таблицы
          (function table_body_obj():void{
          try {let tab: HTMLTableElement | null = document.querySelector('table');
          tab.innerHTML += table_body_obj_f;}
          catch (e) {alert("нет заголовка таблицы")};
          }());
        };	
      };

      function table_obj():void{
        let tab = new Table_from_obj(deck);
        tab.createTable();
       }

