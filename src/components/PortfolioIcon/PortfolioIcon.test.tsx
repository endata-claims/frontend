import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import PortfolioIcon from ".";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("should render an Icon", () => {
  act(() => {
    render(<PortfolioIcon portfolio="Building" />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\" style=\\"color: rgb(15, 91, 120);\\">
      <path d=\\"M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z\\"></path>
    </svg>"
  `);

  act(() => {
    render(<PortfolioIcon portfolio="Contents" />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\" style=\\"color: green;\\">
      <path d=\\"M21 6h-7.59l3.29-3.29L16 2l-4 4-4-4-.71.71L10.59 6H3c-1.1 0-2 .89-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8c0-1.11-.9-2-2-2zm0 14H3V8h18v12zM9 10v8l7-4z\\"></path>
    </svg>"
  `);

  act(() => {
    render(<PortfolioIcon portfolio="Restoration" />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<svg class=\\"MuiSvgIcon-root\\" focusable=\\"false\\" viewBox=\\"0 0 24 24\\" aria-hidden=\\"true\\" role=\\"presentation\\" style=\\"color: rgb(208, 161, 30);\\">
      <path d=\\"M17.73 12.02l3.98-3.98c.39-.39.39-1.02 0-1.41l-4.34-4.34a.9959.9959 0 00-1.41 0l-3.98 3.98L8 2.29C7.8 2.1 7.55 2 7.29 2c-.25 0-.51.1-.7.29L2.25 6.63c-.39.39-.39 1.02 0 1.41l3.98 3.98L2.25 16c-.39.39-.39 1.02 0 1.41l4.34 4.34c.39.39 1.02.39 1.41 0l3.98-3.98 3.98 3.98c.2.2.45.29.71.29.26 0 .51-.1.71-.29l4.34-4.34c.39-.39.39-1.02 0-1.41l-3.99-3.98zM12 9c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-4.71 1.96L3.66 7.34l3.63-3.63 3.62 3.62-3.62 3.63zM10 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2.66 9.34l-3.63-3.62 3.63-3.63 3.62 3.62-3.62 3.63z\\"></path>
    </svg>"
  `);
});
