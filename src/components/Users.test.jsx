import { render, screen } from "@testing-library/react";
import axios from "axios";
import Users from "./users";

jest.mock("axios");
describe("test app", () => {
  let resp;
  beforeAll(() => {
    resp = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  test("renders learn react link", async () => {
    axios.get.mockReturnValue(resp);

    render(<Users />);
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
});
