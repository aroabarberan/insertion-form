import React from "react";
import { connect } from "react-redux";
import {
  insertData,
  updateInfoForm,
  clearForm
} from "../actions/DataActions";

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)

  }

  componentWillMount() {
    fetch('http://localhost:8000/api/data')
      .then(res => res.json())
      .then(data => data.map(data => this.props.insertData(data)))
      .catch(console.log)
  }

  handleChange(evt) {
    this.props.updateInfoForm({
      name: this.props.name,
      extension: this.props.extension,
      size: this.props.size,
      path: this.props.path,
      [evt.target.name]: evt.target.value
    })
  };

  submit(evt) {
    console.log(this.props.path)
    evt.preventDefault();
    const { name, extension, size } = this.props
    let path = this.props.path
    
    // path = "images/" + path.replace("C:\\fakepath\\", '')

    fetch('http://127.0.0.1:8000/api/data', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, extension, size, path }),
    })
    this.props.insertData({ name, extension, size, path })
    this.props.updateInfoForm({ name: '', extension: '', size: '', path: '' })
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.submit} enctype="multipart/form-data">
          <div>
            <label>Name</label>
            <input type="text" name='name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Path</label>
            <input type="file" name='path' onChange={this.handleChange} />
          </div>
          <button>Send</button>
        </form>

        <table border='2'>
          <tr>
            <th>Name</th>
            <th>Extension</th>
            <th>Size</th>
            <th>Path</th>
          </tr>

          {this.props.data.data.map((d, i) =>
            <tr>
              <td>{d.name}</td>
              <td>{d.extension}</td>
              <td>{d.size}</td>
              <td><img src={d.path} alt="" style={{ with: 100, height: 100 }} /></td>
            </tr>
          )}
        </table>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data,
  name: state.data.form.create.name,
  extension: state.data.form.create.extension,
  size: state.data.form.create.size,
  path: state.data.form.create.path,
  form: state.data.form
})

const mapDispatchToProps = dispatch => ({
  insertData: data => {
    dispatch(insertData(data))
  },
  updateInfoForm: dataInfo => {
    dispatch(updateInfoForm(dataInfo))
  },
  clearForm: () => {
    dispatch(clearForm())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
