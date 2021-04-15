import Repos from '../repo/Repos';

interface Props {
  searchKey?: string;
  searchFilter?: string;
}

const Search = ({ searchKey, searchFilter = 'repositories' }: Props) => {
  return <>{searchKey && searchFilter == 'repositories' && <Repos></Repos>}</>;
};

export default Search;
