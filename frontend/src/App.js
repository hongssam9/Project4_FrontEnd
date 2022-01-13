import './App.css';
import { Button, Container } from 'react-bootstrap';
import Home from "./components/Home.jsx"
import Main from "./components/Main.jsx"

function App() {
  return (
    <div className="App">
      <Container fluid>
        {/* <Home /> */}
        <Main />
      </Container>
    </div>
  );
}
export default App;

