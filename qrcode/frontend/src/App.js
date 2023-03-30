import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Qrcode from "./Component/Qrcode";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Qrcode />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
