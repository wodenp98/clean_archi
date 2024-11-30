import { render, screen, fireEvent } from "@testing-library/react";
import { MealPlanningForm } from "@/components/MealPlanningForm";

jest.mock("../hooks/useMealPlanning", () => ({
  useMealPlanning: () => ({
    addItem: jest.fn(),
    removeItem: jest.fn(),
    items: ["Turkey", "Stuffing"],
  }),
}));

describe("MealPlanningForm", () => {
  it("renders the form correctly", () => {
    render(<MealPlanningForm />);
    expect(
      screen.getByPlaceholderText("Enter item to bring")
    ).toBeInTheDocument();
    expect(screen.getByText("Add Item")).toBeInTheDocument();
    expect(screen.getByText("Turkey")).toBeInTheDocument();
    expect(screen.getByText("Stuffing")).toBeInTheDocument();
  });

  it("adds an item when the add button is clicked", () => {
    render(<MealPlanningForm />);
    const input = screen.getByPlaceholderText("Enter item to bring");
    const addButton = screen.getByText("Add Item");

    fireEvent.change(input, { target: { value: "Cranberry Sauce" } });
    fireEvent.click(addButton);

    expect(input).toHaveValue("");
  });
});
