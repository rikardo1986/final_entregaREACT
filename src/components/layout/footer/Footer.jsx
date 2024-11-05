import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "black",
        color: "white",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Typography variant="body1">© 2024 CompuEnter</Typography>

      <Typography variant="body2">
        <Link href="mailto:contacto@compuenter.com" color="inherit">
          contacto@compuenter.cl
        </Link>
      </Typography>

      <Typography variant="body2">
        <Link href="https://example.com" color="inherit">
          Términos de Servicio
        </Link>
        {" | "}
        <Link href="https://example.com" color="inherit">
          Política de Privacidad
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
