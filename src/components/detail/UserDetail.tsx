import { useHistory } from 'react-router';

const UserDetail = () => {
  const history = useHistory<any>();
  const { url } = history.location.state;
  return (
    <main className='main-side'>
      <div className='left-side left-side__no-padding'>
        <div className='line-y line-y__gray-light'></div>
      </div>
      <div className='right-side'></div>
    </main>
  );
};

export default UserDetail;
