import { Box, Typography } from "@mui/material"

//Motion Effects
import { motion } from "framer-motion"

const Nosotros = () => {
    return (
        <motion.div 
            className="index__nosotros" 
            drag="x"
            dragConstraints={{ left: -100, right: 100 }}
        >
            <Box>
                <Typography variant="h1">
                    Nosotros
                </Typography>
            </Box>
        </motion.div>
    )
}

export { Nosotros }
