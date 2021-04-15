import Repos from '../repo/Repos';
import FirstScreen from './FirstScreen';

interface Props {
  searchKey?: string;
  searchFilter?: string;
}

const Search = ({ searchKey, searchFilter = 'repository' }: Props) => {
  return (
    <div className='search-container'>
      {!searchKey && <FirstScreen></FirstScreen>}
      {searchKey && searchFilter == 'repository' && <Repos></Repos>}
    </div>
  );
};

export default Search;
