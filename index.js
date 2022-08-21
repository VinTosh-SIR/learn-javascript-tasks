let value = true;
alert(typeof value); // boolean

value = String(value); // теперь value это строка "true"
alert(typeof value); // string

alert( "6" / "2" ); // 3, строки преобразуются в числа

let str = "123";
alert(typeof str); // string

let num = Number(str); // становится числом 123

alert(typeof num); // number

let age = Number("Любая строка вместо числа");

alert(age); // NaN, преобразование не удалось
