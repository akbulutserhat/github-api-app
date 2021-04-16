import axios from 'axios';
import { useEffect } from 'react';
import Repos from '../repo/Repos';
import Users from '../user/Users';

interface Props {
  searchKey?: string;
  searchFilter?: string;
}

const Search = ({ searchKey, searchFilter }: Props) => {
  return (
    <>
      {searchKey && searchFilter == 'repositories' && <Repos></Repos>}
      {searchKey && searchFilter == 'users' && <Users></Users>}
    </>
  );
};

export default Search;
