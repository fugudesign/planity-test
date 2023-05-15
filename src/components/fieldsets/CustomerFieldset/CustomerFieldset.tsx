import { ChangeEvent, useState } from "react";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonsField from "~/components/ui/ButtonsField/ButtonsField";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import CardMembershipOutlinedIcon from "@mui/icons-material/CardMembershipOutlined";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Fieldset from "~/components/ui/Fieldset/Fieldset";
import Grid from "@mui/material/Grid";
import IconButton from "~/components/ui/IconButton/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import InputAdornment from "@mui/material/InputAdornment";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import PhoneField from "~/components/ui/PhoneField/PhoneField";
import SwitchField from "~/components/ui/SwitchField/SwitchField";
import TextField from "@mui/material/TextField";
import sx from "./CustomerFieldset.styles";

type Props = {
  data: Customer;
  onChange?: (value: Customer) => void;
  onClear?: () => void;
};

const CustomerFieldset = ({ data: customer, onChange, onClear }: Props) => {
  const [infoOpen, setInfoOpen] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
    onChange?.({ ...customer, [event.target.name]: event.target.value });

  const handleInfoChange = (key: string, value: unknown) =>
    onChange?.({ ...customer, [key]: value });

  const handleCreate = () => onChange?.({ ...customer, id: Date.now() });

  const handleClear = () => {
    onClear?.();
    setInfoOpen(false);
  };

  const toggleInfo = () => setInfoOpen(!infoOpen);

  return (
    <Fieldset sx={sx.root} icon={<AccountCircleOutlinedIcon />} alignIcon="top">
      <Grid container spacing={2}>
        <Grid item xs>
          <TextField
            label="Choisir un client"
            name="name"
            value={customer.name ?? ""}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: !!customer.name && !customer.id && (
                <InputAdornment position="end">
                  <Button
                    size="small"
                    color="primary"
                    sx={{ borderRadius: "4px", mr: -0.6 }}
                    onClick={handleCreate}
                  >
                    Créer
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item width="256px">
          <PhoneField
            label="Téléphone"
            name="phone"
            value={customer.phone}
            defaultCountry="FR"
            disabled={!customer.name}
            fullWidth
          />
        </Grid>
        <Grid item xs>
          <TextField
            label="Email"
            name="email"
            value={customer.email}
            disabled={!customer.name}
            fullWidth
          />
        </Grid>
        {!!customer.id && (
          <Grid item>
            <IconButton
              icon={<DeleteOutlineIcon />}
              size="large"
              variant="outlined"
              onClick={handleClear}
            />
          </Grid>
        )}
      </Grid>
      {!!customer.id && (
        <>
          <Grid container spacing={2}>
            <Grid item xs>
              <ButtonsField
                icon={<PersonOutlinedIcon />}
                value={customer?.gender ?? ""}
                name="gender"
                options={["Homme", "Femme", "Enfant"]}
                toggle
                fullWidth
                onChange={handleInfoChange}
              />
            </Grid>
            <Grid item width="256px">
              <ButtonsField
                icon={<CakeOutlinedIcon />}
                value={customer?.birthday ?? ""}
                name="birthday"
                options={["20", "Sept"]}
                fullWidth
                onChange={handleInfoChange}
              />
            </Grid>
            <Grid item xs>
              <Box sx={sx.centerBox}>
                <SwitchField
                  label="SMS de rappel"
                  name="schedulingSMS"
                  checked={customer.schedulingSMS ?? false}
                  onChange={handleInfoChange}
                />
                <SwitchField
                  label="SMS marketing"
                  name="marketingSMS"
                  checked={customer.marketingSMS ?? false}
                  onChange={handleInfoChange}
                />
              </Box>
            </Grid>
            <Grid width="64px"></Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box sx={{ ...sx.infoBlock, mt: !infoOpen ? -1 : 0 }}>
                <InfoOutlinedIcon />
                {!infoOpen ? (
                  <Button
                    variant="text"
                    sx={sx.linkButton}
                    onClick={toggleInfo}
                  >
                    Info client
                  </Button>
                ) : (
                  <TextField
                    label="Info client"
                    name="info"
                    value={customer.info ?? ""}
                    multiline
                    fullWidth
                    onChange={handleChange}
                  />
                )}
              </Box>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <Box
                sx={{
                  ...sx.alignCenter,
                  ...sx.bottomLinks,
                  mt: !infoOpen ? -1 : 0,
                  mb: -1.5,
                }}
              >
                <Box sx={{ ...sx.infoBlock, ...sx.alignCenter }}>
                  <CardMembershipOutlinedIcon />
                  <Button variant="text" sx={sx.linkButton}>
                    Carte de fidélité
                  </Button>
                  <Box>: Points : 42 - Gains : 10,00€ (+)</Box>
                </Box>
                <Box sx={{ ...sx.infoBlock, ...sx.alignCenter }}>
                  <ContentCopyOutlinedIcon />
                  <Button variant="text" sx={sx.linkButton}>
                    Forfait brushing par 5 - cheveux courts
                  </Button>
                  <Box sx={sx.buttonSuffix}>(4)</Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </>
      )}
    </Fieldset>
  );
};

export default CustomerFieldset;
