import React, {Component} from "react";
import Button from "@material-ui/core/Button";
// import Button from '../UI/Button/Button';
import classes from './AddToList.module.css';

class addToList extends Component {
    initialState = {
        status: 'in progress',
        todoTitle: '',
        dateAdded: new Date().toLocaleDateString(),
    }

    state = this.initialState;

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    }

    submitTask = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState)
    }

    render() {
        const { todoTitle } = this.state;

        return (
            <div className={classes.AddToList}>
                <h1>Enter a task</h1>
                <form className={classes.FormWrapper}>
                    <div className={classes.InputRow}>
                        <label htmlFor="taskTitle">Task name</label>
                        <input
                            type="text"
                            name="todoTitle"
                            id="taskTitle"
                            value={todoTitle}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div>
                        <Button
                            variant="contained"
                            color="primary"
                            disabled={!this.state.todoTitle}
                            onClick={this.submitTask}>
                            Add Task
                        </Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default addToList;