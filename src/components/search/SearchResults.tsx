import Repos from '../repo/Repos';

interface Props {
  searchKey?: string;
  searchFilter?: string;
}

const Search = ({ searchKey, searchFilter = 'repository' }: Props) => {
  return <>{searchKey && searchFilter == 'repository' && <Repos></Repos>}</>;
};

export default Search;
