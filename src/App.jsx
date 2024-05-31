import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home } from "./pages/Home"
import { Layout } from './components/Layout';
import { Campgrounds } from './pages/Campgrounds/Campgounds';
import { NotFound } from './pages/NotFound';
import { CampgroundDetail } from './pages/Campgrounds/CampgroundDetail';



function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
