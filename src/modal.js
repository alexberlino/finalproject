import App from "./app";

import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <p> Project1</p>
      <button onClick={props.toggleModal}> close </button>
    </div>
  );
}

export default Modal;


-----


other component

this.state = {

    modal : false,
}
//bind

toggleModal () {
    this.setState({
        modal: !this.state.modal
    })
}

//inreturn (
<div>

           {this.state.project1 && (


             <Modal toggleProject1={this.toggleModal} />


           )}

       </div>
)
