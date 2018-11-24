import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import AddInterview from './add-interview';
import Interview from './interview';
import { Panel  } from 'react-bootstrap';

class Interviews extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAddInterviewForm: false,
			intereviews: [
				{
					id: 1,
					company: 'Andela',
					jobTitle: 'Software Engineer',
					jobType: 'Full Time',
					jobOffer: true,
					date: new Date(),
					interview: "I applied online from the Andela website. I got invited to do their Homestudy then do an online assessment of what you have learnt . It is mostly programming questions based on their Homestudy curriculum. I passed this stage and attended a one on one interview which was very relaxed. I was then invited to the boot camp. It's a 2-week boot camp but there are eliminations at the end…",
					questions: [
						{
							id: 'q001',
							question: "What would you do if you did not make it into the fellowship?"
						}
					] 
				},

				{
					id: 2,
					company: 'Safaricom',
					jobTitle: 'Client Manager Interview',
					jobType: 'Full Time',
					jobOffer: false,
					date: new Date(),
					interview: "Lengthy and very thourough. There were several interviews with different teams. There were more than four interviewers in the session and all would ask some questions regarding their own different fields of interest.",
					questions: [
						{
							id: 'q002',
							question: "Which are your Key career Accomplishments?"
						},
						{
							id: 'q003',
							question: "how do you approach relationship management?"
						}
					] 
				}
			]
		}
		this.handleAddInterview = this.handleAddInterview.bind(this);
	}

	handleAddInterview() {
	    this.setState({ showAddInterviewForm: true });

	    // This probably where you would have an `ajax` call
	    //setTimeout(() => {
	      // Completed of async action, set loading state back
	    //  this.setState({ isLoading: false });
	    //}, 2000);
	  }


	render() {

		const { showAddInterviewForm } = this.state;

		const addBtn = <Button
				        bsStyle="primary"
				        disabled={showAddInterviewForm}
				        onClick={!showAddInterviewForm ? this.handleAddInterview : null} >
				        Add Interview
				      </Button>;

		const addForm = <AddInterview />;

		let intereviews = this.state.intereviews;

		return (
			<div>
				<section>
					{ !showAddInterviewForm ? addBtn : addForm }
				</section>

				<hr />

				{ intereviews.map(intereview => <Interview interview={intereview} /> )}


			</div>


			);			
	}

}

export default Interviews;