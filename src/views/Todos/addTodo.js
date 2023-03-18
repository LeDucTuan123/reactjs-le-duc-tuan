import React from "react";

import { toast } from 'react-toastify';


class AddTodo extends React.Component {
    state = {
        id: '',
        title: ''
    }

    handleOnchanetitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }


    handleAddTodo = () => {
        // let so = Math.floor(Math.random() * 4);
        //hàm này dùng nếu ko nhập text vào thì thông báo
        if (!this.state.title) {
            // if (so === 1) {
            //     toast.error("Vui lòng nhập Nội dung")
            // } if (so === 2) {
            //     toast.error("Nhập nội dung vào cđm")
            // }
            // if (so === 3) {
            //     toast.error("đừng để t nói lần thứ 3")
            // }
            toast.error("Vui lòng nhập Nội dung")

            // console.log(so);
            return;
        }

        let todo1 = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title
        }

        this.props.addNewTodo(todo1);
        //sau khi thêm thì set form lại
        this.setState({
            title: ''
        })
        // console.log('check: ', todo1);

    }


    render() {
        let { title } = this.state;
        return (
            <div className='add-todo'>
                <input type='text' value={title}
                    onChange={(event) => this.handleOnchanetitle(event)}
                />
                <button type='button' className='add'
                    onClick={() => this.handleAddTodo()}>Add</button>
            </div>
        )
    }
}

export default AddTodo;