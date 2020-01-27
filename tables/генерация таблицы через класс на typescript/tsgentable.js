//let i = 0; let t = 5; let str: string = 'row';
//https://winnote.ru/security/160-windows-powershell.-vypolnenie-scenariev-otklyucheno-v-etoy-sisteme.html
//показ переменной
var a = 5;
function show() {
    alert(a);
}
//функция и класс для приветствия пользователя
var hiUser = /** @class */ (function () {
    function hiUser(userName) {
        this.userName = userName;
    }
    hiUser.prototype.sayHi = function () {
        alert('hello' + this.userName);
    };
    return hiUser;
}());
function helloUser() {
    var usName = "Serg";
    var hello = new hiUser(usName);
    hello.sayHi();
}
var deck = [
    { age: 25, name: 'Serg', sex: 'men' },
    { age: 19, name: 'Liza', sex: 'woman' },
    { age: 27, name: 'Ivan', sex: 'men' },
    { age: 23, name: 'Anna', sex: 'woman' }
];
//класс с функцией для создания таблицы
var Table_from_obj = /** @class */ (function () {
    function Table_from_obj(arr_name) {
        this.arr_name = arr_name;
    }
    Table_from_obj.prototype.showCell = function () {
        var dek = this.arr_name[0];
        alert(dek.name);
    };
    Table_from_obj.prototype.createTable = function () {
        var arr_nam = this.arr_name;
        //функция для создания шапки таблицы 
        function table_head_obj_1() {
            var body_str = '';
            for (var key in arr_nam[0]) {
                body_str += "<th>" + key + "</th>";
            }
            return "<table>\n                      <thead>\n                          <tr>\n                            " + body_str + "\n                          </tr>\n                      </thead>\n                   </table>";
        }
        ;
        var table_head_obj_f = table_head_obj_1();
        //функция для вывода на экран шапки таблицы
        (function table_head_obj() {
            var tab = document.querySelector('.table');
            tab.innerHTML = table_head_obj_f;
        }());
        //функция для создания тела таблицы
        function table_body_obj_1() {
            var body_str = '';
            for (var k = 0; k < arr_nam.length; k++) {
                var body_cell = '';
                for (var key in arr_nam[k]) {
                    var cell = JSON.stringify(arr_nam[k][key]);
                    body_cell += "<td>" + cell + "</td>";
                }
                body_str += "<tr>\n                           " + body_cell + "\n                      </tr>";
            }
            ;
            return "<tbody>" + body_str + "</tbody>";
        }
        var table_body_obj_f = table_body_obj_1();
        //функция для вывода на экран тела таблицы
        (function table_body_obj() {
            try {
                var tab = document.querySelector('table');
                tab.innerHTML += table_body_obj_f;
            }
            catch (e) {
                alert("нет заголовка таблицы");
            }
            ;
        }());
    };
    ;
    return Table_from_obj;
}());
;
function table_obj() {
    var tab = new Table_from_obj(deck);
    tab.createTable();
}
