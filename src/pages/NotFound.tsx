import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <p>NotFound</p>
      <Link to={'/'}>Back home</Link>
    </div>
  );
}

export default NotFound;
