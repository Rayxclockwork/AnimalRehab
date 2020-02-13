import React from "react";
import { Link } from 'react-router-dom';

class AnimalProfileForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logDetails: " ",
      medDetails: " ",
    }
    this.medChangeHandler = this.medChangeHandler.bind(this);
    this.logChangeHandler = this.logChangeHandler.bind(this);
    this.submitLog = this.submitLog.bind(this);
    this.submitMed = this.submitMed.bind(this);
  }

  logChangeHandler(event){
    this.setState({
      [event.target.logDetails]: event.target.value
    })
  }
  medChangeHandler(event){
    this.setState({
      [event.target.medDetails]: event.target.value
    })
  }
  submitLog(event){
    event.preventDefault();
    this.props.onSubmit(this.state.logDetails);
  }
  submitMed(event){
    event.preventDefault();
    this.props.onSubmit(this.state.medDetails);
  }

  render(){
    return(
    <>
    <form onSubmit={this.submitMed}>
        <fieldset>
            <textarea name = " medicine details" type="text" placeholder="med details" cols=
            '30' rows ='10' value={this.state.medDetails} onChange={this.medChangeHandler}/>
            <input type="submit" placeholder="submit"/>        
        </fieldset>            
    </form>  
    <br>

    </br>
    <form onSubmit={this.submitLog}>
        <fieldset>
            <textarea name="logDetails" type="text" placeholder="daily logs" value={this.state.logDetails} onChange={this.logChangeHandler}/>
            <input type="submit" placeholder="submit"/>            
        </fieldset>            
    </form>  

  </>
)
 }
  }
export default AnimalProfileForm