import Login from './components/Login/Login';
import Sigin from './components/Sigin/Sigin';
import { StyledHr } from '../styles';

export default function Main() {
    return (
        <main>
            <Login />
            <StyledHr />
            <Sigin />
        </main>
    );
}
