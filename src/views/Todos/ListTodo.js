import React from 'react';
import './listTodo.scss';
import AddTodo from './addTodo';

import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            {
                id: 1,
                title: 'Doing 123',
            },
            {
                id: 2,
                title: 'TUan 123',
            },
            {
                id: 3,
                title: 'Cường 123',
            }
        ],
        editTodos: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            //... hàm copy
            listTodos: [...this.state.listTodos, todo]
        })

        //success => màu xanh
        //error => màu đỏ
        //warning => màu cam
        //info => xanh nước biển
        toast.success("Wow so easy!")
    }

    ///delete
    handleDeleteTodo = (todo) => {
        let current = this.state.listTodos;
        current = current.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: current
        })
        toast.success("Delete success")
    }

    //Edit
    handleEdit = (todo) => {
        let { editTodos, listTodos } = this.state;

        let isEmptyObj = Object.keys(editTodos).length === 0;

        //khi nhấn nút lưu
        if (isEmptyObj === false && editTodos.id === todo.id) {
            let listTodoCopy = [...listTodos];

            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id));

            listTodoCopy[objIndex].title = editTodos.title

            this.setState({
                listTodos: listTodoCopy,
                //sau khi luu sẽ chuyển lại dang edit
                editTodos: {}
            })
            toast.success("Update success");
            return;
        }
        //khi nhấn nút edit
        this.setState({
            editTodos: todo
        })



    }

    handleEditOnchane = (event) => {
        let editTodoCopy = { ...this.state.editTodos };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodos: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodos } = this.state;

        //đây là 1 dk so sánh
        //nếu Object.keys(editTodos).length === 0 trả ra = 0 thì listTodos = true ngược lại = false
        let isEmptyObj = Object.keys(editTodos).length === 0;
        // console.log(isEmptyObj);

        //let listTodos = this.state.listTodos;
        return (
            <>
                <p>
                    Simple ToDo Apps ReactJS Tuấn
                </p>

                <div className='list-todo-container'>
                    <AddTodo
                        addNewTodo={this.addNewTodo}
                    />
                    <div className='list-todo-content'>
                        {listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (



                                    <div className='todo-child' key={item.id}>

                                        {/* <input value={item.title} /> */}
                                        {isEmptyObj === true ?
                                            <span>{index + 1} - {item.title}</span> //nếu = true thì ỉn ra
                                            :// nếu = false thì in ra thằng dưới
                                            <>

                                                {editTodos.id === item.id ?//check nếu id = nhau thì ỉn ra thằng đầu tiên ngược lại ra thằng thứ 2
                                                    <span>
                                                        {index + 1} - <input value={editTodos.title}
                                                            onChange={(event) => this.handleEditOnchane(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }
                                            </>

                                        }

                                        <button className='edit'
                                            onClick={() => this.handleEdit(item)}
                                        >
                                            {isEmptyObj === false && editTodos.id === item.id ?
                                                'Save' : 'Edit'
                                            }
                                        </button>
                                        <button className='delete'
                                            onClick={() => this.handleDeleteTodo(item)} >Delete</button>

                                    </div>
                                )
                            })

                        }


                    </div>

                </div>
            </>

        )

    }
}


export default ListTodo;