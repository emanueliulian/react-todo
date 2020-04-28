import React from "react";
import TableRow from '@material-ui/core/TableRow';
import classes from './TaskLength.module.css';


const TableLength = (props) => {
    const rowLength = props.tbodyData.map(row => {
        return <TableRow />
    })
    return (
        <div className={classes.TextLength}>{rowLength.length} active {(rowLength.length > 1 )? 'tasks' : 'task'}</div>
    )
}
export default TableLength;