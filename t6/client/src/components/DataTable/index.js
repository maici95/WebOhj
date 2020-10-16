


import React from 'react';

import { Table, Button } from 'react-bootstrap';
import DataRow from './DataRow';

export default function DataTable(props) {

    return (
        <Table>
            <thead>
                <DataRow>
                    {props.headers.map((item, index) =>  {
                        return (
                            <DataRow.HCol key={index}>
                                {item}
                            </DataRow.HCol>
                        );
                    })}
                </DataRow>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <DataRow key={index}>
                            <DataRow.Col>{index + 1}</DataRow.Col>
                            {props.keys.map((key, index) => {
                                return (
                                    <DataRow.Col key={index}>
                                        {item[key]}
                                    </DataRow.Col>
                                );
                            })}
                            {props.actions.map((action, index) => {
                                return (
                                    <DataRow.Col key={index}>
                                        <Button
                                            onClick={() => action.action(item)}
                                        >
                                            {action.name}
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
