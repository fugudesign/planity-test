import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BenefitFieldset from "~/components/fieldsets/BenefitFieldset/BenefitFieldset";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CheckIcon from "@mui/icons-material/Check";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ContentCutIcon from "@mui/icons-material/ContentCut";
import CustomerFieldset from "~/components/fieldsets/CustomerFieldset/CustomerFieldset";
import DateFieldset from "~/components/fieldsets/DateFieldset/DateFieldset";
import DeleteIcon from "@mui/icons-material/Delete";
import Divider from "@mui/material/Divider";
import IconButton from "~/components/ui/IconButton/IconButton";
import sx from "./BookingForm.styles";
import { useState } from "react";

function BookingForm() {
  const [customer, setCustomer] = useState<Customer>({});

  const isCamed = customer.camed !== undefined && customer.camed;
  const isNotCamed = customer.camed !== undefined && !customer.camed;

  const toggleChoosen = () => {
    if (customer.id) setCustomer({ ...customer, choosen: !customer.choosen });
  };

  const handleCamed = (camed: boolean) => {
    if (customer.id) setCustomer({ ...customer, camed });
  };

  const handleUpdateCustomer = (value: Customer) => setCustomer(value);

  const handleClearCustomer = () => setCustomer({});

  return (
    <Box sx={sx.root}>
      <Card className="Py-BookingForm" sx={sx.card}>
        <CardHeader
          sx={sx.header}
          title="Rendez-vous"
          action={
            <>
              <IconButton
                size="medium"
                variant="outlined"
                icon={<ArrowBackIcon />}
              />
              <IconButton size="medium" color="primary" icon={<CheckIcon />} />
            </>
          }
        />
        <CardContent sx={sx.content}>
          <CustomerFieldset
            data={customer}
            onChange={handleUpdateCustomer}
            onClear={handleClearCustomer}
          />
          <DateFieldset />
          <BenefitFieldset />
        </CardContent>
        <CardActions sx={sx.actions}>
          <Box className="actionsLeft">
            <Button
              size="small"
              color={customer.choosen ? "primary" : "inherit"}
              variant={customer.choosen ? "contained" : "text"}
              onClick={toggleChoosen}
            >
              Choisi(e)
            </Button>
            {!!customer.id && (
              <>
                <Button
                  size="small"
                  color={isCamed ? "ternary" : "inherit"}
                  variant={isCamed ? "contained" : "text"}
                  onClick={() => handleCamed(true)}
                >
                  Venu
                </Button>
                <Button
                  size="small"
                  color={isNotCamed ? "secondary" : "inherit"}
                  variant={isNotCamed ? "contained" : "text"}
                  onClick={() => handleCamed(false)}
                >
                  Pas venu
                </Button>
                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ mx: 2 }}
                />
                <Button
                  size="small"
                  variant="text"
                  startIcon={<ContentCopyIcon />}
                >
                  Copier
                </Button>
                <Button
                  size="small"
                  variant="text"
                  startIcon={<ContentCutIcon />}
                >
                  Couper
                </Button>
                <Button size="small" variant="text" startIcon={<DeleteIcon />}>
                  Supprimer
                </Button>
              </>
            )}
          </Box>
          <Box className="actionsRight">
            <Button size="extralarge" variant="outlined" color="inherit">
              Plus d’options (produits, remises, ...)
            </Button>
            <Button size="extralarge" color="primary">
              Encaisser 30,00€
            </Button>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}

export default BookingForm;
