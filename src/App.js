import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Index1 from './components/Blog/Index1';
import Components from './components/Components';
import Index2 from './components/Therpaies.js/Index2';



function App() {
	return (
		<div className="App">
			
			<Routes>
			     <Route path='/2' element={< Index1/>} />
				<Route path='/' element={<Components />} />
				<Route path='/3' element={< Index2 />} />
			</Routes>
		
			
		</div>
	);
}

export default App;
