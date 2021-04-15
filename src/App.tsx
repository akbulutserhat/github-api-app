import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/search/Search';

const App = (): JSX.Element => {
  const [searchKey, setSearchKey] = useState<string>();
  useEffect(() => {
    axios
      .get('https://api.github.com/search/repositories?q=lottie')
      .then((res) => console.log(res.data));
  }, []);
  const searchSubmitted = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const searchValue = document.querySelector<HTMLInputElement>(
      'input[name=search]'
    )?.value;
    setSearchKey(searchValue);
  };
  return (
    <>
      <Header handleSearchSubmitted={searchSubmitted}></Header>
      <Search searchKey={searchKey}></Search>
    </>
  );
};

export default App;
