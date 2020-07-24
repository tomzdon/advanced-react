import React from "react";
import ArticleList from "../ArticleList";

import renderer from "react-test-renderer";

const testProps = {
  articles: {
    a: { id: "a" },
    b: { id: "b" },
  },
  articleActions: {
    lookupAuthor: jest.fn(() => ({})),
  },
};

describe("ArticleList", () => {
  it("renderers correctly", () => {
    const tree = renderer.create(<ArticleList {...testProps} />).toJSON();

    expect(tree).toMatchSnapshot();
    expect(tree.children.length).toBe(2);
  });
});
