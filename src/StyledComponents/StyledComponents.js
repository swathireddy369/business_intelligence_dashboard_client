import { Button } from "@mui/material";
import { styled } from "@mui/system";

 const StyledButton = styled(Button)({
    borderRadius:"1rem",color:"white" ,borderColor:"white",
    "&:hover": {
        backgroundColor:"#00bcd4",
        color:"black"
    },
});
// const StyledInput = styled(Input)({
//     marginTop: "2rem",
//     width: "15rem",
//     height: "2rem",
//     padding: "0.5rem",  // Adjust padding as needed
//     borderRadius: "0.5rem"
// });

export  {StyledButton}