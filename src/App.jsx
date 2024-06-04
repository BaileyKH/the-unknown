import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home"
import { Layout } from './components/Layout';
import { Campgrounds } from './pages/Campgrounds/Campgounds';
import { NotFound } from './pages/NotFound';
import { CampgroundDetail } from './pages/Campgrounds/CampgroundDetail';
import { CampingGear } from './pages/Gear/CampingGear';
import { CampingGearDetail } from './pages/Gear/CampingGearDetail';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/gear" element={<CampingGear />} />
            <Route path="/gear/:id" element={<CampingGearDetail />} />
            <Route path="/grounds" element={<Campgrounds />} />
            <Route path="grounds/:id" element={<CampgroundDetail />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App
