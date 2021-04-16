import { useContext } from 'react';
import { DataContext } from '../../Home';
import { IData } from '../../shared/interfaces';
import RepoItem from './RepoItem';

const Repos = () => {
  const data = useContext<IData>(DataContext);
  const { total_count, items } = data;
  return (
    <div className='repositories'>
      <p className='count'>{total_count} Repository Results</p>
      <ul>
        {items.map((item) => (
          <RepoItem item={item} key={item.url}></RepoItem>
        ))}
      </ul>
    </div>
  );
};

export default Repos;
