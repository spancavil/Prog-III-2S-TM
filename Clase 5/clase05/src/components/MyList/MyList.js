import React from 'react';

export default function MyList(props) {
    console.log(props.pers)
    return (
        <ul>
            {/* <ul>
                <li>{props.pers[0]}</li>
                <li>{props.pers[1]}</li>
                <li>{props.pers[2]}</li>
                <li>{props.pers[3]}</li>
            </ul> */}
            {props.pers.map(function (persona, index) {
                return  <li key={index}>
                            {persona}
                        </li>
            })}
        </ul>
    )
}