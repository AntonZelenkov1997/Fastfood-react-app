import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { Button, Segment, Grid, Icon } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'



export const CheckSemanticUI = () => {
    return (
        <Router>
            <Link to = '/workingRouter'>
                <button className = 'checkStylesButton'>Check Router</button>
            </Link>
            <Grid columns = 'equal'>
                <Grid.Column>
                    <Segment>
                        <Link to = "/checkingUIFirst">
                            <Button color = "orange">Check SemanticUI First</Button>
                        </Link>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment>
                        <Link to = '/checkingUISecond'>
                            <Button color = "orange">Check SemanticUI Second</Button>
                        </Link>
                    </Segment>
                </Grid.Column>
            </Grid>   

            <Switch>
                <Route
                    path = "/workingRouter"
                    component = { CheckRouter }
                />
                <Route
                    path = "/checkingUIFirst"
                    component = { ButtonSemanticUIComponent }
                />      
                <Route
                    path = "/checkingUISecond"
                    component = { IconSemanticUIComponent }
                />

            </Switch>
            
        </Router>
        
    )
}

const ButtonSemanticUIComponent = () => {
    return (
        <Grid columns = 'equal'>
            <Grid.Column>
                <Segment>
                    <Button.Group>
                        <Button>UI</Button>
                        <Button positive>Checked</Button>
                    </Button.Group>
                </Segment>
            </Grid.Column>
        </Grid>  
    )
}

const IconSemanticUIComponent = () => (
        <Grid columns = 'equal'>
            <Grid.Column>
                <Segment>
                    <Icon name = "thumbs up outline"></Icon>
                    <div>Well done!!!</div>
                </Segment>
            </Grid.Column>
        </Grid>
)

const CheckRouter = (props) => {
    return(
      <div className = { props.className }> Route is working!!! </div> 
    )
  }