import { connect } from 'react-redux'
import Form from "../components/Form"
import {
	insertData,
	updateInfoForm,
	clearForm
} from "../actions/DataActions";

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
