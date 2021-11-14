import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      type: null,
      size: null,
      layout: null,
      rounded: null,

      primary: ' bg-accent-primary hover:bg-accent-hover disabled:bg-positive-quaternary text-white disabled:text-tertiary border-none',
      secondary: ' bg-positive-quaternary hover:bg-positive-tertiary text-positive-primary disabled:text-tertiary border-none',
      tertiary: ' bg-none hover:bg-blue-600 text-accent-primary hover:text-white disabled:text-tertiary border border-accent-primary disabled:border-positive-tertiary',
      ghost: ' bg-none hover:bg-positive-quaternary text-accent-primary disabled:text-tertiary border-none',
      danger: ' bg-support-danger text-white border-none disabled:opacity-50',

      large: ' px-32 py-12 rounded-06',
      medium: ' px-24 py-10 rounded-06',
      small: ' px-16 py-08 rounded-06',

      hug: ' w-auto',
      block: ' w-full',
    };
  }

  render() {
    let className =
      'btn transition-colors duration-100 ease-in-out';
    
      if (this.props.type === 'primary') {
      className += this.state.primary;
    } else if (this.props.type === 'secondary') {
      className += this.state.secondary;
    } else if (this.props.type === 'tertiary') {
      className += this.state.tertiary;
    } else if (this.props.type === 'ghost') {
      className += this.state.ghost;
    } else if (this.props.type === 'danger') {
      className += this.state.danger;
    } else {
      className += this.state.primary;
    }

    if (this.props.size === 'large') {
      className += this.state.large;
    } else if (this.props.size === 'medium') {
      className += this.state.medium;
    } else if (this.props.size === 'small') {
      className += this.state.small;
    } else {
      className += this.state.medium;
    }

    if (this.props.layout === 'hug') {
      className += this.state.hug;
    } else if (this.props.layout === 'block') {
      className += this.state.block;
    } else {
      className += this.state.hug;
    }

    return <button className={className}>{this.props.value}</button>;
  }
}

export default Button;