import { Container } from 'react-bootstrap';
import './styles/_globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';

import AppRouter from './router/router'

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar/>
        <AppRouter/>
      </Container>
    </div>
  );
}

export default App;
