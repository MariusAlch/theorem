import styled from "styled-components";

export const PrimaryButton = styled.button<{ disabled?: boolean }>`
  height: 48px;
  width: 160px;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;

  color: #ffffff;
  font-weight: bold;
  background: #ab61e5;
  border-radius: 4px;
  user-select: none;
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
  transition: all 0.1s ease;

  ${p =>
    p.disabled &&
    `
    background: #ACB1B6;
    pointer-events: none;
  `}
`;

export const SecondaryButton = styled(PrimaryButton)`
  color: #031323;
  background: #fff;
  :hover {
    filter: brightness(0.9);
  }
  border: 1px solid #d9dcde;
`;

export const AvatarImage = styled.img`
  border-radius: 100%;
  height: 3.5rem;
  width: 3.5rem;
`;
