import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Checkbox, Button } from 'react-bootstrap';
import FieldGroup from '../shared/field-group';
import PropTypes from 'prop-types';


class AddReview extends Component {

	constructor(props) {
		super(props);
		this.state = {
			
		}
	}

	render() {
		
		  return (


			  <form>
			    <FieldGroup
			      id="formControlsText"
			      type="text"
			      label="Company Name"
			      placeholder="Enter text"
			    />	

			    <FieldGroup
			      id="formControlsPosition"
			      type="text"
			      label="Job Title"
			      placeholder="Marketing Manager"
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
			      label="Review Headline"
			      placeholder="e.g. Best Company Ever!"
			    />

			    <FormGroup controlId="formControlsTextarea">
			      <ControlLabel>Your Review</ControlLabel>
			      <FormControl componentClass="textarea" placeholder="min. 200 characters" />
			    </FormGroup>

			    <Checkbox checked readOnly>
			      I confirm to the best of my knowledge that this review of my experience at this company is truthful.
			    </Checkbox>

			    <Button bsStyle="success" type="submit">Add Review</Button>
			  </form>
			);

		}


}

AddReview.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  // text: PropTypes.string.isRequired
}



export default AddReview;