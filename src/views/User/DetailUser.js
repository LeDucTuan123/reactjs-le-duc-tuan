import axios from "axios";
import React from "react";

import { withRouter } from "react-router-dom";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    //componentDidMount là hàm có sẳn trong thư viện react
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id;
            let res = await axios.get(`https://reqres.in/api/users/${id}`);
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })


            console.log('>>> check res user: ', res);

        }

    }

    handleBackUser = () => {
        this.props.history.push('/user')
    }

    render() {
        let { user } = this.state;
        //nếu Object.keys(editTodos).length === 0 trả ra = 0 thì listTodos = true ngược lại = false
        let isEmptyObj = Object.keys(user).length === 0;
        // console.log('check>>>. ', this.props)
        return (
            <>
                <div>Hello detail user id: {this.props.match.params.id} </div>

                {isEmptyObj === false &&
                    <>
                        <div>User Name: {user.first_name} - {user.last_name}
                        </div>
                        <div> User Email: {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                        <div>
                            <button onClick={() => this.handleBackUser()} >Back</button>
                        </div>
                    </>
                }

            </>
        )
    }
}


export default withRouter(DetailUser);