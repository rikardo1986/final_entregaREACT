import {
  Box,
  Typography,
  Link,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        px: 3,
        mt: "auto",
        backgroundColor: "#2F4F4F",
        color: "white",
        textAlign: "left",
        bottom: 0,
        left: 0,
        width: "100%",
        position: "sticky",
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="center" spacing={3}>
          <Grid item xs={12} sm={4} md={3}>
            <Box display="flex" alignItems="center" justifyContent="flex-start">
              <img
                src="https://res.cloudinary.com/dmezvexmw/image/upload/v1731680129/logo/m83oojsqwfccax7mzidm.png"
                alt="CompuEnter Logo"
                style={{ width: "200px" }}
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={8} md={5}>
            <Typography variant="body2" sx={{ pr: 2 }}>
              Somos tu tienda de tecnología de confianza, ofreciendo los mejores
              productos y servicios. Contáctanos para cualquier consulta o
              soporte.
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              <IconButton
                href="https://facebook.com"
                target="_blank"
                sx={{ color: "white" }}
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://instagram.com"
                target="_blank"
                sx={{ color: "white" }}
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://linkedin.com"
                target="_blank"
                sx={{ color: "white" }}
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </IconButton>

              <Box display="flex" alignItems="center" ml={2}>
                <EmailIcon sx={{ mr: 1, color: "white" }} />
                <Typography variant="body2">
                  <Link
                    href="mailto:contacto@compuenter.cl"
                    sx={{ color: "white", textDecoration: "none" }}
                  >
                    contacto@compuenter.cl
                  </Link>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
