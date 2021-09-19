import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Sidebar/Navbar';
import Home from './pages/Home'
import CryptoTrackerPage from './pages/CryptoTrackerPage'
import BudgetToolPage from './pages/BudgetToolPage'
import ToDoListPage from './pages/ToDoListPage';
import InfoModal  from './components/InfoModal/InfoModal'


function App() {

  const [displayModal, setDisplayModal] = useState(false)

  return (
    <Router>
      {displayModal && <InfoModal openModal={setDisplayModal}/>} 
      <Navbar openModal={setDisplayModal}/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/todolistpage' exact component={ToDoListPage}/>
        <Route path='/budgettoolpage' exact component={BudgetToolPage}/>
        <Route path='/cryptotrackerpage' exact component={CryptoTrackerPage}/>
      </Switch>
    </Router>

  );
}

export default App;
