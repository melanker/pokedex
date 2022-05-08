import React from 'react';
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";

type  DescriptionProps = {
    name: string,
    imageUrl: string,
}

function Description({name, imageUrl}: DescriptionProps) {
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
