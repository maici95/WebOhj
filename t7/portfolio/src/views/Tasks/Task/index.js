


import React from 'react';

import { Button, Card, Image } from 'react-bootstrap';
import Styles from '../../../Styles';

import { Link } from 'react-router-dom';

export default function Task(props) {

    return (
        <Card style={Styles.card}>
            <Card.Img as={Image} variant="top" src={props.img} style={Styles.cardImage} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.desc}</Card.Text>
                <Button as={Link} to={props.to}>Take a look</Button>
            </Card.Body>
        </Card>
    );
}
