


import React from 'react';

import DataTable from '../DataTable';

import { Container, Button, Nav } from 'react-bootstrap';
import DataForm from '../Form';
import ajaxCall from '../../logic/ajaxCall';

import Styles from '../../styles';
import Profile from '../Profile';
import Athlete from '../../logic/Athlete';

export default function App() {

    const ajax = new ajaxCall();

    const [data, setData] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [addOpen, setAddOpen] = React.useState(false);
    const [currentAthlete, setCurrentAthlete] = React.useState(null);
    const [sortOrder, setSortOrder] = React.useState(1);
    const [profileOpen, setProfileOpen] = React.useState(false);

    // Fetch data
    React.useEffect(() => {
        if (!loaded) {
            ajax.get('athletes').then(res => {
                setData(res);
                setLoaded(true);
            });
        }
    });

    // Sort table
    function sortData(key) {
        console.log(key);
        if (key) {
            let sData = data.sort((a, b) => {
                if (a[key] < b[key]) {
                    return sortOrder;
                } else if (a[key] > b[key]) {
                    return sortOrder * -1;
                } else {
                    return sortOrder;
                }
            });
            setSortOrder(sortOrder * -1);
            setData([...sData]);
        }
    }

    // Open profile
    function openProfile(a) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setProfileOpen(true);
        setCurrentAthlete(a);
    }

    // Open edit form
    function openEdit(a) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setEditOpen(true);
        setCurrentAthlete(a);
    }

    // Edit athlete
    function editAthlete(a) {
        a.aId = currentAthlete.aId;
        ajax.put('athletes', a, a.aId).then(res => {
            setEditOpen(false);
            setLoaded(false);
        });
    }

    // Delete athlete
    function deleteAthlete(a) {
        ajax.delete('athletes', a, a.aId).then(res => {
            setLoaded(false);
        });
    }

    // Add new athlete
    function addAthlete(a) {
        ajax.post('athletes', a, a.aId).then(res => {
            setAddOpen(false);
            setLoaded(false);
        });
    }

    return (
        <Container>
            <Nav style={Styles.NavStyle}>
                <Nav.Item>
                    <Button onClick={() => setAddOpen(true)}>New athelete</Button>
                </Nav.Item>
            </Nav>
            {addOpen &&
                <DataForm
                    onSubmit={(event) => addAthlete(event)}
                    close={() => setAddOpen(false)}
                    fields={[
                        {label: 'First names', key: 'firstNames', type: 'text'},
                        {label: 'Last name', key: 'lastName', type: 'text'},
                        {label: 'Nickname', key: 'nickName', type: 'text'},
                        {label: 'YOB', key: 'yob', type: 'text', defaultValue: '1990-01-01' },
                        {label: 'Weight', key: 'weight', type: 'number', defaultValue: '80.5'},
                        {label: 'Sport', key: 'sport', type: 'text'}
                    ]}
                    dataType={Athlete}
                >
                    <DataForm.Title>Add new athlete</DataForm.Title>
                </DataForm>
            }
            {editOpen &&
                <DataForm
                    onSubmit={(event) => editAthlete(event)}
                    close={() => setEditOpen(false)}
                    fields={[
                        {label: 'First names', key: 'firstNames', type: 'text', defaultValue: currentAthlete.firstNames},
                        {label: 'Last name', key: 'lastName', type: 'text', defaultValue: currentAthlete.lastName},
                        {label: 'Nickname', key: 'nickName', type: 'text', defaultValues: currentAthlete.nickName},
                        {label: 'YOB', key: 'yob', type: 'text', defaultValue: currentAthlete.yob },
                        {label: 'Weight', key: 'weight', type: 'number', defaultValue: currentAthlete.weight },
                        {label: 'Sport', key: 'sport', type: 'text', defaultValue: currentAthlete.sport }
                    ]}
                    dataType={Athlete}
                >
                    <DataForm.Title>Edit athlete</DataForm.Title>
                </DataForm>
            }
            {profileOpen &&
                <Profile
                    data={currentAthlete}
                    close={() => setProfileOpen(false)}
                >
                </Profile>
            }

            <DataTable
                headers={['#', 'First names', 'Last name', 'Nickname', 'YOB', 'Weight', 'Sport', 'Edit', 'Profile', 'Remove']}
                data={data}
                sort={sortData}
                keys={['firstNames', 'lastName', 'nickName', 'yob', 'weight', 'sport']}
                format={[
                    {key: 'yob', action: (v) => new Date(v).toISOString().slice(0, 4)}
                ]}
                buttons={[
                    { action: openEdit, name: 'edit' },
                    { action: openProfile, name: 'show' },
                    { action: deleteAthlete, name: 'remove', variant: 'danger' }
                ]}
            >
            </DataTable>
        </Container>
    );
}
