import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

const CustomSwitch = styled(Switch)(({ theme }) => ({
  padding: 9,
  "& .MuiSwitch-root": {
    width: "auto",
  },
  "& .MuiSwitch-switchBase": {
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(14px)",
      color: theme.palette.primary.contrastText,
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.primary.main,
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
  },
  "& .MuiSwitch-track": {
    borderRadius: 10,
    width: 34,
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0px 0px 6px 0px #0000001A, 0px 0px 4px 0px #0000000F",
    width: 14,
    height: 14,
    margin: 3,
  },
}));

type Props = {
  name: string;
  label?: string;
  checked?: boolean;
  onChange?: (key: string, value: boolean) => void;
};

function SwitchField({ name, label, checked, onChange }: Props) {
  return (
    <FormControl sx={{ height: "100%" }}>
      <FormControlLabel
        sx={{ ml: 0 }}
        control={
          <CustomSwitch
            checked={checked}
            onChange={(e) => onChange?.(name, e.target.checked)}
          />
        }
        label={label}
      />
    </FormControl>
  );
}

export default SwitchField;
