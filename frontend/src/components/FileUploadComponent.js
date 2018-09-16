import React, { Component } from 'react';

export default class FileUploadComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
    this.submit = this.submit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentWillMount() {
    fetch('http://localhost:8000/api/fileupload')
      .then(res => res.json())
      .then(file => file.map(file => this.props.insertFileUpload(file)))
      .catch(console.log)
  }

  handleChange(evt) {
    this.props.updateInfoForm({
      name: this.props.name,
      path: this.props.path,
      [evt.target.name]: evt.target.value
    })
  }

  onChange(e) {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
      return;
    this.createImage(files[0]);
  }
  createImage(file) {
    let reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        image: e.target.result
      })
    };
    reader.readAsDataURL(file);
  }
  submit(e) {
    e.preventDefault()
    const { name } = this.props
    fetch('http://localhost:8000/api/fileupload', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ file: this.state.image, name }),
    })
      .then(res => res.text())
      .then(console.log)
  }

  render() {
    return (
      <form onSubmit={this.submit}>
        <div>
          <label>Name</label>
          <input type="text" name='name' onChange={this.handleChange} />
        </div>
        <div>
          <input type="file" onChange={this.onChange} />
        </div>
        <button type="submit">Upload</button>
      </form>
    )
  }
}