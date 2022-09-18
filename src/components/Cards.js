import { useContext } from "react";
import { DataContext } from "../App";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

function Cards() {
  const data = useContext(DataContext);

  return (
    <div className="container ">
      <div className="row d-flex justify-content-center">
        {data.map((item, index) => (
          <Card
            sx={{ maxWidth: 450 }}
            key={index}
            className="col-md-6 cards"
            style={{ padding: "20px" }}
          >
            <Link to={`/project/${item.id}`}>
              <CardActionArea component="">
                <CardMedia
                  component="img"
                  height="200"
                  image={
                    item && item.ships[0] && item.ships[0].image
                      ? item.ships[0].image
                      : "https://www.universetoday.com/wp-content/uploads/2022/09/Lunar_Orbital_Platform-Gateway-2000x1200.jpg"
                  }
                  alt={item.mission_name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.mission_name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.launch_site.site_name_long}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Cards;
