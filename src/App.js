import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './UserPost';
import CreatePost from './UserPost/CreatePost';

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/createPost' element={<CreatePost />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
