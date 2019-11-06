import { QuestionTemplate } from "./QuestionTemplate";
import styled from "styled-components";
import { useState } from "react";
import { Question } from "../shared/types";

const Text = styled.div`
  margin-bottom: 2rem;
`;

const ScaleSection = styled.div`
  display: flex;
`;

const ScaleBlock = styled.div<{ preview?: boolean; selected?: boolean }>`
  flex-grow: 1;
  height: 74px;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  background: #f2f3f4;

  ${p =>
    p.preview &&
    `
    background: #ab61e5;
  `}
  ${p =>
    p.selected &&
    `
    background: #7F0FD7;
  `}

  cursor: pointer;
`;

const RateSelected = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  text-align: right;
`;

interface Props {
  value: string;
  onChange: (val: string) => void;
  question: Question;
}

export const ScaleQuestion: React.FunctionComponent<Props> = props => {
  const [hoverIndex, setHoverIndex] = useState<number>(undefined);

  return (
    <QuestionTemplate value={props.value} question={props.question}>
      <Text>{props.question.questionDetails}</Text>
      <ScaleSection>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <ScaleBlock
              key={i}
              preview={i <= hoverIndex}
              selected={i < Number(props.value)}
              onClick={() => props.onChange((i + 1).toString())}
              onMouseLeave={() => setHoverIndex(undefined)}
              onMouseEnter={() => setHoverIndex(i)}
            />
          ))}
      </ScaleSection>
      <RateSelected>{props.value || 0}/10</RateSelected>
    </QuestionTemplate>
  );
};
