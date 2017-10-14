import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { indigo500 } from 'material-ui/styles/colors';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import DropDownMenu from 'material-ui/DropDownMenu';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import Drawer from 'material-ui/Drawer';
import Dialog from 'material-ui/Dialog';
import { Tabs, Tab } from 'material-ui/Tabs';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
import { Grid, Row, Col, Jumbotron, Button } from 'react-bootstrap';

const iconStyles = {
  marginRight: 24
};

const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      value: 3
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleTouchTap = event => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [
      <FlatButton label="Cancel" primary={true} onClick={this.handleClose} />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    return (
      <div>
        <Toolbar>
          <ToolbarGroup firstChild={true}>
            <h2>
              <ToolbarTitle text="Track My Kids Bus" />
            </h2>
          </ToolbarGroup>
          <ToolbarGroup>
            <ToolbarTitle text="Features" />

            <ToolbarTitle text="About Us" />

            <ToolbarTitle text="Options" />

            <FontIcon className="muidocs-icon-custom-sort" />
            <ToolbarSeparator />

            <RaisedButton label="Notify Me" onClick={this.handleOpen} />
            <Dialog
              title="Thanks for your interest. Please enter your email"
              actions={actions}
              modal={false}
              open={this.state.open}
              onRequestClose={this.handleClose}
            >
              <TextField floatingLabelText="Email Address" />
            </Dialog>
          </ToolbarGroup>
        </Toolbar>
        <Jumbotron>
          <h1>Hello, world!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button bsStyle="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Header;
