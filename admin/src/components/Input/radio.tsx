import React from "react";
import { Box, Radio, RadioGroup } from "@strapi/design-system";
import { FingerStartSvg, HandsSvg, OrganizerSvg, ShieldSvg } from "../Svgs";

type RadioGroupIconsProps = {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  onChange: (e: {
    target: { name: string; value: string; attribute: any };
  }) => void;
  attribute: any;
  name: string;
};

const iconData = [
  { value: "OrganizerSvg", Component: OrganizerSvg },
  { value: "HandsSvg", Component: HandsSvg },
  { value: "ShieldSvg", Component: ShieldSvg },
  { value: "FingerStartSvg", Component: FingerStartSvg },
];

export const RadioGroupIcons = ({
  selected,
  setSelected,
  onChange,
  attribute,
  name,
}: RadioGroupIconsProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
    onChange({
      target: {
        name,
        value: e.target.value,
        attribute: attribute.type,
      },
    });
  };

  return (
    <Box style={{ marginTop: "1rem" }}>
      <RadioGroup
        name="icon"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "1.5rem",
        }}
        value={selected}
        onChange={handleChange}
      >
        {iconData.map(({ value, Component }) => (
          <Radio value={value} style={{ opacity: 0 }} key={value}>
            <Component isSelected={selected === value} />
          </Radio>
        ))}
      </RadioGroup>
    </Box>
  );
};
