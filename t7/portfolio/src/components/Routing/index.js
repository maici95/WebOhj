


import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from '../../views/Home';
import Tasks from '../../views/Tasks';
import About from '../../views/About';
import TaskOverview from '../../views/TaskOverview';

import { Navbar, Nav, Container } from 'react-bootstrap';
import Styles from '../../Styles';
import './style.css';

export default function Routing() {

    return (
        <Container>
            <Router>
                <Navbar expand="lg">
                    <Navbar.Brand style={Styles.brand}>
                        Portfolio
                    </Navbar.Brand>
                    <Nav style={Styles.nav} defaultActiveKey="home">
                        <Nav.Link as={Link} to="/" eventKey="home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tasks" eventKey="tasks">
                            Kurssin tehtävät
                        </Nav.Link>
                        <Nav.Link as={Link} to="/about" eventKey="about">
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar>


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
                    <Route path="/test:id">
                        <TaskOverview />
                    </Route>
                </Switch>
            </Router>
        </Container>
    );
}
