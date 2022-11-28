import './App.css';
import BlogList from './BlogList';
import SingleBlog from './SingleBlog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
	return (
		<div >
			<NavBar></NavBar>
			<Router>
				<Routes>
					<Route path='/blogDetails/:id' element={<SingleBlog />} />
					<Route path='/blogList' element={<BlogList />} />
					<Route path='/' element={<BlogList />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
