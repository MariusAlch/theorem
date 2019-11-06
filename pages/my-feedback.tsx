import { Layout } from "../components/Layout";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { PrimaryButton } from "../components/common-components";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { useEffect } from "react";
import { StateContainer } from "../components/StateContainer";
import { OptionalRender } from "../components/OptionalRender";
import { PreviewFeedback } from "../components/PreviewFeedback";

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

const AlertBox = styled.div`
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  height: 175px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2.5rem;
`;

const AlertTitle = styled.div`
  font-size: 31px;
  line-height: 36px;
  font-weight: bold;
  margin-bottom: 0.75rem;
`;

const AlertDetails = styled.div`
  color: #59636e;
`;

export default ProtectedRoute(() => {
  const stateContainer = StateContainer.useContainer();

  useEffect(() => {
    stateContainer.init();
  }, []);

  if (!stateContainer.user) {
    return null;
  }

  const feedbackGiven = stateContainer.user.feedback.filter(feedback => !!feedback.answers);

  return (
    <Layout page="my-feedback">
      <Root>
        <OptionalRender shouldRender={feedbackGiven.length === 0}>
          <AlertBox>
            <AlertTitle>No feedback to display 🔮</AlertTitle>
            <AlertDetails>There is no feedback to display at this time – check back in a bit! </AlertDetails>
          </AlertBox>
        </OptionalRender>
        <OptionalRender shouldRender={feedbackGiven.length > 0}>
          {() => (
            <>
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
              <PreviewFeedback feedback={feedbackGiven}></PreviewFeedback>
            </>
          )}
        </OptionalRender>
      </Root>
    </Layout>
  );
});
