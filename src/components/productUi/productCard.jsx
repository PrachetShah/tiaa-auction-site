import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { useState } from 'react';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import PreviewIcon from '@mui/icons-material/Preview';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useNavigate } from "react-router-dom";
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export default function ProductCard({ data }) {

    const navigate = useNavigate();
    const allDetail = () => {
        navigate("/products/:id")
    }
    const [rating, setRating] = useState(3);

    const handleRatingChange = (event, value) => {
        setRating(value);
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const MotionCardMedia = motion(CardMedia);
    return (
        <Card elevation={8} sx={{ maxWidth: 345 }} style={{ marginBottom: "20px" }} >

            <MotionCardMedia
                component="img"
                height="194"
                image={data.image || "https://imageio.forbes.com/specials-images/imageserve/5f85be4ed0acaafe77436710/0x0.jpg?format=jpg&width=1200"}
                alt="Paella dish"
                onClick={allDetail}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}

            />
            <CardContent>
                <Typography variant="body1" style={{ fontSize: "1.2rem" }}>
                    {data.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.auctionStatus == "Upcoming" ?
                        "Start data: " + data.startDate.slice(0, 10) : "End data: " + data.endDate.slice(0, 10)}
                </Typography>
            </CardContent>
            <Divider />
            <CardContent>
                <Rating
                    name="star-rating"
                    value={rating}
                    onChange={handleRatingChange}
                    precision={0.5}
                    size="large"
                />
            </CardContent>
            <Divider />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.description}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites" onClick={handleOpen}>
                    <ShoppingBagIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <PreviewIcon />
                </IconButton>
            </CardActions>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
            </Modal>
        </Card>
    );
}