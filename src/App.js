import './App.css';
import BlogList from './BlogList';
import SingleBlog from './SingleBlog';
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,} from 'react-bootstrap';
function App() {
	return (
		<div>
			<Router>
				<Navbar collapseOnSelect expand='lg' variant='dark'>
					<Link to='/'>
						<Navbar.Brand href='#home'>First Class Travel Hacks</Navbar.Brand>
					</Link>

					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='#miles&redemption'>
								Points & Miles Redemption
							</Nav.Link>
							<Nav.Link href='#creditcards'>Credit Cards</Nav.Link>
							<Nav.Link href='#'>Travel Hack Intro</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes>
					
						 <Route path='/blogDetails/:id' element={<SingleBlog />} />
						<Route path='/blogList' element={<BlogList />} />
						 <Route path='/' element={<BlogList />} />
						{' '}
					
				</Routes>
				
			</Router>
		</div>
		// <Router>
		// 			<Routes>

		// 				<Route path='/blogDetails/:id' element={<SingleBlog />} />
		// 				<Route path='/blogList' element={<BlogList />} />
		// 				<Route path='/' element={<BlogList />} />
		// 			</Routes>
		// 		</Router>
	);
}

export default App;
