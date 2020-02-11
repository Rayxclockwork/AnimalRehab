/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class LogIn extends Component {
    render() {
        return (
            <Router>
                <div className='login'>

                    <div className='loginAside'></div>

                    <div className='loginForm'>

                        <div className='swapLogin'>
                            <a href='#' className='pageSwapTab'>Sign In</a>
                            <a href='#' className='pageSwapTab pageSwapTabActive'>Sign Up</a>
                        </div>

                        <div className='titleForm'>
                            <a href='#' className='titleFormLink'>Sign In</a> or <a href='#' className='titleFormLink titleFormLinkActive'>Register</a>
                        </div>

                        <div className='middleForm'>
                            <form className='formFields' onSubmit={this.handleSubmit}>
                                <div className='formField'>
                                    <label className='FormFieldLabel' htmlFor='name'>Full Name</label>
                                    <input type='text' id='name' className='formFieldInput' placeholder='Enter your name...' name='name' />
                                </div>

                                <div className='formField'>
                                    <label className='FormFieldLabel' htmlFor='password'>Password</label>
                                    <input type='password' id='password' className='formFieldInput' placeholder='Password...' name='password' />
                                </div>

                                <div className='formField'>
                                    <label className='FormFieldLabel' htmlFor='email'>Email Address</label>
                                    <input type='email' id='email' className='formFieldInput' placeholder='Please enter your email...' name='email' />
                                </div>

                                <div className='formField'>
                                    <label className='formFieldCheckboxLabel'>
                                        <input className='formFieldCheckbox' type='checkbox' name='hasAgreed' /> I have read and agree to the <a href='' className='formFieldTermsLink'>terms of service</a>
                                    </label>
                                </div>

                                <div className='formField'>
                                    <button className='formFieldButton formButton'>Register</button><a href='#' className='formFieldLink'>Already have an account</a>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </Router>
        )
    }
}

export default LogIn;