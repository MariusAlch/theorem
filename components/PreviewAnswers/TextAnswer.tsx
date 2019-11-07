import styled from "styled-components";
import { Answer } from "../../shared/types";
import { QuestionFeedback, SkipTag } from "../common-components";
import { OptionalRender } from "../OptionalRender";

interface Props {
  answer: Answer;
}

export const TextAnswer: React.FunctionComponent<Props> = props => {
  const { answer } = props;

  return (
    <QuestionFeedback skipped={answer.value === "skip"}>
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html: `
          ${answer.question.text} <br/>
          ${answer.value === "skip" ? "" : "<br/>" + answer.value.replace(/\n/g, "<br/>")}
          `,
          }}
        />
        <OptionalRender shouldRender={answer.value === "skip"}>
          <SkipTag>Skipped</SkipTag>
        </OptionalRender>
      </div>
    </QuestionFeedback>
  );
};
