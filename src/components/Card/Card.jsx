import React from "react";
import { CardContainer, CardImage, Data, DetailsContainer } from "./CardStyles";
import PrimaryButton from "../Buttons/PrimaryButton";
import { especies, estados, generos } from "../../constants/translate";

export default function Card({
  image,
  name,
  gender,
  status,
  species,
  detailUrl,
}) {
  const traducir = (valor, mapa) => mapa[valor] || valor;
  return (
    <CardContainer>
      <CardImage
        src={image}
        alt={name}
        width={120}
        style={{ borderRadius: 8 }}
      />
      <DetailsContainer>
        <h3>{name}</h3>
        <Data>
          <h4>Género:&nbsp;</h4>
          <p>{traducir(gender, generos)}</p>
        </Data>
        <Data>
          <h4>Estado:&nbsp;</h4>
          <p>{traducir(status, estados)}</p>
        </Data>
        <Data>
          <h4>Especie:&nbsp;</h4>
          <p>{traducir(species, especies)}</p>
        </Data>
        <PrimaryButton onClick={() => window.open(detailUrl, "_blank")}>
          Ver detalle
        </PrimaryButton>
      </DetailsContainer>
    </CardContainer>
  );
}
