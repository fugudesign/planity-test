import { ChangeEvent, useState } from "react";

import Box from "@mui/material/Box";
import ColoredSelect from "~/components/ui/ColoredSelect/ColoredSelect";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import Fieldset from "~/components/ui/Fieldset/Fieldset";
import Grid from "@mui/material/Grid";
import IconButton from "~/components/ui/IconButton/IconButton";
import NumberField from "~/components/ui/NumberField/NumberField";
import { SelectChangeEvent } from "@mui/material/Select";
import options from "./options.json";
import sx from "./BenefitRow.styles";

type Props = {
  data: Benefit;
  onChange: (row: Benefit) => void;
  onDelete?: () => void;
};

const BenefitRow = ({ data, onChange, onDelete }: Props) => {
  const [benefit, setBenefit] = useState(data);
  const { benefits, collaborators } = options;

  const handleChange = (name: string, value: unknown) => {
    const updated = {
      ...benefit,
      [name]: value,
    };
    setBenefit(updated);
    onChange(updated);
  };

  return (
    <Fieldset sx={sx.root} icon={<DescriptionOutlinedIcon />}>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={sx.left}>
            <ColoredSelect
              sx={{ minWidth: 185 }}
              label="Choisir une prestation"
              name="benefit"
              value={benefit.benefit}
              options={benefits}
              onChange={(e: SelectChangeEvent<unknown>) =>
                handleChange(e.target.name, e.target.value)
              }
            />
            <ColoredSelect
              sx={{ minWidth: 194 }}
              label="Choisir un collaborateur"
              name="collaborator"
              value={benefit.collaborator}
              options={collaborators}
              onChange={(e: SelectChangeEvent<unknown>) =>
                handleChange(e.target.name, e.target.value)
              }
            />
          </Box>
          <Box sx={sx.right}>
            <NumberField
              value={benefit.duration}
              unit="Min"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleChange(e.target.name, e.target.value)
              }
            />
            {!!benefit.benefit && !!benefit.collaborator && (
              <>
                <NumberField
                  value={benefit.cost}
                  unit="€"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(e.target.name, e.target.value)
                  }
                />
                <IconButton
                  icon={<DeleteOutlineIcon />}
                  size="large"
                  variant="outlined"
                  onClick={() => onDelete?.()}
                />
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </Fieldset>
  );
};

export default BenefitRow;
