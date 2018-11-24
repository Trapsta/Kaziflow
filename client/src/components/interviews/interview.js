import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';



class Interview extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAddInterviewForm: false
		}
	}

	render() {

		const interview = this.props.interview;
		const interviewQuestions = this.props.interview.questions;
		const questions = interviewQuestions.map(question => <li> {question.question} </li>);
		
		  return (
		  		<div className="interview-container">
				  <Panel bsStyle="primary">
				    <Panel.Heading>
				      <Panel.Title componentClass="h3">{ interview.jobTitle }</Panel.Title>
				      <Panel.Title componentClass="p">{ interview.company }</Panel.Title>
				    </Panel.Heading>


				    <Panel.Body>
				    	<p> Job Type: { interview.jobType } </p>
				    	<h4>Interview Process</h4>
				    	<p> { interview.interview } </p>
				    	<h4>Interview Questions</h4>
				    	<ol>
				    		{ questions }
				    	</ol>
				    	<h4> Interview Successful? </h4>
				    	<p> { interview.jobOffer ? 'Yes, I got the job' : "No, I didn't get the job" } </p>
				    </Panel.Body>
				  </Panel>
				</div>

		  	);
	}

}

export default Interview;