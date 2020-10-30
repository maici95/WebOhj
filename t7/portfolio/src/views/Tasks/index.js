


import React from 'react';

import Styles from '../../Styles';
import { Container } from 'react-bootstrap';
import Task from './Task';
import Title from '../../components/Content/Title';

import tasks from '../../Data/tasks.json';

export default function Tasks() {

    return (
        <Container style={Styles.content}>
            <Title>Kurssin viikkotehtävät</Title>
            <Container className="cards-container">
                {tasks.tasks.map((item, index) => {
                    return (
                        <Task
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            onClick={() => { alert('not yet') }}
                        />
                    );
                })}

            </Container>
        </Container>
    );
}
