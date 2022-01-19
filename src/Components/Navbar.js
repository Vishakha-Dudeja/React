import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <div>
            <h1>{props.title} {props.age}</h1>
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    age: PropTypes.number,
}

Navbar.defaultProps = {
    title: 'Default Title',
    age: 0,
}