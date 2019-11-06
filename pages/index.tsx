import styled from "styled-components";
import { Footer } from "../components/Footer";
import axios from "axios";
import Router from "next/router";
import { useFormik } from "formik";
import { PrimaryButton } from "../components/common-components";
import * as yup from "yup";

const Root = styled.div`
  padding: 1px;
  min-height: 100vh;
  width: 100vw;

  background-repeat: no-repeat;
  background-image: url("/bg.svg");
  background-size: cover;
  position: relative;
`;

const Modal = styled.form`
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

const StyledPrimaryButton = styled(PrimaryButton)`
  width: 192px;
  height: 48px;
  margin-top: 2rem;
`;

export default () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: yup.object({
      email: yup
        .string()
        .email()
        .required(),
    }),
    onSubmit: async values => {
      await axios.post("/api/login", { email: values.email });
      Router.push("/my-feedback");
    },
  });

  return (
    <Root>
      <Modal onSubmit={formik.handleSubmit}>
        <img src="/h-logo.svg" alt="" />
        <Title>Hosnesto</Title>
        <Input
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          placeholder="Enter email..."></Input>
        <StyledPrimaryButton type="submit" disabled={!formik.dirty || !formik.isValid}>
          Login
        </StyledPrimaryButton>
      </Modal>
      <Footer />
    </Root>
  );
};
