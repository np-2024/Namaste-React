import { render, screen } from "@testing-library/react";
import RestoCard from "../RestoCard";
import MOCKDATA from "../../mocks/resDataMock.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import withOpenStatus from "../../hof/withOpenStatus";

test("Should render restaurant card with props data", () => {
  render(
    <BrowserRouter>
      <RestoCard resData={MOCKDATA} />
    </BrowserRouter>
  );

  const name = screen.getByText("Ayyappan Pure Veg");
  expect(name).toBeInTheDocument();
});

test("Should render restaurant card with open label", () => {
  const RestoCardOpen = withOpenStatus(RestoCard);

  render(
    <BrowserRouter>
      <RestoCardOpen resData={MOCKDATA} />
    </BrowserRouter>
  );

  const isOpenLabel = screen.getByText("Open");
  expect(isOpenLabel).toBeInTheDocument();
});
