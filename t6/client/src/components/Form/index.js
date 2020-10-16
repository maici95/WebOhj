


import React from 'react';

import { Container, Form, Button } from 'react-bootstrap';

import Styles from '../../styles';

DataForm.Title = DataFormTitle;

export default function DataForm(props) {

    // Parse form data
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
        props.onSubmit(new props.dataType(values));
    }

    return (
        <Container style={Styles.DataFormStyle}>
            <Form>
                {props.children}
                    <br/>
                <div id="formFields">
                    {props.fields.map((item, index) => {
                        if (item.hide) {
                            return false;
                        }
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
                        Submit
                    </Button>
                    {!props.hideClose &&
                        <Button onClick={() => props.close()} style={Styles.ButtonStyle}>
                            Close
                        </Button>
                    }
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
