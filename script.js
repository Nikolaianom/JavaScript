do {var  name = prompt('Введите своё имя', 'Trevor')
}while( '') 

do {
  var old = +prompt('Введите год рождения')
}while(isNaN(old) || old == '')

do{
  var year = +prompt('Введите нынешний год')
}while( isNaN(year) || year == '' || year != 2022) {
  
}

function age(old, year) {
  return  year - old 
}
console.log(name + ' ваш возраст ' + age(old , year));


let exam = +prompt('Введите кол-во примеров')


function random(min, max) {
  let res = Math.floor(Math.random() * (max - min + 1) + min)
  return res
}
console.log(random(1, 50));
for(let i = 1; i <= exam; i++) {
    let num1 = random(1, 50)
    let num2 = random(1, 50)
    let que = +prompt(num1 + '+' + num2 + '= ?')
    console.log(  (num1 + num2) == que ? num1 + ' + ' + num2 + ' = ' + que + ' Верно ' : num1 + ' + ' + num2 + ' = ' + que + ' Не верно' + ' , правильный ответ ' + (num1 + num2)  )
}