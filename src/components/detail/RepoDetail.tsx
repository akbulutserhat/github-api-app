import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import BookOutlinedIcon from '@material-ui/icons/BookOutlined';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LinkIcon from '@material-ui/icons/Link';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';

import gitBranch from '../../assets/git-branch.png';
import gitPull from '../../assets/git-pull.png';
import gitFork from '../../assets/git-fork.png';

import { IRepoDetail } from '../../shared/interfaces';
import { kFormatter } from '../../helpers/number';

const RepoDetail = () => {
  const [repoDetail, setRepoDetail] = useState<IRepoDetail>();
  const history = useHistory<any>();
  const url = history?.location?.state?.url;

  useEffect(() => {
    axios.get(url).then((res) => setRepoDetail(res.data));
  }, []);

  if (!url) return <div>Don't change url with manually</div>;
  console.log(repoDetail);
  return (
    <main className='main-side'>
      <div className='left-side'>
        <div className='detail'>
          <BookOutlinedIcon
            style={{
              width: '64px',
              height: '64px',
              marginBottom: '24px',
            }}></BookOutlinedIcon>
          <p className='name'>{repoDetail?.full_name}</p>
          <p className='description'>{repoDetail?.description}</p>
          <div className='link'>
            <LinkIcon></LinkIcon>
            <a href={repoDetail?.html_url} target='_blank'>
              {repoDetail?.full_name}
            </a>
          </div>
          <ul className='stats'>
            <li>
              <div>
                <VisibilityIcon></VisibilityIcon>
                <span>Watch</span>
              </div>
              <span className='stat-count'>
                {kFormatter(repoDetail?.subscribers_count)}
              </span>
            </li>
            <div className='line-x line-x__gray-light line-x__m-16'></div>
            <li>
              <div>
                <StarBorderIcon></StarBorderIcon>
                <span>Star</span>
              </div>
              <span className='stat-count'>
                {kFormatter(repoDetail?.stargazers_count)}
              </span>
            </li>
            <div className='line-x line-x__gray-light line-x__m-16'></div>
            <li>
              <div>
                <img src={gitFork}></img>
                <span>Fork</span>
              </div>
              <span className='stat-count'>
                {kFormatter(repoDetail?.forks_count)}
              </span>
            </li>
            <li>
              <div>
                <img src={gitBranch}></img>
                <span>Branches</span>
              </div>
              <span className='stat-count'>
                {Math.floor(Math.random() * 100)}
              </span>
            </li>
            <div className='line-x line-x__gray-light line-x__m-16'></div>
            <li>
              <div>
                <ErrorOutlineIcon></ErrorOutlineIcon>
                <span>Issues</span>
              </div>
              <span className='stat-count'>
                {kFormatter(repoDetail?.open_issues_count)}
              </span>
            </li>
            <div className='line-x line-x__gray-light line-x__m-16'></div>
            <li>
              <div>
                <img src={gitPull}></img>
                <span>Pull Requests</span>
              </div>
              <span className='stat-count'>
                {Math.floor(Math.random() * 100)}
              </span>
            </li>
          </ul>
          <button>
            <BookmarkBorderIcon></BookmarkBorderIcon>
            Add to Bookmarks
          </button>
        </div>

        <div className='line-y line-y__gray-light'></div>
      </div>
      <div className='right-side'>{repoDetail?.description}</div>
    </main>
  );
};

export default RepoDetail;
