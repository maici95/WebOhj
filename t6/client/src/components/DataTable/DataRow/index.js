


import React from 'react';

DataRow.HCol = DataHCol;
DataRow.Col = DataCol;

export default function DataRow(props) {
    const style = props.style ? props.style : {};

    return (
        <tr style={style}>{props.children}</tr>
    );
}

function DataHCol(props) {
    const onClick = props.onClick ? props.onClick : null;

    return (
        <th onClick={onClick}>
            {props.children}
        </th>
    );
}

function DataCol(props) {
    return (
        <td>
            {props.children}
        </td>
    );
}
