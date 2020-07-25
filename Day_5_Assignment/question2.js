

class User{
    constructor(name, age, email){
        this.name = name;
        this.age = age;
        this.email = email;
        this.coins = 0;
        this.courses =[];
    }

    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }

    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
}



let user1 = new User('Aayush','21','a@gmail.com');
let user2 = new User('Rio','21','r@gmail.com');

user1.login().logout();


class Moderator extends User{
    addCoins(User){
        User.coins++;
    }
    removeCoins(User){
        User.coins--;
    }
}


let moderator = new Moderator('Kame','20','k@gmail.com');

moderator.addCoins(user1);
console.log(user1);

class Admin extends Moderator{
    addCourse(User, co){
        User.courses.push(co);
        console.log(User);
    }

    removeCourse(User, co){
        User.courses.pop(co);
        console.log(User);
    }
}

let admin = new Admin('Abhishek','19','ad@SpeechGrammarList.com');

admin.addCourse(user1,'Java');
admin.addCourse(user2,'JavaScript')
console.log(user1);
console.log(user2);