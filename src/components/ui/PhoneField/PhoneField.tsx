import * as countryFlagIcons from "country-flag-icons";

import { ChangeEvent, Children, useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField, { TextFieldProps } from "@mui/material/TextField";

import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import countriesOptions from "./countries";
import sx from "./PhoneField.styles";

type CountryCode = keyof typeof countriesOptions;

type Props = TextFieldProps & {
  defaultCountry: CountryCode;
};

function PhoneField({
  defaultCountry = "FR",
  value: defaultValue,
  sx: sxProp,
  ...props
}: Props) {
  const [selectedCountry, setSelectedCountry] = useState(defaultCountry);
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(defaultValue);

  const handleChangeCountry = (event: SelectChangeEvent<CountryCode>) => {
    setSelectedCountry(event.target.value as CountryCode);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleFocus = () => setFocus(true);

  const handleBlur = () => setFocus(!!value);

  const renderMenuItems = Children.toArray(
    Object.entries(countriesOptions).map(([code, { prefix, label }]) => (
      <MenuItem value={code} className="flag">
        <Box className="Py-PhoneField-item" sx={sx.item}>
          {countryFlagIcons.hasFlag(code) ? (
            <img
              style={{ width: "16px" }}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${code}.svg`}
            />
          ) : (
            code
          )}
          <Box sx={sx.itemInfos}>
            <Typography sx={{ mx: 1, flexGrow: 1 }}>{label}</Typography>
            <Typography>+{prefix}</Typography>
          </Box>
        </Box>
      </MenuItem>
    ))
  );

  return (
    <TextField
      {...props}
      value={value ?? ""}
      sx={{ ...sx.root, ...sxProp }}
      type="tel"
      InputLabelProps={{
        shrink: focus,
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              className="Py-PhoneField-select"
              disabled={props.disabled}
              value={selectedCountry}
              onChange={handleChangeCountry}
              variant="standard"
            >
              {renderMenuItems}
            </Select>
          </InputAdornment>
        ),
      }}
      inputProps={{
        pattern: "[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}",
      }}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
}

export default PhoneField;
