import styled from "styled-components";
import { AvatarImage } from "../components/common-components";
import { Grade } from "../components/Grade";
import { OptionalRender } from "../components/OptionalRender";
import { Feedback } from "../shared/types";
import { useState } from "react";

const ContentBox = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  display: flex;
`;

const RightContent = styled.div`
  flex-grow: 1;
`;

const LeftContent = styled.div`
  border-right: 1px solid #d9dcde;
`;

const Person = styled.div<{ selected?: boolean }>`
  width: 380px;
  height: 90px;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9dcde;

  :hover {
    background: #fbf7fe;
  }

  ${p =>
    p.selected &&
    `
  background: #F2F3F4;
  :hover {
    background: #F2F3F4;
  }
`}

  cursor: pointer;
`;

const Name = styled.div`
  font-weight: bold;
`;

const LeftTitle = styled.div`
  height: 40px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #59636e;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0px 1rem;
  border-bottom: 1px solid #d9dcde;
`;

const RightTitle = styled.div`
  height: 63px;
  font-size: 22px;
  line-height: 26px;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 0px 1.5rem;
  border-bottom: 1px solid #d9dcde;
`;

const QuestionFeedback = styled.div`
  padding: 1.5rem;
  display: flex;
  & + & {
    border-top: 1px solid #d9dcde;
  }
`;

const Text = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 0.25rem;
`;

interface Props {
  feedback: Feedback[];
  type?: "received" | "given";
}

export const PreviewFeedback: React.FunctionComponent<Props> = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedFeedback = props.feedback[selectedIndex];
  return (
    <ContentBox>
      <LeftContent>
        <LeftTitle>Feedback Received</LeftTitle>
        {props.feedback.map((feedback, i) => (
          <Person onClick={() => setSelectedIndex(i)} selected={selectedIndex === i} key={i}>
            <AvatarImage
              style={{ marginRight: "1rem" }}
              src={props.type === "received" ? (feedback as any).from.avatar : feedback.user.avatar}></AvatarImage>
            <Name>{props.type === "received" ? (feedback as any).from.fullName : feedback.user.fullName}</Name>
          </Person>
        ))}
      </LeftContent>
      <RightContent>
        <RightTitle>{selectedFeedback.user.fullName}’s Feedback</RightTitle>
        {selectedFeedback.answers.map((answer, i) => (
          <>
            <OptionalRender shouldRender={answer.question.type === "scale"}>
              {() => (
                <QuestionFeedback key={i}>
                  <Text>{answer.question.text}</Text>
                  <Grade value={Number(answer.value)} max={10} />
                </QuestionFeedback>
              )}
            </OptionalRender>
            <OptionalRender shouldRender={answer.question.type === "select"}>
              {() => (
                <QuestionFeedback key={i}>
                  <Text>{answer.question.text}</Text>
                  <Grade
                    value={answer.question.options.indexOf(answer.value) + 1}
                    max={answer.question.options.length}
                  />
                </QuestionFeedback>
              )}
            </OptionalRender>
            <OptionalRender shouldRender={answer.question.type === "text"}>
              {() => (
                <QuestionFeedback key={i}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: `
                      ${answer.question.text} <br/><br/>
                      ${answer.value.replace(/\n/g, "<br/>")}
                    `,
                    }}
                  />
                </QuestionFeedback>
              )}
            </OptionalRender>
          </>
        ))}
      </RightContent>
    </ContentBox>
  );
};
