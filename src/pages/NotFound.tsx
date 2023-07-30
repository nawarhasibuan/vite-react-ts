import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <p>NotFound</p>
      <Link to={'/'}>Back home</Link>
    </div>
  );
}

export default NotFound;
