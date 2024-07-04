import { describe, expect, it } from "vitest";
import Welcome from "../components/Welcome";
import { render } from "@testing-library/react";

describe("h1 is on welcomeComponent", () => {
  it("mounts the h1 correctly", () => {
    render(<Welcome />);

    const cardH1 = screen.getByText(/shop libri fantasy /i);

    expect(cardH1).toBeInTheDocument();
  });
});
