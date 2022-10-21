import React from 'react';
import NewSackForm from './NewSackForm';
import SackList from './SackList/SackList';
import SackDetail from './SackDetails/SackDetails';
import EditSackForm from './EditSackForm';

class SackControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false,
      mainSackList: [],
      selectedSack: null,
      editing: false,
      count: 0
    };
  }

  handleClick = () => {
    if(this.state.selectedSack != null){
      this.setState({
        formVisibileOnPage: false,
        selectedSack: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibileOnPage: !prevState.formVisibileOnPage
      }));
    }
  }

  handleAddingNewSackToList = (newSack) => {
    const newMainSackList = this.state.mainSackList.concat(newSack);
    this.setState({
      mainSackList: newMainSackList,
      formVisibileOnPage: false}
      );
  }

  handleChangingSelectedSack = (id) => {
    const selectedSack = this.state.mainSackList.filter(sack => sack.id === id)[0];
    this.setState({selectedSack: selectedSack});
  }

  handleDeletingSack = (id) => {
    const newMainSackList = this.state.mainSackList.filter(sack => sack.id !== id);
    this.setState({
      mainSackList: newMainSackList,
      selectedSack: null
    });
  }

  handleEditingSack = (sackToEdit) => {
    const editedMainSack = this.state.mainSackList
      .filter(sack => sack.id !== this.state.selectedSack.id)
      .concat(sackToEdit);
    this.setState({
      mainSackList: editedMainSack,
      editing: false,
      selectedSack: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleDecrementingLbs = () => {
    const sackToDecrement = this.state.selectedSack;
    if (this.state.selectedSack.lbs !== 0){
        const lbsToDecrement = {
          lbs: sackToDecrement.lbs -=1
        }
        this.handleChangingSelectedSack(lbsToDecrement.id)   
    } else {
        this.handleChangingSelectedSack(this.state.selectedSack.id)
    }
}

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditSackForm sack = {this.state.selectedSack} onEditSack = {this.handleEditingSack} />
      buttonText= "Return to List";
    } else if (this.state.selectedSack != null) {
        currentlyVisibleState = <SackDetail 
        sack = {this.state.selectedSack} 
        onClickingDelete = {this.handleDeletingSack} 
        onClickingEdit = {this.handleEditClick}
        onClickingDecrement = {this.handleDecrementingLbs}
      />
      buttonText= "Return to List";
    }
    else if (this.state.formVisibileOnPage) {
      currentlyVisibleState = <NewSackForm onNewSackCreation={this.handleAddingNewSackToList} />;
      buttonText = "Return to List";
    } else {
      currentlyVisibleState = <SackList  sackList={this.state.mainSackList} onSackSelection={this.handleChangingSelectedSack} />
      buttonText = "Add Sack";
    }
    return(
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default SackControl;