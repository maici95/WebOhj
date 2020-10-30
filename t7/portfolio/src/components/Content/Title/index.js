


import React from 'react';

import Styles from '../../../Styles';

export default function Title(props) {

    return (
        <h2 style={Styles.title}>
            {props.children}
        </h2>
    );
}
