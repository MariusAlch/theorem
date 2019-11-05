import { Layout } from "../components/Layout";
import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "../components/common-components";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 60rem;
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
  height: 50px;
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

export default () => {
  return (
    <Layout>
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
          <Person>
            <PersonSummary>
              <AvatarImage src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <PersonName>Chris Johnson</PersonName>
            </PersonSummary>
            <StyledPrimaryButton>Fill Out</StyledPrimaryButton>
          </Person>
          <Person>
            <PersonSummary>
              <AvatarImage src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <PersonName>Chris Johnson</PersonName>
            </PersonSummary>
            <StyledSecondaryButton>View Submission</StyledSecondaryButton>
          </Person>
          <Person>
            <PersonSummary>
              <AvatarImage src="https://i.pravatar.cc/100?img=5"></AvatarImage>
              <PersonName>Chris Johnson</PersonName>
            </PersonSummary>
            <StyledSecondaryButton>View Submission</StyledSecondaryButton>
          </Person>
        </PeopleList>
      </Root>
    </Layout>
  );
};

// TODO: header links hover effect
