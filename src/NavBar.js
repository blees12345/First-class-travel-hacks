import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
	return (
		<Navbar collapseOnSelect expand='lg' variant='dark'>
			<Container>
				<Navbar.Brand href='#home'>First Class Travel Hacks</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='#features'>Points & Miles Redemption</Nav.Link>
						<Nav.Link href='#pricing'>Credit Cards</Nav.Link>
						<Nav.Link href='#pricing'>Travel Hack Intro</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default CollapsibleExample;
