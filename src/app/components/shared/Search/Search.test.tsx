import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Search, { SearchItem } from ".";

test("renders search component properly", () => {
  const itemSelected = () => {};
  const label = "SearchLabel";
  render(
    <Search
      items={[...mockItems]}
      label={label}
      onItemSelected={itemSelected}
    />
  );

  const properLabel = screen.getByText(label);
  expect(properLabel).toBeInTheDocument();
});

test("renders result on change properly", async () => {
  const itemSelected = () => {};
  const label = "SearchLabel";

  render(
    <Search
      items={[...mockItems]}
      label={label}
      onItemSelected={itemSelected}
    />
  );

  const expectedResultsCount = 1;
  const searchElement = screen.getByTestId("search-input");
  fireEvent.change(searchElement, {
    target: { value: "1c" },
  });

  await waitFor(
    async () => {
      const results = await screen.findAllByTestId("search-result-item");
      expect(results).toHaveLength(expectedResultsCount);
    },
    { timeout: 2000 }
  );
});

test("renders multiple results on change properly", async () => {
  const itemSelected = (item: SearchItem) => {};
  const label = "SearchLabel";

  render(
    <Search
      items={[...mockItems]}
      label={label}
      onItemSelected={itemSelected}
    />
  );

  const expectedResultsCount = 2;
  const searchElement = screen.getByTestId("search-input");
  fireEvent.change(searchElement, {
    target: { value: "e" },
  });

  await waitFor(
    async () => {
      const results = await screen.findAllByTestId("search-result-item");
      expect(results).toHaveLength(expectedResultsCount);
    },
    { timeout: 2000 }
  );
});

test("renders no results on no matches", async () => {
  const itemSelected = () => {};
  const label = "SearchLabel";

  render(
    <Search
      items={[...mockItems]}
      label={label}
      onItemSelected={itemSelected}
    />
  );

  const searchElement = screen.getByTestId("search-input");
  fireEvent.change(searchElement, {
    target: { value: "somethingunknown" },
  });

  await waitFor(
    async () => {
      const result = await screen.findByTestId("search-results-no-results");
      expect(result).toBeInTheDocument();
    },
    { timeout: 2000 }
  );
});

test("properly selects the searched value", async () => {
  const itemSelected = jest.fn();
  const label = "SearchLabel";

  render(
    <Search
      items={[...mockItems]}
      label={label}
      onItemSelected={itemSelected}
    />
  );

  const searchElement = screen.getByTestId("search-input");
  fireEvent.change(searchElement, {
    target: { value: "1c" },
  });

  await waitFor(
    async () => {
      const result = await screen.findByTestId("search-result-item");
      expect(result).toBeInTheDocument();
      fireEvent.click(result);
      expect(itemSelected).toBeCalled();
    },
    { timeout: 2000 }
  );
});

const mockItems = [
  { text: "1c Enterprise", id: "0" },
  { text: "2-Dimensional Array", id: "387204628" },
  { text: "4D", id: "577529595" },
  { text: "ABAP", id: "1" },
  { text: "ABAP CDS", id: "452681853" },
  { text: "ABNF", id: "429" },
];
