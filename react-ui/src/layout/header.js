import React, {useEffect, useState} from 'react';
import {Link, useLocation} from "react-router-dom";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import './header.css';

const Header = (props) => {
    const location = useLocation();
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        if (location.pathname.includes('one')) {
            setCurrentPage('one');
        } else if (location.pathname.includes('two')) {
            setCurrentPage('two');
        } else {
            setCurrentPage(undefined);
        }
    }, [location]);

    return (
        <>
            <header>
                <h1><Link to="/">Text-Em-All React Challenge</Link></h1>
                <nav>
                    <ul>
                        <li className={currentPage === 'one' ? 'currentPage' : null}>
                            <Link to="/challenge-one" aria-current={currentPage === 'one' ? 'page' : null}>Challenge One</Link>
                        </li>
                        <li className={currentPage === 'two' ? 'currentPage' : null}>
                            <Link to="/challenge-two" aria-current={currentPage === 'two' ? 'page' : null}>Challenge Two</Link>
                        </li>
                        <li>
                            <a href="https://github.com/breeyae/breeyae-tea-react-challenge" target="_blank"><span className="linkText">View Source Code</span><OpenInNewIcon fontSize="small" /></a>
                        </li>
                    </ul>
                </nav>
            </header>
            {props.children}
        </>
    )
};

export default Header;