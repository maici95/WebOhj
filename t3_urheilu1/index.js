


/*

Tehtävä: Urheilu 1

Kehitystehtävänä on määritellä olio-ohjelmointikielille
ominainen luokkamäärittely ja periytyminen JavaScript-kielellä.

Määrittele yliluokka Henkilo, joka sisältää ihmisen henkilötietoja:

etunimet,
sukunimi,
kutsumanimi,
syntymävuosi
Määrittele luokka Urheilija, joka perii Henkilo-luokan ja toteuttaa lisäksi
saantifunktiot (get- ja set-) Urheilija-luokalle merkityksellisiin attribuutteihin.
Lisää Urheilija luokkaan seuraavat ominaisuudet:

linkki kuvaan,
omapaino,
laji,
saavutukset.
Kirjoita nämä vaatimukset toteuttava koodi joka toimii node.js-tulkissa.

Toteuta koodi. Lisää koodiin esimerkkejä Urheilija –olioista.
Talleta toteutuksesi gitlab (tai github) -ympäristöön omaan projektiisi hakemistoon: Urheilu1
Kirjoita tehtävästä kommentointi ja huomioita kehittäjän blogiin (hackmd.io).
Voitte keskustella tehtävän suoritukseen liittyvistä asioista Slackissa -
älkää kuitenkaan antako valmiita vastauksia, vaan opastakaa ja ohjatkaa askeleittain eteenpäin.

 */
const Person = require('./Person');
const Athlete = require('./Athlete');

console.log(new Person('mike', 'scott', 'mic', new Date('1960')));

const ath = new Athlete('tom', 'scott', 'tommy', new Date('1970'), 85.5, 'tennis', []);
ath.addAchievement('US Open 2010');
ath.addAchievement('US Open 2011');
ath.setLinkToImg('http://www.google.com/images');

console.log(ath);

console.log(new Athlete('Rafael', 'Nadal', 'Rafa', new Date('1980'), 80, 'tennis', []));
console.log(new Athlete('Lewis', 'Hamilton', 'Lewis', new Date('1985'), 70, 'f1', [2014, 2015, 2017, 2018, 2019, 2020]));



