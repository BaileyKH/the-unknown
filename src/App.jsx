import { memo } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home"
import { Layout } from './components/Layout';
import { Campgrounds } from './pages/Campgrounds/Campgounds';
import { Custom404 } from './pages/Custom404';
import { CampgroundDetail } from './pages/Campgrounds/CampgroundDetail';
import { CampingGear } from './pages/Gear/CampingGear';
import { CampingGearDetail } from './pages/Gear/CampingGearDetail';
import { Cart } from './pages/Cart';
import { CartProvider } from './components/CartContext';

const MemoizedLayout = memo(Layout)

function App() {

  return (
    <>
      <CartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MemoizedLayout />}>
              <Route index element={<Home />} />
              <Route path="/gear" element={<CampingGear />} />
              <Route path="/gear/:id" element={<CampingGearDetail />} />
              <Route path="/grounds" element={<Campgrounds />} />
              <Route path="grounds/:id" element={<CampgroundDetail />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="*" element={<Custom404 />} />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App
