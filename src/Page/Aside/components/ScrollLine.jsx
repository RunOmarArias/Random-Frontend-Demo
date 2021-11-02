
import './styles.css';

export default function ScrollLine({ position }) {

    return(
        <div className={position ? 'line-true' : 'line-false'}></div>
    );
}