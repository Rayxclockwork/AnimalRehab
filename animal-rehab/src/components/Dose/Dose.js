import React, { Component } from 'react';

class Dose extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            weight: '',
            dilution: '',
            results: 'Hello',
        }
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        console.log(this.state);
        console.log(this.props.medicine);
    }

    render() {
        return (
            <div className='wrapper'>
                <div className='form-wrapper'>
                    <h1>Find Meds</h1>

                    <form onSubmit={this.handleSubmit} noValidate>
                        <div className='animalType'>
                            <label htmlFor='type'>Animal Type</label>
                            <input type='text' className='' placeholder='Type Of Animal' type='text' name='type' noValidate onChange={this.handleChange}>
                            </input>
                        </div>
                        <div className='animalWeight'>
                            <label htmlFor='weight'>Animal Weight</label>
                            <input type='text' className='' placeholder='Weight in grams' type='text' name='weight' noValidate onChange={this.handleChange}>
                            </input>
                        </div>
                        <div className='waterDilution'>
                            <label htmlFor='dilution'>Water Dilution</label>
                            <input defaultValue='100' type='int' ref={this.input} className='' placeholder='Water Dilution' type='text' name='dilution' noValidate onChange={this.handleChange}>
                            </input>
                        </div>
                        
                        <select required name="inputDay">
                        <option value="" hidden>Antibiotic</option>
                        <option value="1"> SMZ(Bactrim)</option>
                        <option value="2"> Clavamox(Augmentin)</option>
                        <option value="3"> Clindamycin</option>
                        <option value="4"> Metronidazole(Flagyl)</option>
                        <option value="5"> Ciprofloxacin</option>
                        <option value="6"> Dicloxacillin(Cloxoclan)</option>
                        </select>

                        
                        <select required name="inputDay">
                        <option value="" hidden>Pain</option>
                        <option value="1"> Tramadol</option>
                        <option value="2"> Buprenorphine</option>
                        <option value="3"> Metacam</option>
                        </select>

                        
                        <select required name="inputDay">
                        <option value="" hidden>Miscellaneous</option>
                        <option value="1"> Prednisone</option>
                        <option value="2"> Prilosec(Omeprazole)</option>
                        <option value="3"> Dexamethasone(Alin)</option>
                        <option value="4"> Alprazolam (Xanax)</option>
                        <option value="5"> Baycox(Toltrazuril)</option>
                        <option value="6"> Versed(Midazolam)</option>
                        <option value="7"> Capstar(Nitenpryan)</option>
                        <option value="8"> Simethicone</option>
                        <option value="9"> Valium(Diazepam)</option>
                        <option value="10"> Vitamin K</option>
                        <option value="11"> Diphenhydramine(Benadryl)</option>
                        </select>

                        <div className='findMeds'>
                            <button type='submit'>Find Meds</button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}

export default Dose;
