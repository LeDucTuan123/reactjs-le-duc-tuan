import React from 'react';

// có 2 kiều component 
// 1 >>>> là function component
//  2 >>> class component

// ddaay là clas component
class Mycomponent extends React.Component {
    /**
     * 
     * JSX => return block ( nos chỉ return về 1 khối )
     *  muốn có 2 div ở ngoài thì dùng fragment gõ <> </>
     * 
     * 
     */
    //state key : value


    state = {
        firstName: '',
        lastName: '',
    }
    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        alert('Hello');
        console.log('fistName: ', this.state.firstName);
        console.log('LastName: ', this.state.lastName);
    }


    render() {
        // console.log(this.state);

        return (

            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">First name:</label><br />
                    <input type="text" value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)} /><br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input type="text" value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)} /><br />
                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>

            </>

        )
    }
}

// module.exports = Mycomponent;
export default Mycomponent; 