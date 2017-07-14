import React from 'react';
import {connect} from 'react-redux';
import {NavLink, withRouter} from 'react-router-dom';

class addStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      inputLength: false,
      submit_empty: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({inputValue: event.target.value});
    if (this.state.inputValue.length > 16) {
      this.setState({inputLength: true});
    } else {
      this.setState({inputLength: false})
    }
    if (this.state.inputValue) {
      this.setState({submit_empty: false});
    }
  }
  handleSubmit(event) {
    console.log("It's working if you see this:  " + this.state.inputValue);
    this.setState({inputValue: ""})
    if (!this.state.inputValue) {
      this.setState({submit_empty: true});
    } else {
      this.setState({submit_empty: false});
    }
    event.preventDefault()

    if (!this.state.inputLength && !this.state.submit_empty) {};
  }

  render() {
    const oError = <div className="alert alert-warning">
      Name Required</div>
    return (
      <div className="well">
        <form className="form-horizontal" onSubmit= {this.handleSubmit}>
          <fieldset>
            <legend>New Student</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Name</label>
              <div className="col-xs-10">
                <input className="form-control" type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                <div className='warning'>
                  {this.state.submit_empty? (<div className="alert alert-warning"> Name Required</div>):(null)}
                </div>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" disabled= {this.state.inputLength} className="btn btn-success">Enroll Student</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>)
        }
      }



      export default connect()(addStudent)
