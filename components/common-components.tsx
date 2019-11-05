import styled from "styled-components";

export const PrimaryButton = styled.div`
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
  background: #ab61e5;
  border-radius: 4px;
  user-select: none;
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
  transition: all 0.1s ease;
`;

export const SecondaryButton = styled.div`
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #031323;
  font-weight: bold;
  border-radius: 4px;
  background: #fff;
  border-radius: 4px;
  user-select: none;
  :hover {
    filter: brightness(0.9);
  }
  cursor: pointer;
  transition: all 0.1s ease;
  border: 1px solid #d9dcde;
`;
