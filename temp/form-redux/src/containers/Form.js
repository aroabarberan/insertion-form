import React from "react";
import { connect } from "react-redux";
import { addFriend, updateForm } from "../actions/FriendActions";

class Form extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(evt) {
    // this.setState({ [evt.target.name]: evt.target.value })
    this.props.updateForm({ [evt.target.name]: evt.target.value })
  }

  submit(evt) {
    evt.preventDefault();
    const { form } = this.props.friends
    this.props.addFriend({
      name: form[0].name,
      last_name: form[1].last_name,
      phone: form[2].phone,
    })

  }

  render() {
    return (
      <div>
        <h2>Form => add Friend</h2>
        <form onSubmit={this.submit}>
          <div>
            <label>Name</label>
            <input type="text" name='name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Last name</label>
            <input type="text" name='last_name' onChange={this.handleChange} />
          </div>
          <div>
            <label>Phone</label>
            <input type="text" name='phone' onChange={this.handleChange} />
          </div>
          <button>Send</button>
        </form>

        <div>
          {this.props.friends.friends.map((f, i) =>
            <div key={i}>
              <p>Name: {f.name}</p>
              <p>Last name: {f.last_name}</p>
              <p>Phone: {f.phone}</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  friends: state.friends,
  form: state.friends.form
})

const mapDispatchToProps = dispatch => ({
  addFriend: friend => {
    dispatch(addFriend(friend))
  },
  updateForm: friendInfo => {
    dispatch(updateForm(friendInfo))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
