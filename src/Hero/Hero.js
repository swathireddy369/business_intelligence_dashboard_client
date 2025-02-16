import { Box, Button ,Typography,Stack} from "@mui/material";
import image from "../Asserts/IMG-20250216-WA0011.jpg";
import {StyledButton} from "../StyledComponents/StyledComponents"
import { redirect, useNavigate } from "react-router-dom";
const Hero=()=>{
    const navigate=useNavigate();
    return(
        <>
        <Box sx={{
            backgroundImage:`url(${image})`,
            backgroundSize:'cover',
            backgroundPosition:'center',
            height:'100vh'
        }}>
            {/* <Box  sx={{display:"flex",justifyContent: "flex-end",gap:2,position:"relative",top:20,right:20,}}> */}
            <Stack direction="row" spacing={2} sx={{display:"flex",justifyContent: "flex-end",position:"relative",top:20,right:20}}>
         <StyledButton variant="outlined" onClick={()=>navigate("/login")}>
          Login
         </StyledButton>
         <StyledButton variant="outlined" onClick={()=>navigate("/sign-up")}>
            Signup
            </StyledButton>
            </Stack>
            {/* </Box> */}
            <div style={{padding:"8rem",color:"white"}}>
            <h1>
                <>
            <Typography variant="h3" fontWeight="bold">
                Welcome to Your AI-Powered Intelligence Hub! 
            </Typography>
            <Typography variant="h5" mt={2}>
                Transform Data into Insights, Hands-Free with Voice-Driven Analytics.
            </Typography></>
            </h1>
            </div>
        </Box>
        </>
    )
}
export default Hero;