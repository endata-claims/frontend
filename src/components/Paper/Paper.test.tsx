import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";

import Paper from ".";

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

it("should render a Paper", () => {
  act(() => {
    render(<Paper />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
    `"<div class=\\"MuiPaper-root makeStyles-paperContent-2 MuiPaper-elevation1 MuiPaper-rounded\\"></div>"`
  );

  act(() => {
    render(<Paper loading={true} />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"MuiPaper-root makeStyles-paperContent-2 MuiPaper-elevation1 MuiPaper-rounded\\">
      <div style=\\"height: 100%; width: 100%; display: flex; align-items: center; justify-content: center;\\">
        <div class=\\"MuiCircularProgress-root MuiCircularProgress-colorPrimary MuiCircularProgress-indeterminate\\" style=\\"width: 40px; height: 40px;\\" role=\\"progressbar\\"><svg class=\\"MuiCircularProgress-svg\\" viewBox=\\"22 22 44 44\\">
            <circle class=\\"MuiCircularProgress-circle MuiCircularProgress-circleIndeterminate\\" cx=\\"44\\" cy=\\"44\\" r=\\"20.2\\" fill=\\"none\\" stroke-width=\\"3.6\\"></circle>
          </svg></div>
      </div>
    </div>"
  `);

  act(() => {
    render(<Paper title="Paper title" />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"makeStyles-paperTitle-1\\">Paper title</div>
    <div class=\\"MuiPaper-root makeStyles-paperContent-2 MuiPaper-elevation1 MuiPaper-rounded\\"></div>"
  `);

  act(() => {
    render(<Paper title="Paper title">Paper content</Paper>, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"makeStyles-paperTitle-1\\">Paper title</div>
    <div class=\\"MuiPaper-root makeStyles-paperContent-2 MuiPaper-elevation1 MuiPaper-rounded\\">Paper content</div>"
  `);
});
