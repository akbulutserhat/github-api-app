import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
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
          <p className='name'>{full_name}</p>
          <p className='description'>{description}</p>
        </div>
      </div>
      <div className='line-x line-x__gray line-x__m-24'></div>
    </li>
  );
};

export default RepoItem;
