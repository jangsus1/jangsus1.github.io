import React, {Component} from 'react'
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';
import './Navbar.css'
import {Grid, Header} from 'semantic-ui-react'
import Burger from 'react-css-burger'
class Navbar extends Component {

    state = {
      active : false
    }

    componentDidUpdate(prevProps){
      if(this.props!=prevProps){
        if(this.props.menu_active){
          document.getElementById("menu").style.opacity = "1";
          document.getElementById("Navbar").style.pointerEvents = "auto";
        }
        else{
          document.getElementById("menu").style.opacity = "0";
          document.getElementById("Navbar").style.pointerEvents = "none";
        }
      }
    }

    menuClick = (number) => {
      if(number==1){
        window.location.assign('/homepage')
      }
      else if(number==2){
        window.location.assign('https://jangsus1.tistory.com')
      }
      else{
        window.location.assign('https://github.com/jangsus1')
      }
    }


    render(){
    return(
      <div id = "Navbar" className = "Navbar" style = {{margin:0}}>
      <Grid >
        <Grid.Row id = "burger" columns={1}>
          <Grid.Column>
          <Burger
            id = "burger"
            onClick={this.props.toggleMenu}
            active={this.props.menu_active}
            style = {{float : "right", outline : "none"}}
            burger="slider"
            color="black"
            hoverOpacity={0.8}
            scale={1.2}
          />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id = "menu">
          <Grid.Column>
            <Grid padded textAlign = "center">
              <Grid.Row centered columns = {1}>
                <Grid.Column textAlign = "center" >
                <Header id = "Item" onClick = {() => this.menuClick(1)} className = "menuItem" size = "huge" style = {{marginTop : 50, fontSize : '4em'}}>Home</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column textAlign = "center" >
                <Header id = "Item" onClick = {() => this.menuClick(2)} className = "menuItem" size = "huge" style = {{marginTop : 50, fontSize : '4em'}}>Blog</Header>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
              <Grid.Column textAlign = "center" >
                <Header id = "Item" onClick = {() => this.menuClick(3)} className = "menuItem" size = "huge" style = {{marginTop : 50, fontSize : '4em'}}>GitHub</Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id = "blank">
          <Grid.Column>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div >
    )
    }
}

const mapStateToProps = (state) => ({
  menu_active : state.mn.menu_active
})

const mapDispatchToProps = (dispatch) => ({
  toggleMenu : () => dispatch(actionCreators.toggleMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)


