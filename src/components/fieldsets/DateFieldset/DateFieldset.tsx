import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import Checkbox from "@mui/material/Checkbox";
import Fieldset from "~/components/ui/Fieldset/Fieldset";
import FormControlLabel from "@mui/material/FormControlLabel";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import sx from "./DateFieldset.styles";
import { useState } from "react";

const DateFieldset = () => {
  const [fullDay, setFullDay] = useState(false);

  const handleChangeFullDay = () => {
    setFullDay(!fullDay);
  };

  return (
    <Fieldset icon={<CalendarTodayOutlinedIcon />}>
      <Grid container spacing={2}>
        <Grid item width="35%">
          <TextField value="Lundi 21 mars" fullWidth />
        </Grid>
        <Grid item width="65%" sx={sx.right}>
          {!fullDay && (
            <>
              <Typography sx={sx.text}>de</Typography>
              <ButtonGroup sx={sx.time} size="large">
                <Button>14</Button>
                <Button>30</Button>
              </ButtonGroup>
              <Typography sx={sx.text}>à</Typography>
              <ButtonGroup sx={sx.time} size="large">
                <Button>15</Button>
                <Button>30</Button>
              </ButtonGroup>
              (1h)
            </>
          )}
          <FormControlLabel
            control={<Checkbox onChange={handleChangeFullDay} />}
            label="Jour entier"
            sx={sx.checkbox}
          />
        </Grid>
      </Grid>
    </Fieldset>
  );
};

export default DateFieldset;
