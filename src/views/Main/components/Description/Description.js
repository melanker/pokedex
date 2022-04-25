import React from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";

function Description({name, imageUrl}) {
    return (
        <Card>
            <CardHeader title={name}/>
            <CardContent>
                <img alt={name} src={imageUrl}/>
            </CardContent>
        </Card>
    );
}

export default Description;
