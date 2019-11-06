import { Layout } from "../components/Layout";
import styled from "styled-components";
import { useEffect } from "react";
import { StateContainer } from "../components/StateContainer";
import { TextQuestion } from "../components/TextQuestion";
import { SelectQuestion } from "../components/SelectQuestion";
import { ScaleQuestion } from "../components/ScaleQuestion";
import { OptionalRender } from "../components/OptionalRender";
import Router from "next/router";

const Root = styled.div`
  margin-left: 24rem;
  max-width: 50rem;
  margin-top: 3rem;
`;

export default () => {
  const stateContainer = StateContainer.useContainer();

  useEffect(() => {
    stateContainer.init();
  }, []);

  useEffect(() => {
    if (stateContainer.user) {
      const feedback = stateContainer.user.feedback.find(feedback => feedback.user.email === Router.query.email);
      stateContainer.setFeedback(feedback);
    }
  }, [stateContainer.user]);

  if (!stateContainer.user || !stateContainer.feedback) {
    return null;
  }

  const { feedback, questionIndex } = stateContainer;
  const question = feedback.questions[questionIndex];

  return (
    <Layout page="share-feedback">
      <Root>
        <OptionalRender shouldRender={question.type === "text"}>
          {() => <TextQuestion question={question} value={stateContainer.value} onChange={stateContainer.setValue} />}
        </OptionalRender>
        <OptionalRender shouldRender={question.type === "scale"}>
          {() => <ScaleQuestion question={question} value={stateContainer.value} onChange={stateContainer.setValue} />}
        </OptionalRender>
        <OptionalRender shouldRender={question.type === "select"}>
          {() => <SelectQuestion question={question} value={stateContainer.value} onChange={stateContainer.setValue} />}
        </OptionalRender>
      </Root>
    </Layout>
  );
};
