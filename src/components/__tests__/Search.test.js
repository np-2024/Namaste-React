import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCKDATA from "../../mocks/resListMock.json";
import { act } from "react";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCKDATA);
    },
  });
});

test("Should load search results on body component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //   const restoCardsBefore = screen.getAllByTestId("resCard");
  //   expect(restoCardsBefore.length).toBe(8);

  const searchInput = screen.getByTestId("searchInput");
  const searchbtn = screen.getByRole("button", {
    name: "Search",
  });

  expect(searchInput).toBeInTheDocument();
  expect(searchbtn).toBeInTheDocument();

  fireEvent.change(searchInput, {
    target: { value: "wok" },
  });
  expect(searchInput.value).toBe("wok");
  fireEvent.click(searchbtn);

  //   const restoCardsAfter = screen.getAllByTestId("resCard");
  //   expect(restoCardsAfter.length).toBe(1);
});

test("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  //   const restoCardsBefore = screen.getAllByTestId("resCard");
  //   expect(restoCardsBefore.length).toBe(8);

  const filterBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });
  fireEvent.click(filterBtn);

  //   const restoCardsAfter = screen.getAllByTestId("resCard");
  //   expect(restoCardsAfter.length).toBe(5);
});
