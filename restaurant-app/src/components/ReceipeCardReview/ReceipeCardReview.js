import HomeIcon from "@mui/icons-material/Home";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import img1 from "../../images/adult-blur-blurred-background-687824.png";
import img3 from "../../images/architecture-building-city-2047397.png";
import img2 from "../../images/chef-cook-food-33614.png";
import "./ReceipeCard.css";
export default function RecipeReviewCard() {
  return (
    <div>
      <h1>Why you Choose us</h1>
     
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "4rem auto",
          gap: "2rem",
        }}
      >
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="100%"
            image={img1}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "16px" }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <LocalShippingIcon />
                Fast Delivery{" "}
              </h3>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="100%"
            image={img2}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "16px" }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <NotificationsIcon />A Good Auto Responder
              </h3>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            height="100%"
            image={img3}
            alt="Paella dish"
          />
          <CardContent>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "16px" }}
            >
              <h3
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <HomeIcon />
                Home Delivery{" "}
              </h3>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
