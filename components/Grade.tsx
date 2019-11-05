import styled from "styled-components";

const Root = styled.div`
  height: 28px;
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
`;

const GradeBlock = styled.div<{ color?: string }>`
  background: ${p => p.color};
  height: 28px;
  flex-grow: 1;
  flex-basis: 0;
  filter: brightness(0.95);

  /* background: darkred; */
  & + & {
    margin-left: 4px;
  }
`;

export const Grade: React.FunctionComponent<{
  value: number;
  max: number;
}> = props => {
  /**
   * interpolate between red-yellow-green
   */
  const x = (props.value / props.max) * 2;
  const red = x > 1 ? 245 - 202 * (x - 1) : 222 + 23 * x;
  const green = x > 1 ? 221 - 30 * (x - 1) : 82 + 139 * x;
  const blue = x > 1 ? 7 + 99 * (x - 1) : 29 - 22 * x;

  return (
    <Root>
      {Array(props.max)
        .fill(0)
        .map((_, i) => (
          <GradeBlock color={i < props.value ? `rgb(${red}, ${green}, ${blue})` : "#F2F3F4"} key={i} />
        ))}
    </Root>
  );
};
