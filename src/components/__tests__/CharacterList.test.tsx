import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import CharacterList from "../CharacterList";
import { Character } from "../../types";
import { MemoryRouter } from "react-router-dom";

const sampleCharacter1: Character = {
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
  dateOfBirth: "1980-07-31",
  ancestry: "Half-blood",
  eyeColour: "Green",
  hairColour: "Black",
  hogwartsStaff: false,
  hogwartsStudent: true,
  image: "/images/harry.jpg",
  wizard: true,
  yearOfBirth: 1980,
};

const sampleCharacter2: Character = {
  id: "2",
  alternate_names: [],
  species: "half-giant",
  gender: "male",
  name: "Rubeus Hagrid",
  house: "Gryffindor",
  actor: "Robbie Coltrane",
  wand: {
    wood: "Oak",
    core: "",
    length: 12,
  },
  alive: true,
  alternate_actors: [],
  patronus: "",
  dateOfBirth: "06-12-1928",
  ancestry: "half-blood",
  eyeColour: "black",
  hairColour: "black",
  hogwartsStaff: true,
  hogwartsStudent: false,
  image: "/images/hagrid.jpg",
  wizard: true,
  yearOfBirth: 1900,
};

const characters = [sampleCharacter1, sampleCharacter2];

describe("CharacterList", () => {
  test("renders the correct number of CharacterCard components", () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <CharacterList characters={characters} />
        </MemoryRouter>
      </RecoilRoot>
    );
    expect(screen.getAllByText(/Gryffindor/).length).toBe(2);
  });

  test("handles an empty list of characters gracefully", () => {
    render(
      <RecoilRoot>
        <MemoryRouter>
          <CharacterList characters={[]} />
        </MemoryRouter>
      </RecoilRoot>
    );
    expect(screen.queryByText(/Gryffindor/)).toBeNull();
  });
});
