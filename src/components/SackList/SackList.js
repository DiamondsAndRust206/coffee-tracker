import React from "react";
import Sack from "../Sack";
import PropTypes from "prop-types";

function SackList(props) {

  return (
    <React.Fragment>
      <hr/>
      {props.sackList.map((sack) =>
        <Sack 
        whenSackClicked = { props.onSackSelection }
        name={sack.name}
        origin={sack.origin}
        price={sack.price}
        roast={sack.roast}
        lbs={sack.lbs}
        id={sack.id}
        key={sack.id}/>      
      )}
    </React.Fragment>
  );
}

SackList.propTypes = {
  sackList: PropTypes.array,
  onSackSelection: PropTypes.func
};

export default SackList;