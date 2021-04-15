import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

const RepoItem = () => {
  return (
    <li>
      <div className='repo-item'>
        <BookOutlinedIcon></BookOutlinedIcon>
        <div className='repo-info'>
          <p className='name'>airbnb/lottie-android</p>
          <p className='description'>
            Render After Effects Animations natively on your computer
          </p>
        </div>
      </div>
      <div className='line-x line-x__gray line-x__m-24'></div>
    </li>
  );
};

export default RepoItem;
