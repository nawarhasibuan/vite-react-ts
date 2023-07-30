import { Link } from 'react-router-dom';
function Home() {
  return (
    <div>
      <Link to={'/not-exist'}>other page</Link>
    </div>
  );
}

export default Home;
