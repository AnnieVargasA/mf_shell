import React from "react";
import Select from "../Select/Select";
import { FiltersFormContainer, InputStyled } from "./FiltersFormStyles";
import { naranjaGalactico, rosaPlasmico } from "../../constants/theme";

export default function FiltersForm({
  onChangeCharacterName,
  onChangeSpecie,
  onChangeStatus,
  valueSpecie,
  valueStatus,
}) {
  return (
    <div>

      <FiltersFormContainer>
        <InputStyled
          placeholder="¿Y tú cómo te llamas, error 404?"
          onChange={onChangeCharacterName}
        />
        <Select
          value={valueSpecie}
          onChange={onChangeSpecie}
          placeholder={"¿Qué especie de error cósmico eres tú?"}
          options={[
            { value: "Human", label: "🧍 Humano (aburrido)" },
            { value: "Humanoid", label: "👤 Humanoide (pero no humano)" },
            { value: "Alien", label: "👾 Alienígena baboso" },
            { value: "Robot", label: "🤖 Robot con complejo de dios" },
            { value: "Cronenberg", label: "🧟 Cronenberg mutado" },
            { value: "Mythological Creature", label: "🦄 Criatura mitológica" },
            { value: "Parasite", label: "🧠 Parásito mental" },
            { value: "Poopybutthole", label: "💩 Poopybutthole" },
            { value: "Unknown", label: "❓ Quién sabe qué es" },
          ]}
          color={rosaPlasmico}
          bordercolor={rosaPlasmico}
        />
        <Select
          value={valueStatus}
          onChange={onChangeStatus}
          placeholder={"¿Muerto, medio muerto o simplemente inútil?"}
          options={[
            { value: "alive", label: "🧬 Vivo (por ahora)" },
            { value: "dead", label: "💀 Muerto (clásico)" },
            { value: "unknown", label: "❓ Ni el script lo sabe" },
          ]}
          color={naranjaGalactico}
          bordercolor={naranjaGalactico}
        />
      </FiltersFormContainer>
    </div>
  );
}
