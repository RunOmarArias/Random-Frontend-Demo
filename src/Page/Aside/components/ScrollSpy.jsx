import ScrollLine from './ScrollLine';
import { useState, useEffect } from 'react';

export default function ScrollSpy() {

    const[position, setPosition] = useState(0);
    const[flagPosition, setFlagPosition] = useState(false);

    useEffect(() => {
        window.onscroll = () => {
            setPosition(window.scrollY);
            position >= 469 ? setFlagPosition(true) : setFlagPosition(false);
        };
    }, [position]);

    return (
        <div>
            {
                flagPosition ?
                <>
                    <ScrollLine position={!flagPosition} />
                    <ScrollLine position={flagPosition} />
                </> :
                <>
                    <ScrollLine position={!flagPosition} />
                    <ScrollLine position={flagPosition} />
                </>
            }
        </div>
    );
}
