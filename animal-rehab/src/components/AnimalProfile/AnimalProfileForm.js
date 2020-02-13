import React from "react";
// import { Link } from 'react-router-dom';

class AnimalProfileForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logDetail: '',
    }
  
    this.logChangeHandler = this.logChangeHandler.bind(this);
  }

  logChangeHandler(event){
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  render() {
    return (
      <>
        <form onSubmit={(event)=> this.props.logCreateHandler(event,this.state.logDetail)}>
          <fieldset>
            <textarea name="logDetail" type="text" placeholder="daily logs" value={this.state.logDetails} onChange={this.logChangeHandler} />
            <input type="submit" placeholder="submit" />
          </fieldset>
        </form>

      </>
    )
  }
}
export default AnimalProfileForm