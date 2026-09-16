import { render, screen } from "@testing-library/react";
import Page from "@/app/page";

describe("Page 제목", () => {
  it("제목을 한글로 표시한다", () => {
    render(<Page />);

    expect(
      screen.getByRole("heading", { name: "✨ 오늘의 할 일" })
    ).toBeInTheDocument();
  });
});
