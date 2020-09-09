


const Person = require('./Person');


class Athlete extends Person {
    constructor(firstname, lastname, nickname, YOB, weight, sport, achievements, linkToImg) {
        super(firstname, lastname, nickname, YOB);
            this.weight = weight || 80;
            this.sport = sport || '';
            this.achievements = achievements || [];
            this.linkToImg = linkToImg || '';
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
    getLinkToImg() {
        return this.linkToImg;
    }

    setWeight(weight) {
        this.weight = weight;
    }
    setSport(sport) {
        this.sport = sport;
    }
    setLinkToImg(linkToImg) {
        this.linkToImg = linkToImg;
    }

    addAchievement(ach) {
        this.achievements.push(ach);
    }

}

module.exports = Athlete;
