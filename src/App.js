
import './App.css';
import { Route, Switch } from 'react-router-dom';
import "../src/Assets/global.css"
import "../src/Assets/Style/common.css"
import Main from './Component/Main';
function App() {
  return (
    <div className="App">
     <Switch>
    <Route exact path="/" component={Main} />
    <Route component={Error}/>
    
   </Switch>
    </div>
  );
}


export default App;
