


import React from 'react';

import Styles from '../../Styles';
import { Container, Jumbotron } from 'react-bootstrap';

export default function About() {

    return (
        <Container style={Styles.content}>
            <Jumbotron style={Styles.jumbotron}>
                <h3>Kurssin yhteenveto</h3>
                <p>
                    Yhteenveto siitä, kuinka toimin kurssilla, mitä tein ja mitä tulevaisuudessa. Portfolio on rakennettu Reactilla, jossa
                    käytin React bootstrappia ja React routeria. Tiedon säilömiseen käytin JSON tiedostoja.
                </p>
            </Jumbotron>
            <Container style={Styles.contentWrapper}>
                <p>
                    Taitoni ja tietoni kurssin alussa verratuna tämän hetkisiin taitoihini ja tietoihini kurssin jälkeen
                    ei ole tullut suurta muutosta, sillä asiat olivat aikalailla entuudestaan jo tuttuja. Näin ollen varsinaisesti
                    uutta asiaa ei tarvinnut oppia tällä kurssilla. Sen sijaan toteutustapoja ja erilaisia oivalluksia syntyi matkan
                    varrella tehtäviä tehdessäni. Tämän mahdollisti se, että pystyin keskittämään suurimmanosan ajastani itse tehtävien
                    tekemiseen, miettimättä kuinka jokin asia käytännössä toteutetaan.
                </p>
                <p>
                    Kurssilla käyttämäni aika on hieman vaikea hahmottaa, sillä osa tehtävistä oli tehtynä hyvinkin nopeasti, kun
                    taas osaan tehtävistä käytin useita tunteja pelkästään lopputuloksen hiomiseen. Tämä lähinnä tehtävien ulkoasuun
                    liittyviin asioihin. Alkupään tehtäviin käytin suunnilleen muutaman tunnin yhteensä. Sen sijaan käytin huomattavasti
                    enemmän aikaa tehtäviin, jotka käsittelivät Reactia, sillä tämä oli yksi kurssin mielenkiintoisimmista asioita, sillä
                    pystyin laittamaan tietoni ja taitoni koetukselle näissä tehtävissä. Lopputulos näyttäisi ainakin olevan
                    kyseisissä tehtävissä melko hyvä. Karkea arvio kurssilla käyttämääni aikaan voisi olla noin 50 tuntia.
                </p>
                <p>
                    Kurssin aikana pystyin pysymään kiinni aikataulusta suurimmassa osassa tehtäviä, mutta joissa tehtävissä palautus
                    oli hieman myöhässä, sillä samaan aikaan kävin muita kursseja, jotka käsittelivät lähinnä pelien tekemistä, joissa
                    oli paljon uutta asiaa itselleni ja näin ollen kyseiset kurssit veivät huomattavasti enemmän aikaa, kuin tämä
                    kurssi. Sinänsä tästä ei koitunut häiriöntekijöitä kurssilla tehtyihin tehtäviin,
                    sillä alkutaso itselläni oli jo melko hyvä kurssin alussa. Näin ollen toteutin kurssin hyvin pitkälti itsenäisesti,
                    jolloin apua en tarvinnut pytää, sillä ongelmakohtia ei ilmennyt missään tehtävässä.
                </p>
                <p>
                    Omasta mielestäni kurssin tehtävät olisivat voineet olla kytkettynä täysin toisiinsa, eli jokaisella viikolla oltaisiin
                    rakennettu yksi osa isompaa kokonaisuutta. Näin ollen kurssin lopussa olisi ollut valmis järjestelmä, joka oli rakennettu
                    pienistä palasista kurssin edetessä. Tämä oli osittain, miten kurssi oli rakennettu, mutta sain ainakin itse sen
                    käsityksen, että osa tehtävistä oli ainoastaan harjoitusmielessä mukana kurssilla. Kurssin asioista React oli ylivoimaisesti
                    odotetuin asia, johon tuli panostettua huomattavasti enemmän aikaan, kuin muihin osioihin. Toki osaaminen Reactista oli
                    jo ennen kurssin alkua melko hyvä, joten React tehtävissä pystyin puhtaasti rakentamaan sovellusta sen sijaan, kun
                    olisin opiskellut suuriman osan ajasta ja toteuttanut sovelluksen niukalla aikataululla.
                </p>
                <p>
                    Viime kesä tuli käytettyä kokonaan Reactin ja NodeJS:än parissa, joka sytytti itsessäni kiinnostusta web-ohjelmointia kohtaan.
                    Mutta nyt käytyäni edistyneempiä pelinkehitys kursseja olen taas hieman hakoteillä siitä, kummasta alasta pidän enemmän.
                    Toisaalta on mahdollista, että päätyisin töihin, jossa molemmista suuntautumisista olisi hyötyä, jota ei ole todellakaan
                    vaikeaa kuvitella, sillä molempien suuntautumisien kurssit ovat avanneet uusia näkemyksiä ohjelmointiin nähden itselleni.
                    Joten se jää nähtäväksi, mitä tulen tulevaisuudessa tekemään, tosin voihan olla mahdollista, että tulen tekemään työtä
                    jonkinlaisena web-ohjelmoijana päivisin ja yöaikaan väsään pelejä. Mutta niin, kuin sanoin tämä jää nähtäväksi tulevaisuuteen.
                </p>
            </Container>
        </Container>
    );
}
