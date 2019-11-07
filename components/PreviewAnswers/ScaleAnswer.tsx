import { Answer } from "../../shared/types";
import { QuestionFeedback, SkipTag, Text as FlexGrow } from "../common-components";
import { OptionalRender } from "../OptionalRender";
import { Grade } from "../Grade";

interface Props {
  answer: Answer;
}

export const ScaleAnswer: React.FunctionComponent<Props> = props => {
  const { answer } = props;

  return (
    <QuestionFeedback skipped={answer.value === "skip"}>
      <FlexGrow>
        <div>{answer.question.text}</div>
        <OptionalRender shouldRender={answer.value === "skip"}>
          <SkipTag>Skipped</SkipTag>
        </OptionalRender>
      </FlexGrow>
      <Grade value={Number(answer.value)} max={10} />
    </QuestionFeedback>
  );
};
