import React, { useState } from 'react';
import Box from '@mui/material/Box';
import CardBegin from '../components/CardBegin'
import { Button, Card, CardContent } from '@mui/material';
import Link from 'next/link'

export default function Home() {
  const [files, setFiles] = useState("");

  const handleChange = e => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = e => {
      console.log("e.target.result", e.target.result);
      setFiles(e.target.result);
    };
  };
  return (
    <>
      <Box
        sx={{
          width: 300,
          height: 300,
          margin: '0 auto'
        }}
      >
        <Card sx={{ minWidth: '100%', height: "100%" }}>
          <CardContent>
            <input type="file" onChange={handleChange} />
            <Link href="/resultat">
              <Button size="small">Soumettre</Button>
            </Link>
          </CardContent>
        </Card>
      </Box>
      {"Contenue du json: ----- " }
      <br/>
      <br/>
      {files}
    </>);
}

