import React from "react";
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditSackForm(props) {

  const { sack } = props;

  function handleEditSackFormSubmission(event) {
    event.preventDefault();
    props.onEditSack({name: event.target.name.value, roast: event.target.roast.value, price: event.target.price.value, origin: event.target.origin.value, lbs: event.target.lbs.value, id: sack.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditSackFormSubmission}
        buttonText= "Submit"
      />
    </React.Fragment>
  )
}

EditSackForm.propTypes = {
  sack: PropTypes.object,
  onEditSack: PropTypes.func
};

export default EditSackForm;