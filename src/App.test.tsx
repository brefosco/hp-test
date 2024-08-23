import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("App", () => {
  const queryClient = new QueryClient();

  test("renders navigation and routes", () => {
    render(
      <RecoilRoot>
        <MemoryRouter initialEntries={["/"]}>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </MemoryRouter>
      </RecoilRoot>
    );
    expect(screen.getByText("Students")).toBeInTheDocument();
    expect(screen.getByText("Staff")).toBeInTheDocument();
  });
});
