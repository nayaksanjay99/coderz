/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import AddAlert from "@material-ui/icons/AddAlert";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
  }

  elements=()=>{
      if(this.props.notificaions==0)
        return(<GridItem>
          <h5>Notifications Style</h5>
  //             <br /> <SnackbarContent message={"No notifications    "} />
            </GridItem>
          )
          else
          return(
            <GridItem >
              <h5>Notifications Style</h5>
              <br />
              <SnackbarContent message={"This is the first plain notification"} />
              <SnackbarContent
                message={"This is the second notification with close button."}
                close
              />
              <SnackbarContent
                message={"This is a third notification with a close button and an icon."}
                close
                icon={AddAlert}
              />
              <SnackbarContent
                message={
                  "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
                }
                close
                icon={AddAlert}
              />
            </GridItem>
          )
  }
  // <GridItem >
  //             <h5>Notifications Style</h5>
  //             <br />
  //             <SnackbarContent message={"This is the first plain notification"} />
  //             <SnackbarContent
  //               message={"This is the second notification with close button."}
  //               close
  //             />
  //             <SnackbarContent
  //               message={"This is a third notification with a close button and an icon."}
  //               close
  //               icon={AddAlert}
  //             />
  //             <SnackbarContent
  //               message={
  //                 "This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned. This is a beautiful notification. So you don't have to worry about the style."
  //               }
  //               close
  //               icon={AddAlert}
  //             />
  //           </GridItem>
            
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Notifications</h4>
          <p className={classes.cardCategoryWhite}>
          View all active and inactive notifications here
          </p>
        </CardHeader>
        <CardBody>
          <br />
          <br />
        </CardBody>
      </Card>
    );
  }
}

const mapStateToProps=(userState)=>
{
  return{
    userState
  }
}

export default withStyles(styles)(Notifications);
