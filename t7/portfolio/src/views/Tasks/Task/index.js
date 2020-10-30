


import React from 'react';

import { Button, Card, Image } from 'react-bootstrap';
import Styles from '../../../Styles';

export default function Task(props) {

    return (
        <Card style={Styles.card}>
            <Card.Img as={Image} variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button onClick={() => props.onClick()}>Take a look</Button>
            </Card.Body>
        </Card>
    );
}
