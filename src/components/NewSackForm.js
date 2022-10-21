import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";


function NewSackForm(props) {

  function handleNewSackFormSubmission(event){
    event.preventDefault();
    props.onNewSackCreation({name: event.target.name.value, roast: event.target.roast.value, price: event.target.price.value, origin: event.target.origin.value, lbs: event.target.lbs.value, id: v4()});
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewSackFormSubmission}
        buttonText="Submit"
      />
    </React.Fragment>
  );
}

NewSackForm.propTypes = {
  onNewSackCreation: PropTypes.func
};

export default NewSackForm;