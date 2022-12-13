import './App.css';
import BlogList from './BlogList';
import SingleBlog from './SingleBlog';
import PointsAndMiles from './PointsMilesGuide';
import EarningMiles from './EarningMiles';
import { HashRouter as Router, Route, Routes,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar,} from 'react-bootstrap';

function App() {
	return (
		<div className='main'>
			<Router>
				<Navbar collapseOnSelect expand='lg' className='navbar' >
					<Link to='/'>
						<Navbar.Brand href='#home'>First Class Travel Hacks</Navbar.Brand>
					</Link>

					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav  className='navLinks'>
							<Nav.Link className='navlink' href='blogDetails/6Eow2G8YqMfSUfmJqGDyYC#/blogDetails/6Eow2G8YqMfSUfmJqGDyYC'>
								Points And Miles Guide
							</Nav.Link>

							<Nav.Link className='navlink' href='blogDetails/3mLKIIfhloEtK1ySi9zit8#/blogDetails/3mLKIIfhloEtK1ySi9zit8'>
								Earning Points & Miles
							</Nav.Link>
							<Nav.Link className='navlink' href='/creditcards'>Credit Cards</Nav.Link>
							<Nav.Link className='navlink' href='/miles&redemption'>
								Points & Miles Redemption
							</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<Routes>
					<Route path='/PointsAndMilesGuide' element={<PointsAndMiles />} />
					<Route path='/blogDetails/:id' element={<SingleBlog />} />
					<Route path='/blogList' element={<BlogList />} />
					<Route path='/' element={<BlogList />} />
					<Route path='/EarningMiles&Points' element={<EarningMiles />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
