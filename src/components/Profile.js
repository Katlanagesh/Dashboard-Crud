import React from "react";
import { useHistory } from "react-router-dom";
import { styled } from '@mui/material/styles';
import clsx from "clsx";
import Card from '@mui/material/Card';
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Paper from '@mui/material/Paper'
import { Create } from "@mui/icons-material";
import { useGlobalContext } from "./userContext";

const useStyles = styled((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function ProfileCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const history = useHistory();

  const { profileuserData } = useGlobalContext();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
 

  function editProfile(id) {
    history.push(`/ProfileEdit/${id}`);
  }

  return (
    <>
      <div
        style={{
          margin: `50px`,
          display: `flex`,
          flexDirection: `row`,
          justifyContent: `space-between`
        }}
        className="e-card e-card-horizontal"
      >
        <Card className={classes.root}>
          <Paper variant="outlined" />
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={profileuserData.name}
            subheader="April 14, 2023"
          />
            <CardMedia
        component="img"
        height="500"
        
        image="https://th.bing.com/th?id=OIP.N3Jpe4VPoJacMfxlaEmeeAHaHa&w=249&h=249&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        alt="Ram Charan"
      />
          <CardContent>
            <Typography variant="body2" color="textSecondary" component="p">
              Please click arrow down to see more details
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label="edit"
              onClick={() => editProfile(profileuserData.id)}
            >
              <Create />
            </IconButton>
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>

          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography color="primary" paragraph>
                Personal Info:
              </Typography>
              <Typography paragraph>
                Email ID:{profileuserData.email}
                <br />
                Mobile Number:{profileuserData.mobile}
              </Typography>
              <Typography color="primary" paragraph>
                About
              </Typography>
              <Typography paragraph>{profileuserData.about}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
      
    </>
  );
}