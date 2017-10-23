import React, { Component } from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from 'semantic-ui-react';
import Payments from './components/payments';

const FixedMenu = () =>
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Features</Menu.Item>
      <Menu.Item as="a">Blogs</Menu.Item>
      <Menu.Item as="a">About</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button as="a">Pay Up</Button>
        </Menu.Item>
        <Menu.Item className="item">
          <Button as="a">Log in</Button>
        </Menu.Item>
        <Menu.Item>
          <Button as="a" primary>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>;

export default class HomepageLayout extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: false });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item as="a" active>
                  Home
                </Menu.Item>
                <Menu.Item as="a">Features</Menu.Item>
                <Menu.Item as="a">Blog</Menu.Item>
                <Menu.Item as="a">About</Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    <Payments />
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <br />
              <br />
              <Icon name="bus" size="massive" color="yellow" />
              <Header
                as="h1"
                content="Track My Kids Bus"
                inverted
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: 0,
                  marginTop: '0.5em'
                }}
              />

              <Header
                as="h2"
                content="Your Kids Safety is Our Priority"
                inverted
                style={{ fontSize: '1.7em', fontWeight: 'normal' }}
              />
              <br />
              <Button primary size="huge">
                Know More
                <Icon name="right arrow" />
              </Button>
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Header as="h3" style={{ fontSize: '2em' }}>
                  We Help Schools and Transportation Vendors
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  We provide the most secure and the state of the art technology
                  to help with tracking your kids to and from school.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign="center">
                <Button size="huge">Check our Features</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "Most Trusted Company"
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <b>School</b>
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  "One of the best and easy to use apps"
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                  <b> Chief Transportation Officer</b>
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as="h3" style={{ fontSize: '2em' }}>
              Supreme Court Guidelines on School Bus Safety
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Taking serious note of school buses allegedly violating the
              Supreme Courts guidelines on safety of children, the State
              Commission for Protection of Child Rights today issued directives
              to transport officials asking them to ensure compliance of the
              apex courts recommendations.
            </p>
            <Button as="a" size="large">
              Read More
            </Button>

            <Divider
              as="h4"
              className="header"
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href="#">Blogs</a>
            </Divider>

            <Header as="h3" style={{ fontSize: '2em' }}>
              Do you know the school bus regulations?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              The Commission observed that in most of the accidents involving
              school buses, it was found that either the school buses were not
              road-worthy or the drivers were untrained, without license or not
              according to the guidelines of Supreme Court.
            </p>
            <Button as="a" size="large">
              Im Quite Interested
            </Button>
          </Container>
        </Segment>

        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">Sitemap</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">How it started</List.Item>
                    <List.Item as="a">About Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Services" />
                  <List link inverted>
                    <List.Item as="a">Features</List.Item>
                    <List.Item as="a">FAQ</List.Item>
                    <List.Item as="a">How it started</List.Item>
                    <List.Item as="a">Story</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted />
                  <p>
                    Copyright <Icon name="copyright" /> 2017 trackmykidsbus. All
                    Rights Reserved.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
