import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import ModalOverlay, { Backdrop } from './Modal.Styled';

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClick={props.onHideCart} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
  )
}

export default Modal;
