import React from 'react';
import Childcomponent from './ChildComponent';
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
        arrJobs: [
            {
                id: 1,
                title: 'Developer',
                salary: '$500',
            },
            {
                id: 2,
                title: 'Tester',
                salary: '$400',
            },
            {
                id: 3,
                title: 'Project',
                salary: '$1500',
            }
        ]
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
                <Childcomponent
                    name={this.state.firstName}
                    age={19}
                    addresss='binh thuan'
                    arrJobs={this.state.arrJobs}

                />
                {/* <Childcomponent name='child two' />
                <Childcomponent name='child three' /> */}
            </>

        )
    }
}

// module.exports = Mycomponent;
export default Mycomponent; 