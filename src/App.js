import './App.css';
import More from './components/More'
import Main from './components/Main'
import { Route } from 'react-router-dom';
function App() {

  


  

  return (
    <div>
    <Route exact path="/" component={Main}/>
    <Route path="/more" component={More}/>
</div>
   
  );
}

export default App;
