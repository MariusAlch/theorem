import { Layout } from "../components/Layout";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton, AvatarImage } from "../components/common-components";
import { Grade } from "../components/Grade";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 75rem;
  margin-top: 3rem;
`;

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
  margin-bottom: 1rem;
`;

const PeriodSection = styled.div`
  margin-right: 1rem;
`;

const PeriodLabel = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: bold;
  color: #59636e;
`;

const PeriodSelect = styled.div`
  margin-top: 0.5rem;
  background: #ffffff;

  border: 1px solid #d9dcde;
  box-sizing: border-box;
  border-radius: 3px;
  display: flex;
  height: 48px;
  width: 342px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1rem;
`;

const PeriodName = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

const PeriodControls = styled.div`
  display: flex;
  align-items: flex-end;
`;

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

export default () => {
  return (
    <Layout>
      <Root>
        <TopSection>
          <Title>My Feedback</Title>
          <PeriodControls>
            <PeriodSection>
              <PeriodLabel>FEEDBACK PERIOD</PeriodLabel>
              <PeriodSelect>
                <PeriodName>October 2018</PeriodName>
                <FiChevronDown size="1.25rem" color="#ACB1B6" />
              </PeriodSelect>
            </PeriodSection>
            <PrimaryButton style={{ width: 190 }}>Publish Feedback</PrimaryButton>
          </PeriodControls>
        </TopSection>
        <ContentBox>
          <LeftContent>
            <LeftTitle>Feedback Received</LeftTitle>
            <Person selected>
              <AvatarImage style={{ marginRight: "1rem" }} src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <Name>Nathaniel Moon</Name>
            </Person>
            <Person>
              <AvatarImage style={{ marginRight: "1rem" }} src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <Name>Nathaniel Moon</Name>
            </Person>
            <Person>
              <AvatarImage style={{ marginRight: "1rem" }} src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <Name>Nathaniel Moon</Name>
            </Person>
            <Person>
              <AvatarImage style={{ marginRight: "1rem" }} src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <Name>Nathaniel Moon</Name>
            </Person>
            <Person>
              <AvatarImage style={{ marginRight: "1rem" }} src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <Name>Nathaniel Moon</Name>
            </Person>
          </LeftContent>
          <RightContent>
            <RightTitle>Chris Trott’s Feedback</RightTitle>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={1} max={10} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={5} max={10} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={8} max={10} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={2} max={3} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={3} max={4} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={3} max={10} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={9} max={10} />
            </QuestionFeedback>
            <QuestionFeedback>
              <Text>How well did this person do X thing last month Lorem ipsum dolor sit amet Lorem ipsum dolor?</Text>
              <Grade value={10} max={10} />
            </QuestionFeedback>
            <QuestionFeedback>
              <div></div>
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  Do you have any other feedback for this person? <br/><br/>
                  Hey Sarah, You are doing great, keep up the good work!!<br/><br/>
                  
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a euismod dolor, non blandit nisl. Sed euismod enim in semper consectetur. Duis elementum
                  venenatis finibus. Sed quis neque diam. Aliquam nec blandit mi, et cursus dolor. Duis pharetra purus nunc,
                  in facilisis ex auctor id. Duis nec metus arcu. Curabitur in semper tellus. Cras luctus tellus lectus, a
                  lobortis velit convallis non. Praesent cursus vel velit eget hendrerit.
              `,
                }}></div>
            </QuestionFeedback>
          </RightContent>
        </ContentBox>
      </Root>
    </Layout>
  );
};
