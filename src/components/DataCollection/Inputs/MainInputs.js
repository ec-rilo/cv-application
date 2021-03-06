import React, { Component } from 'react';

class TextInput extends Component {
  render() {
    const { inputInfo, updateData } = this.props;
    return (
      <div className="default-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="text"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
          required
        ></input>
      </div>
    );
  }
}

class ImgInput extends Component {
  render() {
    const { inputInfo, updateData } = this.props;

    return (
      <div className="default-input-container img-input">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="file"
          accept=".png, .jpg, .jpeg"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          onChange={(e) => updateData(inputInfo.forProp, e.target.files[0])}
          required
        ></input>
        <p>Image</p>
      </div>
    );
  }
}

class TelInput extends Component {
  render() {
    const { inputInfo, updateData } = this.props;

    return (
      <div className="default-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="tel"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
          required
        ></input>
      </div>
    );
  }
}

class EmailInput extends Component {
  render() {
    const { inputInfo, updateData } = this.props;
    return (
      <div className="default-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <input
          type="email"
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
          required
        ></input>
      </div>
    );
  }
}

class DescriptionInput extends Component {
  render() {
    const { inputInfo, updateData } = this.props;

    return (
      <div className="description-input-container">
        <label htmlFor={inputInfo.forProp}></label>
        <textarea
          id={inputInfo.forProp}
          placeholder={inputInfo.text}
          onChange={(e) => updateData(inputInfo.forProp, e.target.value)}
          required
        ></textarea>
      </div>
    );
  }
}

export { TextInput, ImgInput, TelInput, EmailInput, DescriptionInput };
