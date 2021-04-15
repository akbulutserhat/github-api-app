import RepoItem from './RepoItem';

const Repos = () => {
  return (
    <div className='repositories'>
      <p className='count'>2,555 Repository Results</p>
      <ul>
        <li className='repo-item'>
          <RepoItem></RepoItem>
        </li>
        <li className='repo-item'>
          <RepoItem></RepoItem>
        </li>
        <li className='repo-item'>
          <RepoItem></RepoItem>
        </li>
        <li className='repo-item'>
          <RepoItem></RepoItem>
        </li>
      </ul>
    </div>
  );
};

export default Repos;
