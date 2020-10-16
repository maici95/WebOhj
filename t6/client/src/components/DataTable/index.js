


import React from 'react';

import { Table, Button } from 'react-bootstrap';
import DataRow from './DataRow';

import Styles from '../../styles';

export default function DataTable(props) {

    let rowN = 0;

    return (
        <Table>
            <thead>
                <DataRow style={Styles.DataTableHeader}>
                    {props.headers.map((item, index) =>  {
                        return (
                            <DataRow.HCol key={index}
                                onClick={() => props.sort(props.keys[index - 1])}
                            >
                                {item}
                            </DataRow.HCol>
                        );
                    })}
                </DataRow>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <DataRow key={index}
                            style={{background: ++rowN % 2 === 0 ? '#fefefe' : '#f3f3f3'}}
                        >
                            <DataRow.Col>{index + 1}</DataRow.Col>
                            {props.keys.map((key, index) => {
                                const format = props.format.find(f => f.key === key);
                                let value = format ? format.action(item[key]) : item[key];

                                return (
                                    <DataRow.Col key={index}>
                                        {value}
                                    </DataRow.Col>
                                );
                            })}
                            {props.buttons.map((button, index) => {
                                return (
                                    <DataRow.Col key={index}>
                                        <Button
                                            variant={button.variant}
                                            onClick={() => button.action(item)}
                                        >
                                            {button.name}
                                        </Button>
                                    </DataRow.Col>
                                );
                            })}
                        </DataRow>
                    );
                })}
            </tbody>
        </Table>
    );
}
