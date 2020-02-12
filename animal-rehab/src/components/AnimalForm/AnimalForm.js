import React, { Component } from 'react';

class AnimalForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.animal.name,
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    static defaultProps = {
        animal: {
            name: '',
        }
    }

    changeHandler(event) {

        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler(event) {
        event.preventDefault();
        const data = {...this.state};
        this.props.onSubmit(data);
       
    }

    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <input name="name" type="text" placeholder="animal" value={this.state.name} onChange={this.changeHandler} />
                        <button>Submit</button>
                    </fieldset>
                </form>
            </>
        )
    }
}

export default AnimalForm