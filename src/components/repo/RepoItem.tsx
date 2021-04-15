import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

const RepoItem = () => {
  return (
    <>
      <BookOutlinedIcon></BookOutlinedIcon>
      <div className='repo-info'>
        <p className='name'>airbnb/lottie-android</p>
        <p className='description'>
          Render After Effects Animations natively on your computer
        </p>
      </div>
    </>
  );
};

export default RepoItem;
