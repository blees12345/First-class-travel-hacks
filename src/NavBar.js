import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import { BrowserRouter as  Router,Link,Routes,Route} from 'react-router-dom';

function CollapsibleExample() {
	return (
		<Router>
			<Navbar collapseOnSelect expand='lg' variant='dark'>
				<Link to='/'>
					<Navbar.Brand href='#home'>First Class Travel Hacks</Navbar.Brand>
				</Link>

				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#miles&redemption'>Points & Miles Redemption</Nav.Link>
						<Nav.Link href='#creditcards'>Credit Cards</Nav.Link>
						<Nav.Link href='#'>Travel Hack Intro</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<Routes>
				<Route path='/' ></Route>
			</Routes>
		</Router>
	);
}

export default CollapsibleExample;
