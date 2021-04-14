import SearchIcon from '@material-ui/icons/Search';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Logo from '../assets/digieggs-logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img src={Logo} alt='Logo'></img>
      <div className='search-container'>
        <SearchIcon></SearchIcon>
        <input
          name='search'
          className='search-input'
          autoComplete='off'
          placeholder='Search...'></input>
      </div>
      <div className='bookmark-container'>
        <BookmarkBorderIcon></BookmarkBorderIcon>
        <span>Bookmarks</span>
      </div>
    </div>
  );
};

export default Header;
