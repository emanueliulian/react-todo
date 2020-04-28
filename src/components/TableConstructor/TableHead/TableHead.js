import React from "react";

// Material UI THead
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#e0e0e0',
        color: theme.palette.common.black,
        fontSize: 14
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const tableHead = (props) => {
    const headRowData = props.theadData.map((person, index) => {
        return (
            <TableRow key={index}>
                    <StyledTableCell>{person.status}</StyledTableCell>
                    <StyledTableCell>{person.packageName}</StyledTableCell>
                    <StyledTableCell>{person.date}</StyledTableCell>
                    <StyledTableCell>{person.actions}</StyledTableCell>
            </TableRow>
        )
    });
    return (
        <TableHead>
            {headRowData}
        </TableHead>
    )
}

export default tableHead;