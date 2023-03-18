import React from "react";
import { withRouter } from "react-router";

import color from "../HOC/color";

class Home extends React.Component {
    //hàm này là hàm có sẳn trong thư viện withRouter
    componentDidMount() {
        setTimeout(() => {
            //nhấn vào trang home sau 3s sẽ tự chuyển qua trang todo
            this.props.history.push('/todo')
        }, 3000);
    }

    render() {
        return (
            <>
                <div>Hello Tuấn</div>
            </>
        )
    }
}

// export default withRouter(Home);
export default color(Home);