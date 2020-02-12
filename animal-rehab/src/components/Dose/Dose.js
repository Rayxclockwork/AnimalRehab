import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Dose extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: '',
            weight: '',
            dilution: '',
            medAntibioticId: '',
            medPainRelieverId: '',
            medMiscId: '',
            volumesToGive: null
        }

        this.calculateVolumesToGive = this.calculateVolumesToGive.bind(this);
        this.renderDoseForm = this.renderDoseForm.bind(this);
    }

    calculateVolumesToGive(dose, weight, dilution, pillStrength) {
        return (dose / 1000) * weight * dilution / pillStrength;
    }

    handleChange = (e) => {
        e.preventDefault();

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const medAntibiotic = this.props.medicine.find(med => String(med.id) === this.state.medAntibioticId);
        const medPainReliever = this.props.medicine.find(med => String(med.id) === this.state.medPainRelieverId);
        const medMisc = this.props.medicine.find(med => String(med.id) === this.state.medMiscId);

        const newVolumesToGive = [medAntibiotic, medPainReliever, medMisc]
            .filter(med => med)
            .map(med => {
                return {
                    type: med.type,
                    name: med.name,
                    volumeToGive: this.calculateVolumesToGive(med.dose, this.state.weight, this.state.dilution, med.pillStrength)
                }
            })


        this.setState({
            volumesToGive: newVolumesToGive
        }, () => console.log('wait', this.state));
    }

    renderDoseForm() {
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
                            <label htmlFor='weight'>Animal Weight (grams)</label>
                            <input type='text' className='' placeholder='Weight in grams' type='text' name='weight' noValidate onChange={this.handleChange}>
                            </input>
                        </div>
                        <div className='waterDilution'>
                            <label htmlFor='dilution'>Water Dilution (cc)</label>
                            <input defaultValue='100' type='int' ref={this.input} className='' placeholder='Water Dilution' type='text' name='dilution' noValidate onChange={this.handleChange}>
                            </input>
                        </div>
                        
                        <select required name="medAntibioticId" onChange={this.handleChange}>
                            <option value="">--Antibiotic--</option>
                            {this.props.medicine.map(med => {
                                if (med.type === 'antibiotic') {
                                    return (
                                        <option key={med.id} value={med.id}>{med.name}</option>
                                    );
                                }
                            })}
                        </select>

                        <select required name="medPainRelieverId" onChange={this.handleChange}>
                            <option value="">--Pain Reliever--</option>
                            {this.props.medicine.map(med => {
                                if (med.type === 'pain-reliever') {
                                    return (
                                        <option key={med.id} value={med.id}>{med.name}</option>
                                    );
                                }
                            })}
                        </select>

                        <select required name="medMiscId" onChange={this.handleChange}>
                            <option value="" hidden>--Miscellaneous--</option>
                            {this.props.medicine.map(med => {
                                if (med.type === 'misc') {
                                    return (
                                        <option key={med.id} value={med.id}>{med.name}</option>
                                    );
                                }
                            })}
                        </select>

                        <div className='findMeds'>
                            <button type='submit'>Find Meds</button>
                        </div>
                    </form>
                </div>
            </div >
        );
    }

    render() {
        if (this.props.medicine) {
            return this.renderDoseForm();
        } else {
            return <Redirect to="/" />
        }
    }
}

export default Dose;
