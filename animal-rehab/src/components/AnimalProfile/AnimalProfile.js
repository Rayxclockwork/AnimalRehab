import React from 'react';
import AnimalProfileChild from './AnimalProfileChild'


class AnimalProfile extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      logDetails: [],
    }
    this.logCreateHandler = this.logCreateHandler.bind(this);
  }

  logCreateHandler(event, logDetail) {
    event.preventDefault();
    const sortedLogs = this.state.logDetails.sort((a,b) => a.id < b.id)
    let newId
    if (sortedLogs[0]){
      newId = sortedLogs[sortedLogs.length-1].id
    } 
    else{
      newId = 1
    }
    const newLog = {
      description: logDetail,
      date: String(Date()),
      id: newId
    }
    this.setState({
        logDetails: this.state.logDetails.concat([newLog])
    }, ()=> console.log(this.state.logDetails))

  }
  // submitLog(event){
  //   event.preventDefault();
    
  //   this.state.onSubmit(this.state.logDetail);
  // }
  
  render(){
    return<AnimalProfileChild logDetails = {this.state.logDetails} animals={this.props.animals} logCreateHandler ={this.logCreateHandler}/>
}

}
export default AnimalProfile