


import React from 'react';

import Styles from '../../Styles';
import { Container, Jumbotron } from 'react-bootstrap';

const title = 'Web-ohjelmointi kurssi 2020';
const desc = 'Web-ohjelmointi, LTD7003-LTA20V1, syksy 2020';

export default function Home() {

    return (
        <Container style={Styles.content}>
            <Jumbotron style={Styles.jumbotron}>
                <h3>{title}</h3>
                <p>{desc}</p>
            </Jumbotron>
            <Container style={Styles.contentWrapper}>
                GitHub: <a href="https://github.com/maici95/WebOhj">https://github.com/maici95/WebOhj</a>
                <br/>
                DevBlog: <a href="https://hackmd.io/rnKF2ZXSTeCAGiDuknVtSw?view">https://hackmd.io/rnKF2ZXSTeCAGiDuknVtSw?view</a>
            </Container>
        </Container>
    );
}
