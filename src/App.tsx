import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';

import { ShoppingCartProvider } from './ShoppingCartContext';
import NavBar from './components/NavBar/NavBar';
import { fetchAllProducts } from './utils/fetchData/fetchData';
import './App.css';

function App() {
	fetchAllProducts;
	return (
		<>
			<ShoppingCartProvider>
				<Router>
					<div>
						<NavBar />
						<AppRoutes />
					</div>
				</Router>
			</ShoppingCartProvider>
		</>
	);
}

export default App;
