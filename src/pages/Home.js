import {Link} from 'react-router-dom';

export default function HomePage() {
    return <>
        <h1>My Home Page</h1>
        <Link to="/second">To second page</Link>
    </>;
}