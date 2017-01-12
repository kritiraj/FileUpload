var React = require('react');
var ReactDOM = require('react-dom');
var Codemirror = require('react-codemirror');


require('codemirror/mode/yaml/yaml');
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';




class CodeMirror extends React.Component
{
constructor(props)
{
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.state={code:"//write code here",mode:"yaml"};

}

	handleChange()
	{
	  var that = this;
		var temp = document.getElementById('filedata').files[0];
		var reader = new FileReader();
		reader.onload = function(e) {
		console.log(reader.result);
		that.setState({
			code:reader.result });
			}


	 reader.readAsText(temp);
	 }
	render () {
		var options = {
			lineNumbers: true,
			mode: this.state.mode
		};
		return (
			<div>
			<div className="upload">
			<input type="file" name="upload" onChange={this.handleChange} id='filedata'/>
			</div>
			<Codemirror ref="editor" value={this.state.code}  options={options} style={{border:"1px solid grey"}} />
			</div>
		);
	}
}

export default CodeMirror;
