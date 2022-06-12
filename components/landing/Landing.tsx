import { Box, Button, Divider, Typography } from "@mui/material";
import Image from "next/image";

// Motion
import { motion } from "framer-motion";

interface Props {
  handleNotification: () => void;
}

const Landing = ({ handleNotification }: Props) => {
  return (
    <Box className="index__landing" id="landing">
      <motion.div
        className="index__landing-content"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <Typography
          variant="body1"
          sx={{
            fontWeight: "bold",
            paddingBottom: "0.5em",
            color: "rgba(187, 187, 187, 0.877)",
          }}
        >
          Comienza tu aprendizaje en
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontWeight: "bold", paddingBottom: "0.5em" }}
        >
          PENSAMIENTO COMPUTACIONAL
        </Typography>

        <Typography variant="caption" fontSize={"1.2em"}>
          <i>
            &quot;El verdadero progreso es el que pone la tecnología al alcance
            de todos.&quot;
          </i>
        </Typography>
        <Typography variant="body1" textAlign={"start"}>
          - Henry Ford
        </Typography>
        <Box className="index__options" alignSelf={"center"}>
          <Button variant="contained"> Comenzar </Button>
          <Divider orientation="vertical" flexItem />
          <Button onClick={handleNotification}> Conoce más </Button>
        </Box>
      </motion.div>
      <motion.div
        className="index__landing-content"
        initial={{ x: 200, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
        style={{ width: "50%", display: "flex", alignItems: "center" }}
      >
        <Box className="landing__funcyBorder" sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              margin: "auto",
            }}
          >
            <Image
              src={
                "https://res.cloudinary.com/ddmeptk5c/image/upload/q_auto:best/v1654990680/VIRTUS/teacher_l96qkt.png"
              }
              width={460}
              height={430}
              alt="computational thinking"
              priority={true}
            />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export { Landing };
