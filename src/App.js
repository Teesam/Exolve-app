import './App.css';
import Body from './components/body/body';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import UsernameInput from './components/username-input/username-input';

const App = () => {
  
  return (
    
    <BrowserRouter>
      <Provider store = { store }>

        <div className="App">

          <Route path = '/' exact strict component = { UsernameInput } />

          <Route path = '/body' exact strict component = { Body } />

        </div>
        
      </Provider>
    </BrowserRouter>
  );
}

export default App;
