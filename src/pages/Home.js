import { Link } from 'react-router-dom';

function HomePage() {
    return <>
        <h1>My Homepage</h1>
        <Link to="/second">To second page</Link>
    </>
}

export default HomePage;