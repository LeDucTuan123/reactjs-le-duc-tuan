//file nayf laf redux
const initState = {
    users: [
        { id: 1, name: 'Tuan' },
        { id: 2, name: 'TUan le' }
    ],
    posts: []
}

//state này là nơi lưu trữ của thằng redux
const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>>run into delete: ', action);

            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)

            return { ...state, users };//copy state lại và gán cho user
        case 'CREATE_USER':
            console.log("check create");
            let id = Math.floor(Math.random() * 100)
            let user = { id: id, name: `random - ${id}` }
            return { ...state, users: [...state.users, user] }

        // break
        default:
            return state;
    }


}


export default rootReducer;