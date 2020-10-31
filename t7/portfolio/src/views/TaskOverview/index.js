


import React from 'react';

import { Button, Container } from 'react-bootstrap';
import taskData from '../../Data/tasks.json';
import Styles from '../../Styles';

export default function TaskOverview(props) {



    const [task, setTask] = React.useState({});
    const [tasks, setTasks] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [id, setId] = React.useState(null);

    React.useEffect(() => {
        if (!loaded) {
            setId(window.location.href.split(':').reverse()[0]);
            setTasks(taskData.tasks);
            setLoaded(true);
        }

        setTask(tasks.find(item => parseInt(item.id) === parseInt(id)));

        // testing
        console.log(task);
    }, [id, loaded, task, tasks]);

    // Go to previous or next task
    function switchTask(dir) {
        const newIndex = parseInt(id) + parseInt(dir);

        if (newIndex < 0) {
            setId(tasks.length - 1);
        } else if (newIndex > tasks.length - 1) {
            setId(0);
        } else {
            setId(newIndex);
        }
    }

    return (
        <Container style={Styles.content}>
            <Button onClick={() => switchTask(-1)}>Previous</Button>
            <Button onClick={() => switchTask(1)} style={{float: 'right'}}>Next</Button>
            <br/><br/>

            {task &&
                <div>
                    {task.title}<br/>
                    {task.desc}<br/>
                </div>
            }

        </Container>
    );
}
