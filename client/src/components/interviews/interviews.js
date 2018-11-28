import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import AddInterview from './add-interview';
import Interview from './interview';
import { getInterviews } from '../../redux/actions/actions';

const mapStateToProps = (state) => {
    return {
        interviews: state.interviews.interviewsData.interviews,
        loading: state.interviews.loading,
        error: state.interviews.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(getInterviews())
    };
};

class Interviews extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAddInterviewForm: false
		}
		this.handleAddInterview = this.handleAddInterview.bind(this);
	}


	componentDidMount() {
	    // this.props.dispatch(
	    //   getInterviews()
	    // );
	    this.props.fetchData();
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

		const interviewData = this.props.interviews;
		console.log(interviewData);

		let interviewNodes;
		if (interviewData !== undefined) {
		  interviewNodes = interviewData.map(function (interview, i ){
		      return (
		          <Interview key={i} interview={interview} /> 
		      );
		  });
		}

	

		return (
			<div>
				<section>
					{ !showAddInterviewForm ? addBtn : addForm }
				</section>

				<hr />
				
				

				
				{ interviewData ? interviewNodes : 'Loading Interviews...' }


			</div>


			);			
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(Interviews);