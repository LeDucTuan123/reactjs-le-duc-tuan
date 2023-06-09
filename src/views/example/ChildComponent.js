import React from 'react';
import './Demo.scss';

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
        showJobs: false
    }


    handleShowhide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }
    //hàm delete user
    handleOnclickDelete = (job) => {
        console.log('Check>>>> ', job);
        this.props.deletejob(job)
    }

    render() {


        let { arrJobs } = this.props;
        let { showJobs } = this.state
        // let check = showJobs === true ? 'True' : 'false'
        // // console.log("check = ", check);
        return (
            <>

                {showJobs === false ?
                    <div>
                        <button className="btn-show" onClick={() => this.handleShowhide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    // if (item.salary >= 500) {
                                    return (

                                        <div key={item.id}>
                                            {item.title} - {item.salary}$ <> </>
                                            <span onClick={() => this.handleOnclickDelete(item)}>X</span>
                                        </div>
                                    )
                                    // }

                                })
                            }
                        </div>
                        <div >
                            <button onClick={() => this.handleShowhide()}>Hide</button>
                        </div>
                    </>
                }
            </>

        )
    }
}

// module.exports = Mycomponent;
export default Childcomponent; 