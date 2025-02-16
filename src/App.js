
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Login from "./Auth/Login";
import AppRoutes from './Routes/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    
  );
}

export default App;
