import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RepoDetail from './components/detail/RepoDetail';
import UserDetail from './components/detail/UserDetail';
import Header from './components/Header';
import Home from './Home';
const Routes = () => {
  const [searchKey, setSearchKey] = useState<string>();
  const searchSubmitted = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const searchValue = document.querySelector<HTMLInputElement>(
      'input[name=search]'
    )?.value;
    setSearchKey(searchValue);
  };
  return (
    <Router>
      <Header handleSearchSubmitted={searchSubmitted}></Header>
      <Switch>
        <Route exact path='/'>
          <Home searchKey={searchKey}></Home>
        </Route>
        <Route path='/repo-detail' component={RepoDetail}></Route>
        <Route path='/user-detail' component={UserDetail}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
