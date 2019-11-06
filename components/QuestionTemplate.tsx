import { FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";
import { AvatarImage, PrimaryButton, SecondaryButton } from "../components/common-components";
import { ProgressBar } from "../components/ProgressBar";
import { Question } from "../shared/types";
import { OptionalRender } from "./OptionalRender";
import { StateContainer } from "./StateContainer";
import Router from "next/router";

const Title = styled.div`
  font-size: 31px;
  line-height: 36px;
  color: #031323;
  font-weight: bold;
`;

const TopSection = styled.div`
  justify-content: space-between;
  height: 80px;
  display: flex;
  align-items: center;
`;

const Explanation = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #acb1b6;
  font-weight: bold;
  margin-top: 0.75rem;
`;

const BackButton = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: bold;
  color: #59636e;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 1rem;

  :hover {
    filter: brightness(0.8);
  }
`;

const QuestionBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  padding: 1.75rem 1rem;
  margin-top: 1.75rem;
`;

const WizardControls = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

const BottomSection = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
`;

const QuestionsCompletedLabel = styled.div`
  margin-bottom: 0.4rem;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #031323;
  font-weight: bold;
`;

const Star = styled.img`
  margin: 0px;
`;

const Flag = styled.img`
  margin-left: 1.5rem;
`;

interface Props {
  question: Question;
  value: string;
}
export const QuestionTemplate: React.FunctionComponent<Props> = props => {
  const stateContainer = StateContainer.useContainer();
  const { feedback } = stateContainer;
  const questionIndex = feedback.questions.indexOf(props.question);

  function onBack() {
    Router.push("/share-feedback");
  }

  return (
    <>
      <BackButton onClick={onBack}>
        <FiChevronLeft color="#59636E" size="1.25rem"></FiChevronLeft> Back
      </BackButton>
      <TopSection>
        <div>
          <Title>{props.question.text}</Title>
          <Explanation>share your feedback for {feedback.user.fullName}</Explanation>
        </div>
        <AvatarImage src={feedback.user.avatar}></AvatarImage>
      </TopSection>
      <QuestionBox>
        {props.children}
        <WizardControls>
          <OptionalRender shouldRender={questionIndex === 0}>
            <div />
          </OptionalRender>
          <OptionalRender shouldRender={questionIndex !== 0}>
            <SecondaryButton onClick={stateContainer.previousQuestion}>Previous</SecondaryButton>
          </OptionalRender>
          <PrimaryButton onClick={stateContainer.nextQuestion} disabled={!props.value}>
            Next
          </PrimaryButton>
        </WizardControls>
        <ProgressBar progress={(questionIndex + 1) / feedback.questions.length}></ProgressBar>
        <BottomSection>
          <div>
            <QuestionsCompletedLabel>Questions Completed</QuestionsCompletedLabel>
            <div>
              {questionIndex + 1}/{feedback.questions.length}
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Star src="/purple-star.svg" />
            <Star src="/purple-star.svg" />
            <Star src="/purple-star.svg" />
            <Star src="/gray-star.svg" />
            <Star src="/gray-star.svg" />
            <Flag src="/flag.svg" />
          </div>
        </BottomSection>
      </QuestionBox>
    </>
  );
};
