import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <div className='min-h-screen bg-gray-100'>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App
