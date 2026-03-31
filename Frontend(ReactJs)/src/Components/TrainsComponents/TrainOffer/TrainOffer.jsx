import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./TrainOffer.css"

export default function TrainOffer() {
  const allTrainOffers = [
    {
      img: "https://promos.makemytrip.com/images/bhim-upi-train-tb-dt-170226.webp",
      heading: "For Your Next Trip",
      description: "Falt 20 off on tarin bookings",
      offerCode: "MMTBHIM",
      detailsButton: "Book Now",
    },
    {
      img: "https://promos.makemytrip.com/images/bhim-upi-train-tb-dt-170226.webp",
      heading: "For Your Next Trip",
      description: "Falt 20 off on tarin bookings",
      offerCode: "MMTBHIM",
      detailsButton: "Book Now",
    },{
      img: "https://promos.makemytrip.com/images/bhim-upi-train-tb-dt-170226.webp",
      heading: "For Your Next Trip",
      description: "Falt 20 off on tarin bookings",
      offerCode: "MMTBHIM",
      detailsButton: "Book Now",
    },
  ];

  const displayOffers = allTrainOffers.map(function (offer) {
    return (
      <>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={offer.img}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {offer.heading}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {offer.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">{offer.offerCode}</Button>
            <Button size="small">{offer.detailsButton}</Button>
          </CardActions>
        </Card>
        ;
      </>
    );
  });

  return (
    <>
    <div className="offersflexcard">

    {displayOffers}
    </div>
    </>
  );
}
