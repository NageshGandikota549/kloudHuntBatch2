import { render, screen, fireEvent, act } from "@testing-library/react";
import { Login } from "./Login";
import "@testing-library/jest-dom";

describe("Login", () => {
  test("Should render Login Component", () => {
    //Arrange
    render(<Login />);

    //Act
    const userProfile = screen.getByTestId("user-profile");

    //Assert
    expect(userProfile).toBeInTheDocument();
  });

  test("Should show UserName label and Input", () => {
    //Arrange
    render(<Login />);
    //Act
    const userId = screen.getByText("UserId:");
    const userIdInput = screen.getByPlaceholderText("Enter Username");
    expect(userId).toBeInTheDocument();
    expect(userIdInput).toBeInTheDocument();
  });

  test("Should enable submit button when userId and password have text", async () => {
    //Arrange
    render(<Login />);

    //Act
    const userIdInput = screen.getByPlaceholderText("Enter Username");
    const passwordInput = screen.getByPlaceholderText("Enter Password");

    const submitBtn = screen.getByRole("button", {
      name: /submit/i,
    });
    expect(submitBtn).toBeDisabled();

    await fireEvent.change(userIdInput, { target: { value: "nagesh" } });
    await fireEvent.change(passwordInput, { target: { value: "12345" } });

    expect(submitBtn).toBeEnabled();
  });
});
