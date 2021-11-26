import { Box } from "@mui/system";
import React from "react";
import MainResultat from "../MainResultat";
import SideBar from "../SideBar";

export default function Resultat({customData,fileData}) {
    console.log(fileData);
   
    return (<>
        <Box
            sx={{
                display: 'grid',
                padding: '10px',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 1,
                gridTemplateRows: 'auto',
                gridTemplateAreas: `
                "sidebar main main main"`,
            }}
        >
            <Box sx={{ gridArea: 'main' }}>
                <MainResultat resume={fileData.resumes} />
            </Box>
            <Box sx={{ gridArea: 'sidebar' }}>
                <SideBar resume={fileData.resumes}/>
            </Box>
        </Box>
    </>);
}