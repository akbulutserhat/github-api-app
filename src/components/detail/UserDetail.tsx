import { Avatar } from '@material-ui/core';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { IRepo, IUserDetail } from '../../shared/interfaces';
import RepoItem from '../repo/RepoItem';

const UserDetail = () => {
  const [userDetail, setUserDetail] = useState<IUserDetail>();
  const [userRepos, setUserRepos] = useState<Array<IRepo>>([]);
  const history = useHistory<any>();
  const url = history?.location?.state?.url;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setUserDetail(data);
        axios.get(data.repos_url).then((res) => setUserRepos(res.data));
      });
  }, []);

  if (!url) return <div>Don't change url with manually</div>;
  return (
    <main className='main-side'>
      <div className='left-side'>
        <div className='user-info'>
          <Avatar
            src={userDetail?.avatar_url}
            style={{ width: '205px', height: '205px' }}></Avatar>
          <p className='name'>{userDetail?.name}</p>
          <p className='login'>{userDetail?.login}</p>
          <p className='bio'>{userDetail?.bio}</p>
        </div>
        <div className='line-y line-y__gray-light'></div>
      </div>
      <div className='right-side'>
        <div className='count'>
          <p>Repositories</p>
          <span>{userDetail?.public_repos}</span>
        </div>

        <ul>
          {userRepos.map((item) => (
            <RepoItem item={item} key={item.url}></RepoItem>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default UserDetail;
