import { render, screen, fireEvent } from "@testing-library/react";
import CharacterCard from "../../components/CharacterCard";
import { RecoilRoot } from "recoil";
import { Character } from "../../types";
import { MemoryRouter } from "react-router-dom";

describe("CharacterCard", () => {
  test("renders character details", () => {
    const sampleCharacter: Character = {
      id: "1",
      alternate_names: [],
      species: "Human",
      gender: "Male",
      name: "Harry Potter",
      house: "Gryffindor",
      actor: "Daniel Radcliffe",
      wand: {
        wood: "Holly",
        core: "Phoenix feather",
        length: 11,
      },
      alive: true,
      alternate_actors: [],
      patronus: "Stag",
      dateOfBirth: "31 July 1980",
      ancestry: "Half-blood",
      eyeColour: "Green",
      hairColour: "Black",
      hogwartsStaff: false,
      hogwartsStudent: true,
      image: "/images/harry.jpg",
      wizard: true,
      yearOfBirth: 1980,
    };

    render(
      <RecoilRoot>
        <MemoryRouter>
          <CharacterCard character={sampleCharacter} />
        </MemoryRouter>
      </RecoilRoot>
    );

    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
  });

  test("toggles favorite state", () => {
    const sampleCharacter: Character = {
      id: "1",
      alternate_names: [],
      species: "Human",
      gender: "Male",
      name: "Harry Potter",
      house: "Gryffindor",
      actor: "Daniel Radcliffe",
      wand: {
        wood: "Holly",
        core: "Phoenix feather",
        length: 11,
      },
      alive: true,
      alternate_actors: [],
      patronus: "Stag",
      dateOfBirth: "31 July 1980",
      ancestry: "Half-blood",
      eyeColour: "Green",
      hairColour: "Black",
      hogwartsStaff: false,
      hogwartsStudent: true,
      image: "/images/harry.jpg",
      wizard: true,
      yearOfBirth: 1980,
    };

    render(
      <RecoilRoot>
        <MemoryRouter>
          <CharacterCard character={sampleCharacter} />
        </MemoryRouter>
      </RecoilRoot>
    );

    const favoriteButton = screen.getByRole("button");
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("favorite-icon")
    );

    fireEvent.click(favoriteButton);
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("unfavorite-icon")
    );

    fireEvent.click(favoriteButton);
    expect(screen.getByRole("button")).toContainElement(
      screen.getByTestId("favorite-icon")
    );
  });
});
