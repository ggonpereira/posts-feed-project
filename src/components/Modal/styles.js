import { animated } from "react-spring";
import styled from "styled-components";
import colors from "../../styles/variables";

export const ModalButton = styled.button`
  height: 40px;
  background: ${colors.dark};
  padding: 0 22px;
  cursor: pointer;
  border: 0;
  text-transform: uppercase;
  color: ${colors.white};
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(119, 119, 119, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  max-width: 800px;
  max-height: 500px;
  width: 100%;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: ${colors.white};
  color: ${colors.dark};
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
`;

export const AnimatedDiv = styled(animated.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
