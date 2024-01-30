import './App.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { TodoWrapper } from './components/TodoWrapper';
function App() {
  return (
    <div className='App'>
        <Header/>
        <TodoWrapper/>
    </div>
  );
}

export default App;
