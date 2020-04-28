import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'
import classes from './TableBody.module.css'

// Material UI Table
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const tableBody = (props) => {
    const bodyRowData = props.tbodyData.map((person, index) => {
        return (
            <TableRow key={index} >
                <TableCell>{person.status}</TableCell>
                <TableCell>{person.todoTitle}</TableCell>
                <TableCell>{person.dateAdded}</TableCell>
                <TableCell>
                    <FontAwesomeIcon className={classes.EditBtn} icon={faEdit} onClick={() => props.openModal(index)}/>
                    <FontAwesomeIcon
                        className={classes.DeleteBtn}
                        onClick={() => props.deleteRow(index)}
                        icon={faTrashAlt} />
                </TableCell>
            </TableRow>
        )
    });

    return (
        <TableBody>
            {bodyRowData}
        </TableBody>
    )
}

export default tableBody;