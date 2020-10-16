


import React from 'react';

DataRow.HCol = DataHCol;
DataRow.Col = DataCol;

export default function DataRow(props) {
    return (
        <tr>{props.children}</tr>
    );
}

function DataHCol(props) {
    return (
        <th>
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
