


import React from 'react';

import { Button, Container } from 'react-bootstrap';
import taskData from '../../Data/tasks.json';
import textData from '../../Data/text.json';
import Styles from '../../Styles';

export default function TaskOverview(props) {


    const [task, setTask] = React.useState({});
    const [text, setText] = React.useState({});
    const [tasks, setTasks] = React.useState([]);
    const [texts, setTexts] = React.useState([]);
    const [loaded, setLoaded] = React.useState(false);
    const [id, setId] = React.useState(null);

    React.useEffect(() => {
        if (!loaded) {
            setId(window.location.href.split(':').reverse()[0]);
            setTasks(taskData.tasks);
            setTexts(textData.texts);
            setLoaded(true);
        }

        setTask(tasks.find(item => parseInt(item.id) === parseInt(id)));
        setText(texts.find(item => parseInt(item.id) === parseInt(id)));

        // testing
        console.log(task);

    }, [id, loaded, task, tasks, texts]);

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
            <Button variant="dark" onClick={() => switchTask(-1)}>Previous</Button>
            <Button variant="dark" onClick={() => switchTask(1)} style={{float: 'right'}}>Next</Button>
            <hr/><br/>

            {task &&
                <div>
                    <h3>{task.title}</h3>
                    <Container style={Styles.contentWrapper}>
                        <p>{task.desc}</p>
                        <b>GitHub:</b> <a href={task.link}>{task.link}</a>
                    </Container>

                    {text && text.parags && text.parags.length > 0 &&
                        text.parags.map((item, index) => {
                            return (
                                <Container key={index} style={Styles.contentWrapper}>
                                    <h5>{text.subTitles[index]}</h5>
                                    <hr/>
                                    {item.split('<br/>').map((text, index2) => {
                                        return (
                                            <p key={index2}>
                                                {text}
                                            </p>
                                        );
                                    })}
                                </Container>
                            );
                        })
                    }


                </div>
            }
        </Container>
    );
}
