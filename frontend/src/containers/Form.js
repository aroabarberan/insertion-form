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
    evt.preventDefault();
    const { name } = this.props
    let path = this.props.path

    path = path.replace("C:\\fakepath\\", '')

    const fd = new FormData();
    fd.append('images/', path);

    fetch('http://127.0.0.1:8000/api/data', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, path }),
    })
    this.props.insertData({ name, path })
    this.props.updateInfoForm({ name: '', path: '' })
  }

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.submit} method="POST" encType="multipart/form-data">
          <div>
            <label>Name</label>
            <input type="text" name='name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Path</label>
            <input type="file" name='path' onChange={this.handleChange} />
          </div>
          <input type="submit" value="send" />
        </form>

        <table border='2'>
          <tr>
            <th>Name</th>
            <th>Extension</th>
            <th>Size</th>
            <th>Path</th>
          </tr>

          {this.props.data.data.map((d, i) =>
            <tr key={i}>
              <td>{d.name}</td>
              <td>{d.extension}</td>
              <td>{d.size}</td>
              <td><img src={'images/' + d.path} alt="" style={{ with: 10, height: 10 }} /></td>
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
