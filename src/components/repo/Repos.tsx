import RepoItem from './RepoItem';

const Repos = () => {
  return (
    <div className='repositories'>
      <p className='count'>2,555 Repository Results</p>
      <ul>
        <RepoItem></RepoItem>
        <RepoItem></RepoItem>
        <RepoItem></RepoItem>
        <RepoItem></RepoItem>
      </ul>
    </div>
  );
};

export default Repos;
