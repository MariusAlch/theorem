import { QuestionTemplate } from "./QuestionTemplate";
import styled from "styled-components";
import { Question } from "../shared/types";

const TextArea = styled.textarea`
  resize: none;
  width: 100%;
  outline: none;
  border: 1px solid #d9dcde;
  border-radius: 3px;

  font-size: 16px;
  line-height: 19px;

  color: #031323;
  padding: 1rem;

  ::placeholder {
    color: #acb1b6;
    opacity: 1;
  }
`;

interface Props {
  value: string;
  onChange: (val: string) => void;
  question: Question;
}

export const TextQuestion: React.FunctionComponent<Props> = props => {
  return (
    <QuestionTemplate value={props.value} question={props.question}>
      <TextArea
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        placeholder="Say something"
        rows={5}
      />
    </QuestionTemplate>
  );
};
