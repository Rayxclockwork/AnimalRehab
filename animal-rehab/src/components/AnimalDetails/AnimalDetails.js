import React from "react";


class AnimalDetails extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            logEntry: "",
            medEntry: ""
        };
        this.createLog = this.createLog.bind(this);
        this.createMed = this.createMed.bind(this);
        this.handleLogChange = this.handleLogChange.bind(this);
        this.handleMedChange = this.handleMedChange.bind(this);
    }
    static defaultProps = {
        animal: {
            logEntry: '',
        }
    }
    createLog(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    handleLogChange(e) {
        e.preventDefault()
        const data = {...this.state};
        this.props.onSubmit(data); 
        this.setState({
          logEntry: e.target.value
        });
    }
    createMed(e){
        this.setState({
            [e.target.name]: e.target.value
        })
        
    }
    handleMedChange(e) {
        e.preventDefault()
        const data = {...this.state};
        this.props.onSubmit(data); 
        this.setState({
          medEntry: e.target.value
        });
    }
    render() {
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <fieldset>
                        <input name="title" type="text" placeholder="New Log" value={this.state.logEntry} onChange={this.handleLogChange} />
                        <textarea name="description" placeholder="description" cols="30" rows="5" value={this.state.description} onSubmit={this.handleLogChange}></textarea>
                        <button>new log</button>
                    </fieldset>
                    <fieldset>
                        <input name="title" type="text" placeholder="Med Details" value={this.state.medEntry} onChange={this.handleMedChange} />
                        <textarea name="description" placeholder="description" cols="30" rows="5" value={this.state.description} onSubmit={this.handleMedChange}></textarea>
                        <button>Update Medications</button>
                    </fieldset>
                </form>
            </>
        )
    }
}



export default AnimalDetails;