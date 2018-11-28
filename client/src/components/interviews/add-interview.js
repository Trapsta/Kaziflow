import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import FieldGroup from '../shared/field-group';


class AddInterview extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		
		  return (


			  <form>

			  	 <FormGroup>
			      <ControlLabel>Add Interview</ControlLabel>
			      <FormControl.Static>This information will be anonymized. It can not be traced back to you.</FormControl.Static>
			    </FormGroup>

			  	<FieldGroup
			      id="formControlsPosition"
			      type="text"
			      label="Job Title"
			      placeholder="Marketing Manager"
			    />

			    <FieldGroup
			      id="formControlsCompany"
			      type="text"
			      label="Company Name"
			      placeholder="Enter text"
			    />  
		    

			    <FormGroup controlId="formControlsSelect">
			      <ControlLabel>Employment Type</ControlLabel>
			      <FormControl componentClass="select" placeholder="select">
			        <option value="full-time">Full Time</option>
			        <option value="part-time">Part Time</option>
			        <option value="intern">Intern</option>
			      </FormControl>
			    </FormGroup>

			    
			    <FormGroup controlId="formControlsTextarea">
			      <ControlLabel>Describe the Interview Process</ControlLabel>
			      <FormControl componentClass="textarea" placeholder="min. 200 characters" />
			    </FormGroup>

			    <FormGroup controlId="formControlsTextarea">
			      <ControlLabel>Interview Questions</ControlLabel>
			      <FormControl componentClass="textarea" placeholder="min. 100 characters" />
			    </FormGroup>

			    <Checkbox checked readOnly>
			      Did you get the job?
			    </Checkbox>

			    <Button bsStyle="success" type="submit">Add Interview</Button>
			  </form>
			);

		}


}




export default AddInterview;