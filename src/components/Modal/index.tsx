import React, {
  useRef,
  useEffect,
  useCallback,
  MouseEventHandler,
} from 'react';
import { useSpring } from 'react-spring';
import CardBasis from '../CardBasis';
import FormInputTextarea from '../FormInputTextarea';
import {
  Background,
  ModalButton,
  ModalWrapper,
  ModalContent,
  AnimatedDiv,
} from './styles';
import { SetStateProp } from '../../types/state';
import { InputChangeEvent } from '../../types/form';

interface Props {
  showModal: boolean;
  setShowModal: SetStateProp<boolean>;
  setEditedTitle: SetStateProp<string>;
  setEditedContent: SetStateProp<string>;
  onButtonClick: () => void;
  editedTitle: string;
  editedContent: string;
}

type Children = JSX.Element | JSX.Element[];

const Modal = ({
  showModal,
  setShowModal,
  setEditedTitle,
  setEditedContent,
  onButtonClick,
  editedTitle,
  editedContent,
}: Props) => {
  const modalRef = useRef<null>();

  const animation = useSpring({
    config: {
      duration: 350,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? 'translateY(0%)' : 'translateY(-100%)',
  });

  const closeModal = (e: any) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showModal) setShowModal(false);
    },
    [setShowModal, showModal],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
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
                  fontSize="24px"
                  title="Edit Item"
                >
                  <FormInputTextarea
                    buttonText="Save"
                    onChangeInputFunc={setEditedTitle}
                    onChangeTextareaFunc={setEditedContent}
                    onButtonClick={onButtonClick}
                    disabled={editedTitle === '' || editedContent === ''}
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

export const ButtonModal = ({ children }: { children: Children }) => (
  <ModalButton>{children}</ModalButton>
);

export default Modal;
