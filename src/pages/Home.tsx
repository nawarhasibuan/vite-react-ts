import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link className="font-medium" to={'/not-exist'}>
        other page
      </Link>
    </div>
  );
}

export default Home;
