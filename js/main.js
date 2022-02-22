// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
// Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным
a = [[1, 2, 3], [4, 5], [6]];
let b = [];
let sum = a.flat().reduce((a, b) => a + b, 0);
console.log('Первое задание:\nДан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].Найдите сумму элементов этого массива.\n')
console.log(sum)


// Создайте объект User c полями firstName, lastName, year(год рождения)
// Реализуйте геттер, который возвращает полное имя пользователя
// Реализутей геттер age на основе года рождения пользователя
// Создайте массив из 10 пользователей
// Добавьте возможность вывода пользователей старше определенного возраста n, упорядоченых в алфовитном порядке в обратном направлении
// Добавьте возможность удаления пользователей младше определенного возраста n
// function Users(){
//     this.users = [];
//     this.add = function(user){
//         this.users.push(user)
//     }
//     this.moreThan = function(){
//         return this.year.filter( (a) => a > this.year);
//     }
// }
function User(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    
    
    
}

const user = new User('Dmitry', 'Kozyrev', 2004)
const user3 = new User('Nikolay', 'lastname1', 1993)
const user2 = new User('Sergey', 'lastname2', 2005)
const user5 = new User('Nikita', 'lastname3', 2019)
const user4 = new User('Andrey', 'lastname4', 2007)

const users = [user,user3,user2,user5,user4]
// const public = new Users();
// public.add(user);
// public.add(user2);
// public.add(user3);
// public.add(user4);
// public.add(user5);

Object.defineProperty(User.prototype, 'firstName', {
    get: function() {
        return this.firstName
    },
    set: function(value) {
        this.firstName = value;
    }
});

Object.defineProperty(User.prototype, 'age', {
    get: function() {
        return 2022 - this.year
    },
    
});

Object.defineProperty(User.prototype, 'lastName', {
    get: function() {
        return this.lastName
    },
    set: function(value) {
        this.firstName = value;
    }
});

Object.defineProperty(User.prototype, 'year', {
    get: function() {
        return this.year
    },
    set: function(value) {
        this.firstName = value;
    }
});

console.log(user4.firstName + '',user4.lastName)
console.log(user4.age)

filteredUsers = users.filter( user => user.age > 15)
console.log(filteredUsers)


requiredAge = 13
users.forEach( (element,index) => {
    if ( element.age < requiredAge ){
        delete users[index]
    }
})
console.log('\nЮзеры которые не меньше указанного возраста, были удалены',users)


// Создайте объект shape и его наследников circle, rectangle.

// Oбъект shape содержит метод draw()(выводит название фигуры и ее цвет) и переменную хранящую цвет.
// Oбъект rectangle содержит свойство хранящее длины двух его сторон
// Oбъект circle содержит свойство radius
// Oбъекты circle, rectangle содержат координаты точек.
// Создать массив содержащий эти фигуры.
// В цикле нарисовать их (вызвать метод draw).

let shape = {
    draw(){
        console.log("draw's name")
        console.log('color')
    }
};

let rectangle = {
    x = 13,
    y = 14,
};

let circle = {
    radius = 6,
};

rectangle.__proto__ = shape;
console.log(rectangle.draw)

let shapes = [shape, rectangle, circle]