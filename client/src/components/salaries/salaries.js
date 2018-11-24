import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AddSalary from './add-salary';

class Salaries extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAddSalaryForm: false
		}
		this.handleAddSalary = this.handleAddSalary.bind(this);
	}

	handleAddSalary() {
	    this.setState({ showAddSalaryForm: true });

	    // This probably where you would have an `ajax` call
	    //setTimeout(() => {
	      // Completed of async action, set loading state back
	    //  this.setState({ isLoading: false });
	    //}, 2000);
	  }


	render() {

		const { showAddSalaryForm } = this.state;

		if (showAddSalaryForm) {
			return (
				<AddSalary />
				);
		}

		return (
			<Button
		        bsStyle="primary"
		        disabled={showAddSalaryForm}
		        onClick={!showAddSalaryForm ? this.handleAddSalary : null} >
		        Add Salary
		      </Button>

			);
		
	}

}

export default Salaries;