import react from 'react';

class addComponent extends react.Component {


    state = {
        titlejob: '',
        salary: '',
    }

    handleChangetitlejob = (event) => {
        this.setState({
            titlejob: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('fistName: ', this.state.titlejob);
        console.log('LastName: ', this.state.salary);
    }
    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Jobs title:</label><br />
                    <input type="text" value={this.state.titlejob}
                        onChange={(event) => this.handleChangetitlejob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default addComponent; 