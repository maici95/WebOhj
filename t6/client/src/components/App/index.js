


import React from 'react';

import DataTable from '../DataTable';

import { Container, Button } from 'react-bootstrap';
import DataForm from '../Form';
import ajaxCall from '../../logic/ajaxCall';

export default function App() {

    const ajax = new ajaxCall();

    const [data, setData] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [editOpen, setEditOpen] = React.useState(false);
    const [addOpen, setAddOpen] = React.useState(false);
    const [currentAthlete, setCurrentAthlete] = React.useState(null);

    // Fetch data
    React.useEffect(() => {
        if (!loaded) {
            ajax.get().then(res => {
                setData(res);
                setLoaded(true);
            })
        }
    }, [data, loaded, ajax]);

    function openEdit(a) {
        setEditOpen(true);
        setCurrentAthlete(a);
    }

    // Edit athlete
    function editAthlete(a) {

        ajax.put(a).then(res => {
            setEditOpen(false);
            setLoaded(false);
            console.log(res);
        });
    }

    // Delete athlete
    function deleteAthlete(a) {
        ajax.delete(a).then(res => {
            console.log(res);
            setLoaded(false);
        });
    }

    // Add new athlete
    function addAthlete(a) {
    
        ajax.post(a).then(res => {
            console.log(res);
            setAddOpen(false);
            setLoaded(false);

        });
    }

    return (
        <Container>
            <Button onClick={() => setAddOpen(true)}>New athelete</Button>
            {addOpen &&
                <DataForm
                    onSubmit={(event) => addAthlete(event)}
                    close={() => setEditOpen(false)}
                    fields={[
                        {label: 'First names', key: 'firstNames', type: 'text'},
                        {label: 'Last name', key: 'lastName', type: 'text'},
                        {label: 'YOB', key: 'yob', type: 'text', defaultValue: '1990-01-01' },
                        {label: 'Weight', key: 'weight', type: 'number', defaultValue: '80.5'},
                        {label: 'Sport', key: 'sport', type: 'text'}
                    ]}
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
                        {label: 'YOB', key: 'yob', type: 'text', defaultValue: currentAthlete.yob },
                        {label: 'Weight', key: 'weight', type: 'number', defaultValue: currentAthlete.weight },
                        {label: 'Sport', key: 'sport', type: 'text', defaultValue: currentAthlete.sport }
                    ]}
                >
                    <DataForm.Title>Edit athlete</DataForm.Title>
                </DataForm>
            }

            <DataTable
                headers={['#', 'First names', 'Last name', 'YOB', 'Weight', 'Sport', 'Edit', 'Remove']}
                data={data}
                keys={['firstNames', 'lastName', 'yob', 'weight', 'sport']}
                actions={[
                    { action: openEdit, name: 'edit' },
                    { action: deleteAthlete, name: 'remove' }
                ]}
            >
            </DataTable>
        </Container>
    );
}
