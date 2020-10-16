


import React from 'react';

import { Container, Button, Image, Form, InputGroup, Accordion, Card } from 'react-bootstrap';
import Achievement from '../../logic/Achievement';
import ajaxCall from '../../logic/ajaxCall';

import Styles from '../../styles';
import DataTable from '../DataTable';
import DataForm from '../Form';

export default function Profile(props) {
    const ajax = new ajaxCall();
    const now = new Date().toISOString().slice(0, 10);

    const [loaded, setLoaded] = React.useState(false);
    const [achievements, setAchievements] = React.useState([]);

    React.useEffect(() => {
        if (!loaded) {
            ajax.get('achievements', props.data.aId).then(res => {
                setAchievements(res);
                setLoaded(true);
            });
        }
    });

    // Add achievement
    function addAchievement(a) {
        a.aId = props.data.aId;
        ajax.post('achievements', a).then(res => {
            setLoaded(false);
        });
    }
    // Delete achievement
    function deleteAchievement(a) {
        const id = a.acId;
        ajax.delete('achievements', a, id).then(result => {
            console.log(result);
            setLoaded(false);
        });
    }

    // Change profile image
    function changeProfileImage(event) {
        event.preventDefault();
        const url = event.target.parentNode.parentNode.children[0].value;
        const id = props.data.aId;
        const a = { imgUrl: url }
        ajax.put('athletes/img', a, id).then(result => {
            console.log(result);
        });
    }

    return (
        <Container style={Styles.DataFormStyle}>
            <h3>Achievements : {props.data.firstNames} <b>{props.data.lastName}</b></h3>

            {props.data.imgUrl &&
                <Image thumbnail style={Styles.ProfileImgage} alt="athleteimg" src={props.data.imgUrl} />            
            }

            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1" style={{textAlign: 'left'}}>
                            Athlete's imgage url
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <InputGroup style={{padding: '20px'}}>
                            <Form.Control defaultValue={props.data.imgUrl} placeholder="Enter athlete's image url..." />
                            <InputGroup.Append>
                                <Button onClick={(event) => changeProfileImage(event)}>save</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="2" style={{textAlign: 'left'}}>
                            Add a new achievement
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                        <DataForm
                            onSubmit={addAchievement}
                            dataType={Achievement}
                            close={() => {}}
                            fields={[
                                {label: 'aId', key: 'aId', type: '', hide: true},
                                {label: 'Name', key: 'name', type: ''},
                                {label: 'Date', key: 'achDate', type: '', defaultValue: now}
                            ]}
                            hideClose={true}
                        >
                            <DataForm.Title>Add new achievement</DataForm.Title>
                        </DataForm>
                    </Accordion.Collapse>
                </Card>
            </Accordion>

                <br/>


            <DataTable
                sort={() => {}}
                headers={['#', 'Name', 'Date', 'Delete']}
                data={achievements}
                keys={['name', 'achDate']}
                format={[
                    {key: 'achDate', action: (v) => new Date(v).toISOString().slice(0, 4)}
                ]}
                buttons={[
                    { action: deleteAchievement, name: 'delete', variant: 'danger' }
                ]}
            >

            </DataTable>

                <br/>


            <Button onClick={props.close}>Close</Button>
        </Container>
    );
}
