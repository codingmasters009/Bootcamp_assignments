import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


function ImageSection({ filteredData, data }) {
    return (
        <div>

            <Card sx={{ maxWidth: 500 }}>
                {
                    !filteredData ? (
                        <>
                        {
                            data.photos.map((value) => {
                             return (
                             <>
                                    {
                                        value.id === 1 ? (
                                        <>

                                            <CardMedia
                                                component="img"
                                                height="194"
                                                image={value.image_Url}
                                                alt="image"
                                            />
                                            <CardContent>
                                                <Typography variant="h5" color="text.secondary">
                                                    {value.heading}
                                                </Typography>
                                                <Typography variant="body2" color="text.secondary">
                                                    {value.description}
                                                </Typography>
                                            </CardContent>
                                
                                </>
                                    ):(<></>)
                                }
                                        </>
                    );
                                })}
            </>

            ):(
            <>
    {
        filteredData.map(filteredvalue => {
            return (<>

                <CardMedia
                    component="img"
                    height="194"
                    image={filteredvalue.image_Url}
                    alt="image"
                />
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {filteredvalue.heading}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {filteredvalue.description}
                    </Typography>
                </CardContent>
            </>
            );
        })
    }
</>
                )}
        </Card>

        </div >
    );
}

export default ImageSection
