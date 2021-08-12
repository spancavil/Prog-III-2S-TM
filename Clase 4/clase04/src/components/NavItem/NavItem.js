import React from 'react';

export default function NavItem(props) {
    return (
        <li class="nav-item">
            <a class="nav-link" href="/">
                <i class={`fas fa-fw fa-${props.icon}`}></i>
                <span>{props.name}</span></a>
        </li>
    )
}