import { useContext } from 'react';
import { DataContext } from '../../App';
import { IData, IRepo, IUser } from '../../shared/interfaces';
import UserItem from './UserItem';

const Users = () => {
  const data = useContext<IData>(DataContext);
  const { total_count, items } = data;
  console.log(data);
  return (
    <div className='repositories'>
      <p className='count'>{total_count} User Results</p>
      <ul>
        {items.map((item) => (
          <UserItem item={item} key={item.url}></UserItem>
        ))}
      </ul>
    </div>
  );
};

export default Users;
