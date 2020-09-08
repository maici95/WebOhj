


const Person = require('./Person');


class Athlete extends Person {
    constructor(firstname, lastname, nickname, YOB, weight, sport, achievements) {
        super(firstname, lastname, nickname, YOB);
            this.weight = weight || 80;
            this.sport = sport || '';
            this.achievements = achievements || [];
    }

    getWeight() {
        return this.weight;
    }
    getSport() {
        return this.sport;
    }
    getAchievements() {
        return this.achievements;
    }

    setWeight(weight) {
        this.weight = weight;
    }
    setSport(sport) {
        this.sport = sport;
    }

    addAchievement(ach) {
        this.achievements.push(ach);
    }

}

module.exports = Athlete;
