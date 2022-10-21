import React from "react";
import PropTypes from "prop-types";

function Sack(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenSackClicked(props.id)}>
        <h3>Roast: {props.roast} - {props.name}</h3>
        <p><em>${props.price}</em></p>
        <p>{props.lbs} Pounds Remaining</p>
        <hr/>
      </div>
    </React.Fragment>
  );
}

Sack.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  lbs: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenSackClicked: PropTypes.func
};

export default Sack;