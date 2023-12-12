// import Message from './Message.js';
import ListGrou from './components/ListGroup';
import logo from './logo.svg'


function App(props) {
  const h = <div><ListGroup /></div>;
  state = {name:"Ayoub", age:15};
  const fs = <p>Hello {state.name}</p>
  const im = <img src={logo}></img>;

  return h;
}

export default App

