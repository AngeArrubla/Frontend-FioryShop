import './styles/_globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';

import AppRouter from './router/router'

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AppRouter/>
    </div>
  );
}

export default App;
