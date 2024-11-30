import { render, screen, fireEvent } from "@testing-library/react";
import { SecretSantaForm } from "@/components/SecretSantaForm";

jest.mock("../hooks/useSecretSanta", () => ({
  useSecretSanta: () => ({
    assignSecretSanta: jest.fn(),
    assignments: [],
  }),
}));

describe("SecretSantaForm", () => {
  it("renders the form correctly", () => {
    render(<SecretSantaForm />);
    expect(
      screen.getByPlaceholderText("Enter participant name")
    ).toBeInTheDocument();
    expect(screen.getByText("Add Participant")).toBeInTheDocument();
    expect(screen.getByText("Assign Secret Santa")).toBeInTheDocument();
  });

  it("adds a participant when the add button is clicked", () => {
    render(<SecretSantaForm />);
    const input = screen.getByPlaceholderText("Enter participant name");
    const addButton = screen.getByText("Add Participant");

    fireEvent.change(input, { target: { value: "John Doe" } });
    fireEvent.click(addButton);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });
});
