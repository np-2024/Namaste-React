import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import { BrowserRouter } from "react-router-dom";
import MOCKDATA from "../../mocks/resMenuMock.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCKDATA),
  })
);

window.scrollTo = jest.fn();

describe("Should run cart test cases", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  test("Should load restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>
      )
    );

    const accordionHeader = screen.getByText("Recommended");
    fireEvent.click(accordionHeader);

    const itemList = screen.getAllByTestId("foodItems");
    expect(itemList.length).toBe(16);

    const addBtn = screen.getAllByRole("button", {
      name: "Add +",
    });
    fireEvent.click(addBtn[0]);

    const cartCount = screen.getByText("1");
    expect(cartCount).toBeInTheDocument();

    //Clear cart operation
    expect(screen.getAllByTestId("foodItems").length).toBe(17);

    fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));

    expect(screen.getAllByTestId("foodItems").length).toBe(16);
    expect(screen.getByText("0")).toBeInTheDocument();
  });
});
