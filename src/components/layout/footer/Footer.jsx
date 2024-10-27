import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
        textAlign: "center",
      }}
    >
      <Typography variant="body1">© 2024 CompuEnter</Typography>
      <Typography variant="body2" color="text.secondary">
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
