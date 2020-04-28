import React, {Component} from "react";
import classes from './TableConstructor.module.css';
import TableHead from "../TableConstructor/TableHead/TableHead";
import TableBody from "./TableBody/TableBody";
import AddToList from "../AddToList/AddToList";
import CurrentDate from "../UI/CurrentDate/CurrentDate";
import TableLength from "../UI/TaskLength/TaskLength";
import EditTodo from "../EditToDo/EditToDo";
import Modal from "../UI/Modal/Modal";

// Material UI Table
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
// import TableCell from "@material-ui/core/TableCell";
// import Button from '@material-ui/core/Button';

class tableConstructor extends Component {
    state = {
        tableHead: [
            {
                status: 'Status',
                packageName: 'ToDo Title',
                date: 'Added on',
                actions: 'Actions',
            }
        ],
        tableBody: [
            {
                status: 'in progress',
                todoTitle: '-',
                dateAdded: new Date().toLocaleDateString(),
            }
        ],
        showModal: false,
        requiredItem: 0,
    }

    deleteRowHandler = (rowIndex) => {
        const tableBodyRow = this.state.tableBody;
        tableBodyRow.splice(rowIndex, 1);
        this.setState({tableBody: tableBodyRow})
    }

    handleSubmit = task => {
        this.setState({tableBody: [...this.state.tableBody, task]})
    }

    modalCancelHandler = () => {
        this.setState({showModal: false})
    }

    showModalHandler = (index) => {
        this.setState({
            showModal: true,
            requiredItem: index
        })
    }
    saveModalDetails = (item) => {
        const requiredItem = this.state.requiredItem;
        let tempTableBody = this.state.tableBody;
        console.log(tempTableBody)
        tempTableBody[requiredItem] = item;
        this.setState({tableBody: tempTableBody})
    }

    render() {
        const requiredItem = this.state.requiredItem;
        let modalData = this.state.tableBody[requiredItem]

        return (
            <div className={classes.TableWrapper}>
                <CurrentDate />
                <TableLength tbodyData={this.state.tableBody} />
                <AddToList handleSubmit={this.handleSubmit} />
                <TableContainer component={Paper}>
                    <Table aria-label="simple table">
                        <TableHead theadData={this.state.tableHead}/>
                        <TableBody
                            tbodyData={this.state.tableBody}
                            deleteRow={this.deleteRowHandler}
                            openModal={this.showModalHandler}/>
                    </Table>
                </TableContainer>
                <Modal show={this.state.showModal} modalClosed={this.modalCancelHandler} >
                    <EditTodo modalClosed={this.modalCancelHandler}
                              saveModalDetails={this.saveModalDetails}
                              todoTitle={modalData.todoTitle}
                              status={modalData.status}
                              dateAdded={modalData.dateAdded}/>
                </Modal>
            </div>
        )
    }
}

export default tableConstructor;