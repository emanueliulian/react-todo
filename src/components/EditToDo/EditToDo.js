import React, {Component} from "react";
import Button from "../UI/Button/Button";

class EditTodo extends Component {
    state = {
        status: 'in progress',
        todoTitle: '',
        dateAdded: new Date().toLocaleDateString(),
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            todoTitle: nextProps.todoTitle,
            status:  nextProps.status,
            dateAdded: new Date().toLocaleDateString(),
        })
    }

    titleHandler(e) {
        this.setState({todoTitle: e.target.value})
    }

    handleSave = () => {
        const item = this.state;
        this.props.saveModalDetails(item);
    }

    handleSelectChange = (event) => {
        this.setState({status: event.target.value})
    }

    render() {
        return (
            <div>
                <input type="text"
                       value={this.state.todoTitle}
                       onChange={(e) => this.titleHandler(e)} />

                <select name="" id="" value={this.state.status} onChange={this.handleSelectChange}>
                    <option value="inProgress">in progress</option>
                    <option value="completed">competed</option>
                </select>
                <br />
                <Button btnType="CancelButton" clicked={this.props.modalClosed}>CANCEL</Button>
                <Button btnType="SuccessButton" clicked={this.props.modalClosed} >
                    <span onClick={() => this.handleSave()}>Update Task</span>
                </Button>
            </div>

        )
    }
}

export default EditTodo;