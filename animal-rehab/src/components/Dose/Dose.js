import React, { Component } from 'react';

class Dose extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            weight: '',
            dilution: '',
            results: 'Hello',
            formErrors: {
                name: '',
                weight: '',
                dilution: ''
            }
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

    }

    render() {
        return <div className='wrapper'>
            <div className='form-wrapper'>
                <h1>Find Meds</h1>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='animalType'>
                        <label htmlFor='animalType'>Animal Type</label>
                        <input type='text' className='' placeholder='Type Of Animal' type='text' name='animalType' noValidate onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className='animalWeight'>
                        <label htmlFor='animalWeight'>Animal Weight</label>
                        <input type='text' className='' placeholder='Weight in grams' type='text' name='animalWeight' noValidate onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className='waterDilution'>
                        <label htmlFor='waterDilution'>Water Dilution</label>
                        <input type='text' className='' placeholder='Water Dilution' type='text' name='waterDilution' noValidate onChange={this.handleChange}>
                        </input>
                    </div>
                    <div className="radio">
                            <input type="radio" name="medType" />
                            Antibiotic
                            <input type="radio" name="medType" />
                            Pain
                            <input type="radio" name="medType" />
                            Steroid
                    </div>
                    <div className='findMeds'>
                        <button type='submit'>Find Meds</button>
                    </div>
                </form>
            </div>
        </div>
    }
}

export default Dose;