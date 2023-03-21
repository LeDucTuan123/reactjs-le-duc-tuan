import React from "react";
// thư viện này dùng để gọi API
import axios from "axios";
import "./listUser.scss";

import { withRouter } from "react-router-dom";

class ListUser extends React.Component {
    //hamf nayf cua react

    state = {
        ListUser: []
    }

    async componentDidMount() {
        //cach 1
        // axios.get('https://reqres.in/api/users?page=2')
        //     .then(res => {
        //         console.log('>>>chekc res: ', res.data.data);
        //     })
        //cach 2 dung async await
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            ListUser: res && res.data && res.data.data ? res.data.data : []
        })

    }

    handleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    render() {

        let { ListUser } = this.state;

        return (
            <div className="list-user-container">
                <div className="title">
                    All list User
                </div>
                <div className="list-user-content">
                    {/* điều kiện check user */}
                    {ListUser && ListUser.length > 0 &&
                        ListUser.map((item, index) => {
                            return (
                                <div className="child" key={item.id}
                                    onClick={() => this.handleViewDetailUser(item)}
                                >
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        )
    }
}

export default withRouter(ListUser);