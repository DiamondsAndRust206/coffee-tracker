import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          required='required'
          placeholder='Coffee Name' />
        <input
          type='text'
          name='roast'
          required='required'
          placeholder='Roast' />
        <input
          type='number'
          name='price'
          required='required'
          placeholder='Price of Burlap Sack' />
          {/* <textarea */}
          <input
          type='number'
          name='lbs'
          required='required'
          placeholder='How Many Pounds' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;