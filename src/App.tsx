import './App.css'
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoutes from './routes/appRoutes';
import { EmployeeProvider } from './context/EmployeeContext';

function App() {
  return (
    <BrowserRouter>
      <EmployeeProvider>
        <div className='min-h-screen bg-gray-100'>
          <Navbar />
          <AppRoutes />
        </div>
      </EmployeeProvider>
    </BrowserRouter>
  );
}

export default App
