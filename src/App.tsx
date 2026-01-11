import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoutes from './routes/appRoutes';

function App() {
  return (
    <BrowserRouter>
      <div className='min-h-screen bg-gray-100'>
        <Navbar />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App
