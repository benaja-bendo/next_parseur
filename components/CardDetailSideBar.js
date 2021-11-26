import React from "react";
import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

export default function CardDetailSideBar({title}){
    return(<>
    <Card
        style={{
          width: 400,
          marginBottom: 12,
        }}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
          {title}
          </Typography>
        </CardContent>
      </Card>
    </>);
}