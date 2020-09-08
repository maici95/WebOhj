


// Person class
class Person {
    constructor(firstname, lastname, nickname, YOB) {
        this.firstname = firstname || '';
        this.lastname = lastname || '';
        this.nickname = nickname || '';
        this.YOB = YOB || 2000;
    }

    getFirstname() {
        return this.firstname;
    }
    getLastname() {
        return this.lastname;
    }
    getNickname() {
        return this.nickname;
    }
    getYOB() {
        return this.YOB;
    }
    
    setFirstname(firstname) {
        this.firstname = firstname;
    }
    setLastname(lastname) {
        this.lastname = lastname;
    }
    setNickname(nickname) {
        this.nickname = nickname;
    }
    setYOB(YOB) {
        this.YOB = YOB;
    }

}

module.exports = Person;
