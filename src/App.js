import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import UtilityPage from './pages/UtilityPage';
import FabricListingPage from './pages/FabricListingPage';
import TailoringServicePage from './pages/TailoringServicePage';
import LoginPage from './pages/auth';
import SignupPage from './pages/auth/SignupPage';
import ProductPage from './pages/ProductPage';
import SellerDashboard from './components/SellerDashboard';
import TailorDashboard from './components/TailorDashboard';
import Header from './components/Header';
import Footer from './components/Footer';

function Layout({ children }) {
	const location = useLocation();
	const isLoginPage = location.pathname === '/login' || location.pathname === '/register';

	return (
		<div className='bg-gray-100'>
			<Header />
			<div className={`${!isLoginPage ? 'mb-10' : ''}`} />
			{children}
			<div className={`${!isLoginPage ? 'mt-10' : ''}`} />
			<Footer />
		</div>
	);
}

function App() {
	return (
		<Router>
			<ScrollToTop />
			<Layout>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<SignupPage />} />
					<Route path='/utility' element={<UtilityPage />} />
					<Route path='/fabrics' element={<FabricListingPage />} />
					<Route path='/product' element={<ProductPage />} />
					<Route path='/tailoring' element={<TailoringServicePage />} />
					<Route path='/seller-dashboard' element={<SellerDashboard />} />
					<Route path='/tailor-dashboard' element={<TailorDashboard />} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;



