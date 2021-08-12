import React from 'react';

export default function NavItem(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href="/">
                <i className={`fas fa-fw fa-${props.icon}`}></i>
                <span>{props.name}</span></a>
        </li>
    )
}