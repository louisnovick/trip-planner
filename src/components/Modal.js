import React from "react";
import posed from "react-pose";

const AnimatedModal = posed.div({
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0
  }
});

const Modal = ({ active, children }) => (
  <div className="modal">
    <AnimatedModal
      className="modal__inner"
      pose={active ? "visible" : "hidden"}
    >
      {children}
    </AnimatedModal>
  </div>
);

export default Modal;
