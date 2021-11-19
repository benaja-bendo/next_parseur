import { Box } from "@mui/system";
import React from "react";
import MainResultat from "../components/MainResultat";
import SideBar from "../components/SideBar";

export default function Resultat() {
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
                <MainResultat/>
            </Box>
            <Box sx={{ gridArea: 'sidebar' }}>
                <SideBar/>
            </Box>
        </Box>
    </>);
}