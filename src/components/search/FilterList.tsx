import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useContext, useEffect, useState } from 'react';
import { IData } from '../../shared/interfaces';
import { DataContext } from '../../App';
import axios from 'axios';

interface Props {
  changeFilter: any;
  searchFilter: string;
  searchKey?: string;
}

const FilterList = ({ changeFilter, searchFilter, searchKey }: Props) => {
  const [repoCount, setRepoCount] = useState<number>(0);
  const [userCount, setUserCount] = useState<number>(0);
  useEffect(() => {
    if (searchKey) {
      axios
        .get(`https://api.github.com/search/repositories?q=${searchKey}`)
        .then((res) => setRepoCount(res.data.total_count));

      axios
        .get(`https://api.github.com/search/users?q=${searchKey}`)
        .then((res) => setUserCount(res.data.total_count));
    }
  }, [searchKey]);

  return (
    <>
      <List
        className='filter-list'
        component='nav'
        aria-label='main mailbox folders'>
        <ListItem
          button
          onClick={() => changeFilter('repositories')}
          className={searchFilter == 'repositories' ? 'active-link' : ''}>
          <ListItemIcon>
            <InsertDriveFileIcon />
          </ListItemIcon>
          <ListItemText primary='Repositories' />
          <ListItemSecondaryAction
            className={searchFilter == 'repositories' ? 'active-text' : ''}>
            {repoCount}
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          button
          onClick={() => changeFilter('users')}
          className={searchFilter == 'users' ? 'active-link' : ''}>
          <ListItemIcon>
            <InsertEmoticonIcon />
          </ListItemIcon>
          <ListItemText primary='Users' />
          <ListItemSecondaryAction
            className={searchFilter == 'users' ? 'active-text' : ''}>
            {userCount}
          </ListItemSecondaryAction>
        </ListItem>
        <ListItem
          button
          onClick={() => changeFilter('bookmarked')}
          className={searchFilter == 'bookmarked' ? 'active-link' : ''}>
          <ListItemIcon>
            <BookmarkBorderIcon />
          </ListItemIcon>
          <ListItemText primary='Bookmarked' />
          <ListItemSecondaryAction
            className={searchFilter == 'bookmarked' ? 'active-text' : ''}>
            12
          </ListItemSecondaryAction>
        </ListItem>
      </List>
    </>
  );
};

export default FilterList;
