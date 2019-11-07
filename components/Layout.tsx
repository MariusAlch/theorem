import styled from "styled-components";
import { Footer } from "../components/Footer";
import Link from "next/link";
import axios from "axios";
import Router from "next/router";
import { StateContainer } from "./StateContainer";
import { useEffect } from "react";
import { OptionalRender } from "./OptionalRender";

const Root = styled.div`
  padding-top: 1px;
  padding-bottom: 16rem;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
`;

const Header = styled.div`
  background: #f2f3f4;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  height: 75px;
  position: relative;
`;

const Title = styled.div`
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: #000000;
  position: absolute;
  top: 22px;
  left: 130px;
`;

const Links = styled.div`
  height: 100%;
  margin-left: 24rem;
`;

const HeaderLink = styled.div<{ highlight: boolean }>`
  height: 100%;

  padding: 0px 1rem;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${p =>
    p.highlight &&
    `
    border-bottom: 3px solid #ab61e5;
  `}
  & + & {
    margin-left: 3rem;
  }
`;

const Counter = styled.div`
  background: #ab61e5;
  border-radius: 100%;
  height: 1rem;
  width: 1rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  margin-left: 0.25rem;
  color: #fff;
`;

const TopRightSection = styled.div`
  height: 100%;
  right: 0;
  top: 0;
  position: absolute;
  display: flex;
`;

const CycleSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  justify-content: center;
  align-items: flex-end;
  height: 100%;
`;

const CycleLabel = styled.div`
  font-size: 11px;
  font-weight: bold;

  color: #59636e;
`;

const CycleDetails = styled.div`
  margin-top: 0.25rem;
`;

const GreenText = styled.div`
  color: #47bea0;
  display: inline-block;
  font-weight: bold;
`;

const Separator = styled.div`
  height: 100%;
  width: 1px;
  background-color: #d9dcde;
`;

const ProfileSection = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const AvatarImage = styled.img`
  border-radius: 100%;
  height: 3.5rem;
  width: 3.5rem;
`;

const LeftProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  margin-right: 4rem;
`;

const Name = styled.div`
  font-size: 16px;
  line-height: 19px;
`;

const Logout = styled.div`
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #59636e;
  font-weight: bold;
  cursor: pointer;
`;

export const Layout: React.FunctionComponent<{
  page?: "share-feedback" | "my-feedback" | "team-feedback";
}> = props => {
  const stateContainer = StateContainer.useContainer();

  async function onLogout() {
    await axios.post("/api/logout");
    Router.replace("/");
  }

  const feedbackNeededToFill = stateContainer.user.feedback.filter(fb => !fb.answers);
  const feedbackFilled = stateContainer.user.feedback.filter(fb => !!fb.answers);

  return (
    <Root>
      <Header>
        <Title>Honesto</Title>
        <Links>
          <Link href="/share-feedback">
            <HeaderLink highlight={props.page === "share-feedback"}>
              Share Feedback
              <OptionalRender shouldRender={feedbackNeededToFill.length !== 0}>
                <Counter>{feedbackNeededToFill.length}</Counter>
              </OptionalRender>
            </HeaderLink>
          </Link>
          <Link href="/my-feedback">
            <HeaderLink highlight={props.page === "my-feedback"}>
              My Feedback
              <OptionalRender shouldRender={feedbackFilled.length !== 0}>
                <Counter>{feedbackFilled.length}</Counter>
              </OptionalRender>
            </HeaderLink>
          </Link>
          <Link href="/team-feedback">
            <HeaderLink highlight={props.page === "team-feedback"}>Team Feedback</HeaderLink>
          </Link>
          <HeaderLink highlight={false}>Teams</HeaderLink>
        </Links>
        <TopRightSection>
          <CycleSection>
            <CycleLabel>Next Feedback Cycle</CycleLabel>
            <CycleDetails>
              Sept 2018 - <GreenText>4 days</GreenText>
            </CycleDetails>
          </CycleSection>
          <Separator></Separator>
          <ProfileSection>
            <AvatarImage src={stateContainer.user.avatar}></AvatarImage>
            <LeftProfileSection>
              <Name>{stateContainer.user.fullName}</Name>
              <Logout onClick={onLogout}>LOGOUT</Logout>
            </LeftProfileSection>
          </ProfileSection>
        </TopRightSection>
      </Header>
      {props.children}
      <Footer />
    </Root>
  );
};
