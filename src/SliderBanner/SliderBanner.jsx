import { red } from '@mui/material/colors'
import React from 'react'
import './SliderBanner.css'
import { Button, AppBar, Toolbar, Tabs, IconButton, Typography, Stack, Tab, useMediaQuery, useTheme, Grid } from '@mui/material'

{/*
const SliderBanner = () => {
    return (
           <div style={{ border: '1px solid red' }}>
          <img src="/PruebaBanner.png" width="auto" height="233px"   >

            </img>
             <img srcset="/PruebaBanner.png 500w, /PruebaBanner.png 1000w, /PruebaBanner.png 2000w" 
     sizes="(max-width: 500px) auto, (max-width: 1000px) 100px, 2000px" 
     src="/PruebaBanner.png" 
     alt="image"></img>

        </div>


    )
}

export default SliderBanner
*/}

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.prevItem = this.prevItem.bind(this);
    this.nextItem = this.nextItem.bind(this);

    this.state = {
      counter: 0,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    };
  }

  prevItem() {
    var prevItem = this.state.counter - 1 < 0 ? this.props.items.length - 1 : this.state.counter - 1;

    clearTimeout(this.state.timeout);
    this.setState({
      counter: prevItem,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  }

  nextItem() {
    var nextItem = this.state.counter + 1 < this.props.items.length ? this.state.counter + 1 : 0;

    clearTimeout(this.state.timeout);
    this.setState({
      counter: nextItem,
      timeout: setTimeout(this.nextItem, this.props.timeoutTime)
    });
  }

  render() {
    const items = this.renderItems(this.props.items);

    return (
      <div className="carousel">
        <div className="carousel-prev" onClick={this.prevItem}></div>
        {items}
        <div className="carousel-next" onClick={this.nextItem}></div>
      </div>

    );
  }

  renderItems(items) {
    return items.map((item, index) => this.renderItem(item, (this.state.counter === index)));
  }

  renderItem(item, current) {
    return (
      <CarouselItem {...item} current={current}></CarouselItem>
    );
  }
}

class CarouselItem extends React.Component {
  render() {
    return (
      <>
        <div className={"carousel-item " + (this.props.current ? 'current' : '')}>
          <img src={this.props.image} role="presentation" />
          <div className="carousel-heading">
            <h2>{this.props.title}</h2>
            <h3>{this.props.caption}</h3>
          </div>
        </div>
        {/*  <Grid container direction='row' >
          <Grid item xs={12}>
            
              <img src={this.props.image} role="presentation" className='responsive' />

           
          </Grid>

        </Grid>*/}


      </>

    );
  }
}
export default Carousel;


