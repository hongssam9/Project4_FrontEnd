import './App.css';
import { Button, Container } from 'react-bootstrap';
import Login from "./components/Login.jsx";
import Main from "./components/Main.jsx";
import Splash from "./components/Splash.jsx";

function App() {
  return (
    <div className="App">
      <Container >
        {/* <Login /> */}
        <Main />
        {/* <Splash /> */}
      </Container>
    </div>
  );
}
export default App;

