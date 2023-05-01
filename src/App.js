import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home} from './pages/homes/Home.jsx';
import {List} from './pages/list/List.jsx';
import {Hotels} from './pages/hotels/Hotels.jsx';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/hotels" element={<List/>} />
      <Route path="/hotels/:id" element={<Hotels/>} />
     
      </Routes>
    </BrowserRouter>
  );
}

export default App;
