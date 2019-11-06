import { QuestionTemplate } from "./QuestionTemplate";
import styled from "styled-components";
import { Question } from "../shared/types";

const SelectOption = styled.div<{ selected?: boolean }>`
  background: #f2f3f4;
  border-radius: 3px;
  padding: 1.25rem 1.75rem;
  font-size: 16px;
  line-height: 19px;

  & + & {
    margin-top: 1rem;
  }

  cursor: pointer;

  :hover {
    filter: brightness(0.9);
  }

  ${p =>
    p.selected &&
    `
    background: #59636E;
    color: #FFF;
  `}
`;

interface Props {
  value: string;
  onChange: (val: string) => void;
  question: Question;
}

export const SelectQuestion: React.FunctionComponent<Props> = props => {
  return (
    <QuestionTemplate value={props.value} question={props.question}>
      <div>
        {props.question.options.map((option, i) => (
          <SelectOption
            key={i}
            onClick={() => props.onChange(option)}
            selected={props.value === option}
            dangerouslySetInnerHTML={{ __html: option.replace(/\n/g, "<br/>") }}
          />
        ))}
      </div>
    </QuestionTemplate>
  );
};
