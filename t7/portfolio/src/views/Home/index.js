


import React from 'react';

import Styles from '../../Styles';
import { Container, Jumbotron } from 'react-bootstrap';

export default function Home() {

    return (
        <Container style={Styles.content}>
            <Jumbotron>
                <h1>Web-ohjelmointi kurssi 2020</h1>

                <h1 style={{color: 'red'}}>Toteutus hieman keskeneräinen -- Jatkuu mikäli tarkistus ei ole tapahtunut samantien deadlinin jälkeen</h1>
                <p>
                Muodosta selkeä sivuston rakenne (layout), jossa on mahdollista navigoida aiemmin toteuttamiesi tehtävien sisällä. Käytä layoutin toteuttamiseen erityisesti Bootstrap-komponentteja (kts. https://startbootstrap.com/). Voit käyttää portfoliossasi valmiita Bootstrap templateja, esim. https://github.com/BlackrockDigital/startbootstrap-freelancer
Mainitse valmiin layoutin käyttämisestä raportissa ja portfoliossasi.

<br/> <br/>

Muodosta jokaisesta palauttamastasi tehtävästä selkeä kuvaus. Portfoliossa tavallaan esittelet tekemäsi asiat jollekin henkilölle.
mitä teit, 
miten teit, 
miksi teit, 
mitä opit, 
mitä jäi vielä oppimatta,
sekä erityisesti: miten mielestäsi onnistuit tässä tehtävässä ja mitä tekisit nyt toisin (jos mitään)?
<br/> <br/>

Lisää portfolioon palauteosio, jossa kerrot tiivistetysti tällä kurssilla oppimasi asiat.
Vertaa siis tietojasi / taitojasi lähtötilanteessa (1.9.) suhteessa tämän päivän tieto-/taitotasoon.
Pohdi myös ajankäyttöäsi suhteessa kurssin laajuuteen 5 op (= 133 tuntia opiskelijan työtä).
Kerro mitkä asiat tukivat oppimistasi ja mitkä kenties häiritsivät sitä.
Saitko riittävästi ohjausta / apua ja tulitko kuulluksi kurssin aikana? Tulitko pyytäneeksi apua / keskustelleeksi kurssin asioista?
Mitkä olivat kurssin kohokohdat ja mitä jäit kaipaamaan?
Muistelun oheen voit myös kirjata mahdolliset tulevaisuuden suunnitelmasi web-ohjelmointiin liittyen: oletko aikeissa jatkaa tämän aiheen parissa muilla kursseilla, itsenäisesti tai kenties tulevassa työssäsi.
Voit viitata portfoliossa opintojakson aikana luomaasi blogiin.
 

Optio: voit portfolion yhteydessä täydentää aiemmin palauttamaasi tehtävää. Tällöin kirjaat portfolioon jokaisen täydentämäsi tehtävän kohdalle aiemman tehtävän puutteet, sekä tehtävään täydentämäsi asiat. Täydennettävät asiat esimerkiksi ohjelmakoodi ja/tai raportti/blogi tulee täydentää myös gitlabiin/githubiin (=ohjelmakoodi) ja hackmd.io-palveluun (raportti) uudelleenarviointia varten.
                </p>
            </Jumbotron>
        </Container>
    );
}
