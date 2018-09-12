import React from "react"

export default class Form extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleChangePath = this.handleChangePath.bind(this)
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
			path: this.props.path,
			[evt.target.name]: evt.target.value
		})
	}

	handleChangePath(evt) {
		this.props.updateInfoForm({
			name: this.props.name,
			path: this.props.path,
			[evt.target.name]: evt.target.files[0].name
		})
		console.log(evt.target.files[0])
	}

	submit(evt) {
		evt.preventDefault();
		const { name, path } = this.props
		const extension = path.split(".")[1]

		fetch('http://127.0.0.1:8000/api/data', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-type': 'application/json',
			},
			body: JSON.stringify({ name, extension, path }),
		})
		this.props.insertData({ name, extension, path })
		this.props.updateInfoForm({ name: '', path: '' })
	}

	render() {
		console.log('props', this.props)
		return (
			<div>
				<h2>Form</h2>
				<form onSubmit={this.submit} encType="multipart/form-data">
					<div>
						<label>Name</label>
						<input type="text" name='name' onChange={this.handleChange} />
					</div>
					<div>
						<label>Path</label>
						<input type="file" name='path' onChange={this.handleChangePath} />
					</div>
					<input type="submit" value="send" />
				</form>

				<table border='2'>
					<tbody>
						<tr>
							<th>Name</th>
							<th>Extension</th>
							<th>Path</th>
						</tr>

						{this.props.data.data.map((d, i) =>
							<tr key={i}>
								<td>{d.name}</td>
								<td>{d.extension}</td>
								<td><img src={'images/' + d.path} alt="" style={{ with: 10, height: 10 }} /></td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		)
	}
}

