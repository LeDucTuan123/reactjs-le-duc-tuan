import React from "react";
// import { withRouter } from "react-router";
import logo from "../../assets/images/ong5.png";
import color from "../HOC/color";

import { connect } from "react-redux";

class Home extends React.Component {
    //hàm này là hàm có sẳn trong thư viện withRouter
    componentDidMount() {
        setTimeout(() => {
            //nhấn vào trang home sau 3s sẽ tự chuyển qua trang todo
            this.props.history.push('/todo')
        }, 3000);
    }

    handleCreateUser = () => {
        this.props.addCreateRedux();
    }


    handleDeleUser = (user) => {
        console.log("check >>delêt", user);
        this.props.deleteUserRedux(user);
    }

    render() {
        console.log("check prod redux: ", this.props.dataRedux);

        let listUser = this.props.dataRedux;

        return (
            <>
                <div>Hello Tuấn</div>
                <div>
                    <img style={{ height: '350px' }} src={logo} />
                </div>

                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name}
                                    <button onClick={() => this.handleDeleUser(item)}>X</button>

                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleCreateUser()}>add</button>
                </div>
            </>
        )
    }
}
//state này là của redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addCreateRedux: () => dispatch({ type: 'CREATE_USER' }),
    }
}



// export default withRouter(Home);
//connec là ví như là sợi dây liên kết giữa react và redux
export default connect(mapStateToProps, mapDispatchToProps)(color(Home));