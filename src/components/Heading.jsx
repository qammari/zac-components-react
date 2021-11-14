import React from 'react';

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      type: null,

      h120: ' text-120 leading-128 tracking-t128',
      h96: ' text-96 leading-104 tracking-t104',
      h72: ' text-72 leading-80 tracking-t080',
      h56: ' text-56 leading-64 tracking-t064',
      h40: ' text-40 leading-48 tracking-t048',
      h32: ' text-32 leading-40 tracking-t024',
      h24: ' text-24 leading-32 tracking-t016',
      h20: ' text-20 leading-28 tracking-t008',
      h16: ' text-16 leading-24 tracking-0',
      h14: ' text-14 leading-20 tracking-w008',
      h12: ' text-12 leading-16 tracking-t016',
    };
  }

  render() {
    let className =
      'font-sans font-semibold';
    
      if (this.props.type === 'h120') {
      className += this.state.h120;
    } else if (this.props.type === 'h96') {
      className += this.state.h96;
    } else if (this.props.type === 'h72') {
      className += this.state.h72;
    } else if (this.props.type === 'h56') {
      className += this.state.h56;
    } else if (this.props.type === 'h40') {
      className += this.state.h40;
    } else if (this.props.type === 'h32') {
      className += this.state.h32;
    } else if (this.props.type === 'h24') {
      className += this.state.h24;
    } else if (this.props.type === 'h20') {
      className += this.state.h20;
    } else if (this.props.type === 'h16') {
      className += this.state.h16;
    } else if (this.props.type === 'h14') {
      className += this.state.h14;
    } else if (this.props.type === 'h12') {
      className += this.state.h12;
    } else {
      className += this.state.h16;
    }

    return <h1 className={className}>{this.props.value}</h1>;
  }
}

export default Heading;