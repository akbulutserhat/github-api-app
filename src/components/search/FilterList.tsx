import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import { useContext } from 'react';
import { IData } from '../../shared/interfaces';
import { DataContext } from '../../App';

interface Props {
  changeFilter: any;
  searchFilter: string;
}

const FilterList = ({ changeFilter, searchFilter }: Props) => {
  const { total_count } = useContext<IData>(DataContext);
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
            {total_count}
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
            3
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
