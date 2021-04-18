import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Logo from '../assets/digieggs-logo.png';
import { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  handleSearchSubmitted?: FormEventHandler<HTMLFormElement>;
}

const Header = ({ handleSearchSubmitted }: Props) => {
  return (
    <header className='header'>
      <Link to='/'>
        <img src={Logo} alt='Logo'></img>
      </Link>
      <form className='search-container' onSubmit={handleSearchSubmitted}>
        <SearchIcon></SearchIcon>
        <input
          name='search'
          className='search-input'
          autoComplete='off'
          placeholder='Search...'></input>
      </form>
      <div className='bookmark-container'>
        <BookmarkBorderIcon></BookmarkBorderIcon>
        <span>Bookmarks</span>
      </div>
    </header>
  );
};

export default Header;
