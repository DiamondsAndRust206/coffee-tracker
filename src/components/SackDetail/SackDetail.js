import React from "react";
import PropTypes from "prop-types";

function SackDetail(props) {
  const { sack, onClickingDelete, onClickingDecrement } = props;

  return (
    <React.Fragment>
      <h1>Sack Detail</h1>
      <h3>Roast: {sack.roast} - Coffee Name: {sack.name}</h3>
      <p><em>${sack.price}</em></p>
      <p>Origin: {sack.origin}</p>
      <p>{sack.lbs} pounds remaining</p>
      <button className='buttonStyle' onClick={ props.onClickingEdit }>Update Sack</button>
      <button className='buttonStyle' onClick={() => onClickingDelete(sack.id) }>Remove Sack</button>
      <button className='buttonStyle' onClick={() => onClickingDecrement(sack.id) }>Sell a Pound</button>
      <hr/>
    </React.Fragment>
  );
}

SackDetail.propTypes = {
  sack: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDecrement: PropTypes.func
}

export default SackDetail;