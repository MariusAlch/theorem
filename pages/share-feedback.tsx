import { Layout } from "../components/Layout";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../components/common-components";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { StateContainer } from "../components/StateContainer";
import { OptionalRender } from "../components/OptionalRender";
import { useEffect } from "react";
import Link from "next/link";
import Router from "next/router";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 50rem;
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
`;

const PeriodSection = styled.div``;

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

const PeopleList = styled.div`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  margin-top: 1rem;
`;

const AvatarImage = styled.img`
  border-radius: 100%;
  height: 3.5rem;
  width: 3.5rem;
  margin-right: 1.5rem;
`;

const Person = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  justify-content: space-between;
  & + & {
    border-top: 1px solid #d9dcde;
  }
`;

const PersonName = styled.div`
  font-size: 22px;
  line-height: 26px;
  color: #59636e;
  font-weight: bold;
`;

const PersonSummary = styled.div`
  display: flex;
  align-items: center;
`;

const StyledPrimaryButton = styled(PrimaryButton)`
  height: 48px;
  width: 160px;
`;
const StyledSecondaryButton = styled(SecondaryButton)`
  height: 48px;
  width: 160px;
`;

export default ProtectedRoute(() => {
  const stateContainer = StateContainer.useContainer();

  useEffect(() => {
    stateContainer.init();
  }, []);

  if (!stateContainer.user) {
    return null;
  }

  function onFillOutClick(email: string) {
    stateContainer.resetQuestions();
    Router.push({ pathname: "/fill-questions", query: { email } });
  }

  return (
    <Layout page="share-feedback">
      <Root>
        <TopSection>
          <Title>Share Feedback</Title>
          <PeriodSection>
            <PeriodLabel>FEEDBACK PERIOD</PeriodLabel>
            <PeriodSelect>
              <PeriodName>October 2018</PeriodName>
              <FiChevronDown size="1.25rem" color="#ACB1B6" />
            </PeriodSelect>
          </PeriodSection>
        </TopSection>
        <PeopleList>
          {stateContainer.user.feedback.map((feedback, i) => (
            <Person key={i}>
              <PersonSummary>
                <AvatarImage src={feedback.user.avatar}></AvatarImage>
                <PersonName>{feedback.user.fullName}</PersonName>
              </PersonSummary>
              <OptionalRender shouldRender={!feedback.answers}>
                <StyledPrimaryButton onClick={() => onFillOutClick(feedback.user.email)}>Fill Out</StyledPrimaryButton>
              </OptionalRender>
              <OptionalRender shouldRender={!!feedback.answers}>
                <Link href="/my-feedback">
                  <StyledSecondaryButton>View Submission</StyledSecondaryButton>
                </Link>
              </OptionalRender>
            </Person>
          ))}
        </PeopleList>
      </Root>
    </Layout>
  );
});
