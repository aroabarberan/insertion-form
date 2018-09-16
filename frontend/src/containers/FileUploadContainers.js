import { connect } from 'react-redux'
import FileUpload from "../components/FileUploadComponent"
import {
	insertFileUpload,
	updateInfoForm,
	clearForm
} from "../actions/FileUploadActions";

const mapStateToProps = state => ({
	fileUpload: state.fileUpload,
	name: state.fileUpload.form.create.name,
	path: state.fileUpload.form.create.path,
	form: state.fileUpload.form
})

const mapDispatchToProps = dispatch => ({
	insertFileUpload: fileUpload => {
		dispatch(insertFileUpload(fileUpload))
	},
	updateInfoForm: fileUploadInfo => {
		dispatch(updateInfoForm(fileUploadInfo))
	},
	clearForm: () => {
		dispatch(clearForm())
	},
})

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload)
