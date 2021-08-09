import React, { useRef, useEffect, useCallback } from "react";
import { useSpring } from "react-spring";
import CardBasis from "../CardBasis";
import FormInputTextarea from "../FormInputTextarea";
import {
  Background,
  ModalButton,
  ModalWrapper,
  ModalContent,
  AnimatedDiv,
} from "./styles";

const Modal = ({
  showModal,
  setShowModal,
  setEditedTitle,
  setEditedContent,
  onButtonClick,
  editedTitle,
  editedContent,
}) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 350,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-100%)",
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) setShowModal(false);
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <Background>
          <AnimatedDiv ref={modalRef} onClick={closeModal} style={animation}>
            <ModalWrapper showModal={showModal} className="modal-wrapper">
              <ModalContent className="modal-content">
                <CardBasis
                  borderColor="#999999"
                  titleSize="h2"
                  title="Edit Item"
                >
                  <FormInputTextarea
                    buttonText="Save"
                    onChangeInputFunc={setEditedTitle}
                    onChangeTextareaFunc={setEditedContent}
                    onButtonClick={onButtonClick}
                    disabled={editedTitle === "" || editedContent === ""}
                  />
                </CardBasis>
              </ModalContent>
            </ModalWrapper>
          </AnimatedDiv>
        </Background>
      )}
    </>
  );
};

export const ButtonModal = ({ children }) => (
  <ModalButton>{children}</ModalButton>
);

export default Modal;
