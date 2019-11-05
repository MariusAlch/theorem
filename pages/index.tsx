import styled from "styled-components";

const Root = styled.div`
  padding: 1px;
  min-height: 100vh;
  width: 100vw;

  background-repeat: no-repeat;
  background-image: url("/bg.svg");
  background-size: cover;
  position: relative;
`;

const Footer = styled.div`
  position: absolute;
  width: 100%;
  height: 54px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  background: #031323;
`;

const CopyRight = styled.div`
  position: absolute;
  height: 100%;
  right: 2rem;

  font-family: Untitled Sans;
  font-size: 12px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #ffffff;
`;

const Logo = styled.img`
  position: absolute;
  left: 8rem;
  height: 16px;
  bottom: 19px;
`;

const Modal = styled.div`
  margin-top: 12rem;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  background-color: white;
  width: 380px;
  height: 382px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 3rem;
  margin-bottom: 12rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
  color: #031323;
  margin-top: 1rem;
`;

const Input = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid #d9dcde;
  margin-top: 2rem;
  font-family: inherit;
  width: 14rem;
  color: #404040;
`;

const Button = styled.div`
  width: 192px;
  height: 48px;

  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;

  color: #ffffff;
  font-weight: bold;
  border-radius: 4px;
  background: #ab61e5;
  border-radius: 4px;
  margin-top: 2rem;
  user-select: none;
  :hover {
    filter: brightness(1.2);
  }
  cursor: pointer;
  transition: all 0.1s ease;
`;

export default () => {
  return (
    <Root>
      <Modal>
        <img src="/h-logo.svg" alt="" />
        <Title>Hosnesto</Title>
        <Input placeholder="Enter email..."></Input>
        <Button>Login</Button>
      </Modal>

      <Footer>
        <Logo src="/logo.svg"></Logo>
        <CopyRight>
          Copyright © 2018&nbsp;<b> Theorem </b>, LLC. All Rrights Reserved.
        </CopyRight>
      </Footer>
    </Root>
  );
};
