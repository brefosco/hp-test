import { House } from "../types";

export const getHouseColors = (
  house: House
): { primary: string; secondary: string } => {
  switch (house) {
    case "Gryffindor":
      return { primary: "red.700", secondary: "yellow.400" };
    case "Slytherin":
      return { primary: "green.700", secondary: "gray.300" };
    case "Hufflepuff":
      return { primary: "yellow.400", secondary: "black" };
    case "Ravenclaw":
      return { primary: "blue.700", secondary: "gray.400" };
    default:
      return { primary: "gray.500", secondary: "white" };
  }
};

export const getHouseEmblem = (house: House): string => {
  switch (house) {
    case "Gryffindor":
      return "https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/88361/91122/Harry-Potter-Gryffindor-Crest-Official-wall-mounted-cardboard-cutout-buy-now-at-star__95823.1507640354.jpg?c=2";
    case "Slytherin":
      return "https://i.pinimg.com/474x/5e/0c/22/5e0c229ce7e54e27d9b15bae77ab19e6.jpg";
    case "Hufflepuff":
      return "https://i.pinimg.com/736x/c7/ce/d5/c7ced5c1092dff4b2aa3ac89b6974ac2.jpg";
    case "Ravenclaw":
      return "https://i.pinimg.com/474x/d2/33/7e/d2337e63d899b6e119cfb014bc1cee42.jpg";
    default:
      return "https://i.pinimg.com/originals/d9/c3/b8/d9c3b8484dd647f9cb46b7dc4bc73e8e.png";
  }
};
