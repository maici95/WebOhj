


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../../views/Home';
import Tasks from '../../views/Tasks';
import About from '../../views/About';

import { Nav, Container } from 'react-bootstrap';
import Styles from '../../Styles';
import './style.css';

export default function Routing() {

    return (
        <Container>
            <Router>
                <Nav style={Styles.nav} defaultActiveKey="home">
                    <Nav.Link as={Link} to="/" eventKey="home">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/tasks" eventKey="tasks">
                        Tasks
                    </Nav.Link>
                    <Nav.Link as={Link} to="/about" eventKey="about">
                        About
                    </Nav.Link>
                </Nav>

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/tasks">
                        <Tasks />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}
