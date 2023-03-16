import React from 'react';
import Childcomponent from './ChildComponent';
import AddComponent from './addComponent';
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

        arrJobs: [
            {
                id: 1,
                title: 'Developer',
                salary: '500',
            },
            {
                id: 2,
                title: 'Tester',
                salary: '400',
            },
            {
                id: 3,
                title: 'Project',
                salary: '1500',
            }
        ]
    }

    addNewJob = (job) => {
        console.log('Check123: ', job);
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteJob = (job) => {
        let currentjob = this.state.arrJobs;
        currentjob = currentjob.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currentjob
        })
    }



    render() {
        // console.log(this.state);

        return (

            <>
                <AddComponent
                    addNewJob={this.addNewJob}
                />



                <Childcomponent

                    arrJobs={this.state.arrJobs}
                    deletejob={this.deleteJob}
                />
                {/* <Childcomponent name='child two' />
                <Childcomponent name='child three' /> */}
            </>

        )
    }
}

// module.exports = Mycomponent;
export default Mycomponent; 