import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Link from 'next/link'


export default function CardBegin() {
    return (
        <Card sx={{ minWidth: 375, minHeight: 475 }}>
            <CardContent>
                <input type="file" />
                <Link href="/resultat">
                    <Button size="small">Soumettre</Button>
                </Link>
            </CardContent>
        </Card>
    );
}