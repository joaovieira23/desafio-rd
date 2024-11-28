import { describe, test, expect } from "vitest";
import { screen } from "@testing-library/react";
import { EmptyInformation } from "./EmptyInformation";
import { customRender } from "../../test/utils";

function setup(text) {
  customRender(
    <EmptyInformation
      emptyMessagesListTitle="titulo"
      emptyMessagesSorryNotFoundAnyItemWithDescription="texto informativo"
      titleArea={text}
    />
  );
}

describe("EmptyInformation Component", () => {
  test("Renderiza o texto informado corretamente", () => {
    setup("Texto personalizado");

    expect(screen.getByText(/Texto personalizado/i)).toBeInTheDocument();
  });

  test("Renderiza apenas o texto padrão quando nenhuma informação é passada", () => {
    setup();

    expect(screen.getByText(/texto informativo/i)).toBeInTheDocument();
  });

  test("Corresponde ao snapshot atual", () => {
    const { container } = customRender(
      <EmptyInformation
        emptyMessagesListTitle="titulo"
        emptyMessagesSorryNotFoundAnyItemWithDescription="texto informativo"
      />
    );

    expect(container).toMatchSnapshot();
  });
});
