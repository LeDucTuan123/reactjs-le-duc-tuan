import React from 'react';

// có 2 kiều component 
// 1 >>>> là function component
//  2 >>> class component

// ddaay là clas component
class Childcomponent extends React.Component {
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
        address: '',
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
        console.log('Check prods>>>>>>', this.props);
        let { name, age, address, arrJobs } = this.props;
        return (

            <>
                <div>Child component {name}</div>
                <div>Child AGE {age}</div>
                <div>Child AGE {address}</div>


                <div className='job-lists'>
                    {
                        arrJobs.map((item, index) => {
                            return (

                                <div key={item.id}>
                                    {item.title} - {item.salary}
                                </div>
                            )
                        })
                    }
                </div>
            </>

        )
    }
}

// module.exports = Mycomponent;
export default Childcomponent; 