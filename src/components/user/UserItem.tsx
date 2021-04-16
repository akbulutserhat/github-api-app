import { IUser } from '../../shared/interfaces';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

interface Props {
  item: IUser;
}

const UserItem = ({ item }: Props) => {
  const { login, avatar_url, url } = item;
  return (
    <li>
      <div className='repo-item'>
        <Avatar
          alt='User Avatar'
          src={avatar_url}
          style={{ width: '24px', height: '24px' }}></Avatar>
        <div className='repo-info'>
          <Link
            to={{ pathname: '/user-detail', state: { url } }}
            className='name'>
            {login}
          </Link>
          <p className='description'>Title</p>
        </div>
      </div>
      <div className='line-x line-x__gray line-x__m-24'></div>
    </li>
  );
};

export default UserItem;
