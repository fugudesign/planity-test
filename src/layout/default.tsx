import BookingForm from "~/components/BookingForm/BookingForm";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

function DefaultLayout() {
  return (
    <Container maxWidth="lg" sx={{ pt: 4 }} disableGutters>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <BookingForm />
        </Grid>
      </Grid>
    </Container>
  );
}

export default DefaultLayout;
