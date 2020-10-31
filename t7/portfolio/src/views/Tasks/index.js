


import React from 'react';

import Styles from '../../Styles';
import { Container, Jumbotron } from 'react-bootstrap';
import Task from './Task';
//import Title from '../../components/Content/Title';



import tasks from '../../Data/tasks.json';

export default function Tasks() {

    return (
        <Container style={Styles.content}>
            <Jumbotron style={Styles.jumbotron}>
                <h3>Kurssin viikkotehtävät</h3>
                <p>
                    Kurssin tehtävät viikko viikolta
                </p>
            </Jumbotron>
            <Container className="cards-container" style={Styles.contentWrapper}>
                {tasks.tasks.map((item, index) => {
                    return (
                        <Task
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            to={`/test:${item.id}`}
                        />
                    );
                })}

            </Container>
        </Container>
    );
}
