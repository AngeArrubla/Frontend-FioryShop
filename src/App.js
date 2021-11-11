import { Container } from 'react-bootstrap';
import './styles/_globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Container>
        <Navbar/>
        <Login />
      </Container>
    </div>
  );
}

export default App;
