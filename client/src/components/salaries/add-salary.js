import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import FieldGroup from '../shared/field-group';


class AddSalary extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		
		  return (


			  <form>

			  <FormGroup>
			      <ControlLabel>Add Salary</ControlLabel>
			      <FormControl.Static>This information will be anonymized. It can not be traced back to you.</FormControl.Static>
			    </FormGroup>

			  <FieldGroup
			      id="formControlsRole"
			      type="text"
			      label="Job Title"
			      placeholder="e.g. Product Specialist"
			    />	 


			    <FieldGroup
			      id="formControlsCompany"
			      type="text"
			      label="Company Name"
			      placeholder="Enter text"
			    />	   
			    

			    <Checkbox checked readOnly>
			      Current Employer
			    </Checkbox>
		    

			    <FormGroup controlId="formControlsSelect">
			      <ControlLabel>Employment Type</ControlLabel>
			      <FormControl componentClass="select" placeholder="select">
			        <option value="full-time">Full Time</option>
			        <option value="part-time">Part Time</option>
			        <option value="intern">Intern</option>
			      </FormControl>
			    </FormGroup>

			    <FieldGroup
			      id="formControlsText"
			      type="text"
			      label="Gross Pay per month in KES"
			      placeholder="145,600"
			    />

			    
			    <Checkbox checked readOnly>
			      I confirm to the best of my knowledge that this information is correct.
			    </Checkbox>

			    <Button bsStyle="success" type="submit">Add Salary</Button>
			  </form>
			);

		}


}




export default AddSalary;