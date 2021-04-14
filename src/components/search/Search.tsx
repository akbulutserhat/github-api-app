import FirstScreen from './FirstScreen';

interface Props {
  searchKey?: string;
  searchFilter?: string;
}

const Search = ({ searchKey, searchFilter = 'repository' }: Props) => {
  return (
    <div className='search-container'>
      {!searchKey && <FirstScreen></FirstScreen>}
    </div>
  );
};

export default Search;
