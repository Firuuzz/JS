const users = new Map();
users.set('Андрей', ' класс Б');
users.set('Вика',' класс А')
users.set('Олег',' класс В')
users.set('Алексей',' класс Г')
for (let user of users.keys()){
    console.log(user + users.get(user));
}