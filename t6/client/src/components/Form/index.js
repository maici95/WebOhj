


import React from 'react';

import { Container, Form, Button } from 'react-bootstrap';
import Athlete from '../../logic/Athlete';

import Styles from '../../styles';

DataForm.Title = DataFormTitle;

export default function DataForm(props) {

    function onSubmit(event) {
        const values = [];
        [...event.target.parentNode.parentNode.children].find(item => {
            if (item.id === 'formFields') {
                    for (let i of [...item.children]) {
                        values.push(i.children[1].value);
                    }
            }
            return 0;
        });

        props.onSubmit(new Athlete(values));
    }

    return (
        <Container style={Styles.DataFormStyle}>
            <Form>
                {props.children}
                    <br/>
                <div id="formFields">
                    {props.fields.map((item, index) => {
                        return (
                            <Form.Group key={index}>
                                <Form.Label>{item.label}</Form.Label>
                                <Form.Control
                                    type={item.type}
                                    placeholder={'Enter ' + item.label + '...'}
                                    defaultValue={item.defaultValue}
                                />
                            </Form.Group>
                        );
                    })}
                </div>
                    <br/>
                <div style={Styles.ButtonGroupStyle}>
                    <Button onClick={(event) => onSubmit(event)} style={Styles.ButtonStyle}>
                        Send
                    </Button>
                    <Button onClick={() => props.close()} style={Styles.ButtonStyle}>
                        Close
                    </Button>
                </div>
            </Form>
        </Container>
    );
}

function DataFormTitle(props) {

    return (
        <h4>{props.children}</h4>
    );
}
