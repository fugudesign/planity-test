import { Children, useState } from "react";

import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import BenefitRow from "~/components/fieldsets/BenefitRow/BenefitRow";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import sx from "./BenefitFieldset.styles";

const defaultRow: Benefit = {
  benefit: "",
  collaborator: "",
  duration: 60,
  cost: 60,
};

const BenefitFieldset = () => {
  const [rows, setRows] = useState<Benefit[]>([defaultRow]);

  const handleAddRow = () => setRows([...rows, defaultRow]);

  const handleChangeRow = (index: number, row: Benefit) =>
    setRows([...rows.map((r, i) => (i === index ? row : r))]);

  const handleDeleteRow = (index: number) =>
    setRows([
      ...rows.filter((_r, i) => {
        console.log({ _r, i, index });
        return i !== index;
      }),
    ]);

  return (
    <>
      {Children.toArray(
        rows.map((row, i) => (
          <BenefitRow
            data={row}
            onChange={(r: Benefit) => handleChangeRow(i, r)}
            onDelete={() => handleDeleteRow(i)}
          />
        ))
      )}
      <Button
        size="extralarge"
        fullWidth
        sx={sx.addButton}
        startIcon={<AddCircleOutlineOutlinedIcon />}
        onClick={handleAddRow}
      >
        Ajouter une prestation à la suite
      </Button>
      <Box sx={sx.bottomButtons}>
        <Button
          startIcon={<DescriptionOutlinedIcon />}
          variant="text"
          sx={{ ml: -1 }}
        >
          Ajouter un titre
        </Button>
        <Button startIcon={<CreateOutlinedIcon />} variant="text">
          Ajouter une note
        </Button>
      </Box>
    </>
  );
};

export default BenefitFieldset;
