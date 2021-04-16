import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import { Link } from 'react-router-dom';
import { IRepo } from '../../shared/interfaces';

interface Props {
  item: IRepo;
}

const RepoItem = ({ item }: Props) => {
  const { full_name, url, description } = item;
  return (
    <li>
      <div className='repo-item'>
        <BookOutlinedIcon></BookOutlinedIcon>
        <div className='repo-info'>
          <Link
            to={{ pathname: '/repo-detail', state: { url } }}
            className='name'>
            {full_name}
          </Link>
          <p className='description'>{description}</p>
        </div>
      </div>
      <div className='line-x line-x__gray line-x__m-24'></div>
    </li>
  );
};

export default RepoItem;
