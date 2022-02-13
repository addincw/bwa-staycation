import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage';
import CheckoutSuccessPage from './pages/CheckoutSuccessPage';
import LandingPage from './pages/LandingPage';
import PlaceDetailPage from './pages/PlaceDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route path="/:placeId" element={<PlaceDetailPage />} />
        <Route exact path="/checkout" element={<CheckoutPage />} />
        <Route exact path="/checkout-success" element={<CheckoutSuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
