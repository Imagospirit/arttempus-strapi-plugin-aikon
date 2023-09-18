import React, { useState } from "react";
import { Box, Typography } from "@strapi/design-system";
import { RadioGroupIcons } from "./radio";

const Input = ({ initialValue, onChange, value, attribute, name }) => {
  const [selected, setSelected] = useState(value);
  return (
    <Box>
      <Typography as="h3" fontWeight={"bold"}>
        Choisir une icône
      </Typography>
      <RadioGroupIcons
        selected={selected}
        setSelected={setSelected}
        onChange={onChange}
        attribute={attribute}
        name={name}
      />
    </Box>
  );
};

export default Input;
