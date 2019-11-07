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

export const QuestionFeedback = styled.div<{ skipped?: boolean }>`
  padding: 1.5rem;
  background: #fff;

  display: flex;
  & + & {
    border-top: 1px solid #d9dcde;
  }

  ${p =>
    p.skipped &&
    `
    color: #ACB1B6;
  `}
`;

export const SkipTag = styled.div`
  width: 83px;
  height: 20px;
  background: #acb1b6;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.5rem;
`;

export const Text = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 0.25rem;
`;
