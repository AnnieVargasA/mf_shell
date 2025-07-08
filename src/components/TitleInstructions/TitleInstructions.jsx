import React from "react";
import { CharacterInstructions, CharacterTitle } from "./TitleInstructions";

export default function TitleInstructions({
  image,
  imageSrc,
  title,
  paragraph,
}) {
  return (
    <CharacterInstructions>
      <img src={image} alt={imageSrc} />
      <p>
        <CharacterTitle>{title}</CharacterTitle>
        <span>{paragraph}</span>
      </p>
    </CharacterInstructions>
  );
}
