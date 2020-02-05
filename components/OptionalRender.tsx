import * as React from "react";

interface Props {
  shouldRender: boolean | (() => boolean);
}

export class OptionalRender extends React.Component<Props> {
  render() {
    const { shouldRender, children } = this.props;

    if (!shouldRender) {
      return null;
    }

    return typeof children === "function" ? children() : children;
  }
}
