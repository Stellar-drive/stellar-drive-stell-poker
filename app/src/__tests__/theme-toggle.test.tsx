import { render, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ThemeToggle } from "../components/ThemeToggle";

describe("ThemeToggle", () => {
  it("toggles theme and persists to localStorage", () => {
    const { getByRole } = render(<ThemeToggle /> as any);
    const btn = getByRole("button");
    const prev = localStorage.getItem("stellar-drive-stell-poker-ui-theme");
    fireEvent.click(btn);
    const next = localStorage.getItem("stellar-drive-stell-poker-ui-theme");
    expect(next).not.toBeNull();
    // restore
    if (prev) localStorage.setItem("stellar-drive-stell-poker-ui-theme", prev);
  });
});
