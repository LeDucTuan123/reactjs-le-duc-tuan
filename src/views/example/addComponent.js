import react from 'react';

class addComponent extends react.Component {


    state = {
        title: '',
        salary: '',
    }

    handleChangetitlejob = (event) => {
        this.setState({
            title: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        //ham nay dùng để khi nhấn nút submit ko load lại web
        event.preventDefault();
        //hàm này dùng nếu ko nhập text vào thì thông báo
        if (!this.state.title || !this.state.salary) {
            alert('Vui lòng nhập thông tin vào');
            return;
        }
        let so = Math.floor(Math.random() * 100);
        let so1 = so <= 5 ? 'chúc mừng bạn đã trúng giải thưởng 100tr' : 'Trúng cái nịt kkk';
        console.log(so1);
        this.props.addNewJob({
            id: so,
            title: this.state.title,
            salary: this.state.salary,

        });

        // if(this.)    
        //hàm này dùng khi nhấn nút submit thì sẽ reset form lại
        this.setState({
            title: '',
            salary: ''
        })

    }
    render() {
        return (
            <>
                <form action="/action_page.php">
                    <label htmlFor="fname">Jobs title:</label><br />
                    <input type="text" value={this.state.title}
                        onChange={(event) => this.handleChangetitlejob(event)} /><br />
                    <label htmlFor="lname">Salary:</label><br />
                    <input type="text" value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)} /><br />


                    <input type="submit" value="Submit"
                        onClick={(event) => this.handleSubmit(event)} />
                </form>
            </>
        )
    }
}

export default addComponent; 