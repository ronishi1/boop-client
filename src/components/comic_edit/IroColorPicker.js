import React, { Component } from "react";
import iro from "@jaames/iro";
class IroColorPicker extends React.Component {
  componentDidMount() {
    const { props } = this;
    // create a new iro color picker and pass component props to it
    this.colorPicker = new iro.ColorPicker(this.el, props,);
    // call onColorChange prop whenever the color changes
    this.colorPicker.on("color:change", color => {
        var hexString = color.hexString
        if (props.onColorChange) props.onColorChange(hexString);
    });
  }

  componentDidUpdate() {
    // isolate color from the rest of the props
    const { color, ...colorPickerState } = this.props;
    // console.log(this.props)
    // update color
    if (color) this.colorPicker.color.set(color);
    // push rest of the component props to the colorPicker's state
    this.colorPicker.setState(colorPickerState);
  }

  render() {
    // console.log(this);
    return <div ref={el => (this.el = el)} />;
  }
}
export default IroColorPicker;
