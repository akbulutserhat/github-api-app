import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Header from './components/Header';
import FilterList from './components/search/FilterList';
import FirstScreen from './components/search/FirstScreen';
import SearchResults from './components/search/SearchResults';
import { IData } from './shared/interfaces';

export const DataContext = createContext<IData>({ total_count: 0, items: [] });

interface Props {
  searchKey?: string;
}

const Home = ({ searchKey }: Props): JSX.Element => {
  const [searchFilter, setSearchFilter] = useState<string>('repositories');
  const [data, setData] = useState({ total_count: 0, items: [] });
  useEffect(() => {
    if (searchKey) {
      axios
        .get(`https://api.github.com/search/${searchFilter}?q=${searchKey}`)
        .then((res) => setData(res.data));
    }
  }, [searchKey, searchFilter]);

  const changeFilter = (value: string) => {
    setSearchFilter(value);
  };
  return (
    <>
      {!searchKey && <FirstScreen></FirstScreen>}
      <DataContext.Provider value={data}>
        <main className='main-side'>
          <div className='left-side'>
            <FilterList
              changeFilter={changeFilter}
              searchFilter={searchFilter}
              searchKey={searchKey}></FilterList>
            <div className='line-y line-y__gray-light'></div>
          </div>
          <div className='right-side'>
            <SearchResults
              searchKey={searchKey}
              searchFilter={searchFilter}></SearchResults>
          </div>
        </main>
      </DataContext.Provider>
    </>
  );
};

export default Home;
