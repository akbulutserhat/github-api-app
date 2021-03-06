import { useContext } from 'react';
import { DataContext } from '../../Home';
import { IData, IRepo, IUser } from '../../shared/interfaces';
import UserItem from './UserItem';

const Users = () => {
  const data = useContext<IData>(DataContext);
  const { total_count, items } = data;
  console.log(data);
  return (
    <div className='repositories'>
      <p className='count'>
        {Intl.NumberFormat('en-US').format(total_count)} User Results
      </p>
      <ul>
        {items.map((item) => (
          <UserItem item={item} key={item.url}></UserItem>
        ))}
      </ul>
    </div>
  );
};

export default Users;
