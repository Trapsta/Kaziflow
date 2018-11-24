import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AddReview from './add-review';

class Reviews extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAddReviewForm: false
		}
		this.handleAddReview = this.handleAddReview.bind(this);
	}

	handleAddReview() {
	    this.setState({ showAddReviewForm: true });

	    // This probably where you would have an `ajax` call
	    //setTimeout(() => {
	      // Completed of async action, set loading state back
	    //  this.setState({ isLoading: false });
	    //}, 2000);
	  }


	render() {

		const { showAddReviewForm } = this.state;

		if (showAddReviewForm) {
			return (
				<AddReview />
				);
		}

		return (
			<Button
		        bsStyle="primary"
		        disabled={showAddReviewForm}
		        onClick={!showAddReviewForm ? this.handleAddReview : null} >
		        Add review
		      </Button>

			);
		
	}

}

export default Reviews;