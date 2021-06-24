import React from 'react'

import Modal from "react-modal";


export const ActualizarProductoScreen = () => {
  
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
  
  
  Modal.setAppElement("#root")
  
    return (
      <div>

        <Modal
          isOpen={true}
          //onAfterOpen={afterOpenModal}
          //onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
          
        >
          <h1>actualizar</h1>
        
        </Modal>

      </div>
  

       
       
    
    )
}
