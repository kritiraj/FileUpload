import ReactDOM from 'react-dom';
import AppBar from 'material-ui/AppBar';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import React from 'react';
import Editor from './editor.jsx';
import FileUpload from './fileUpload.jsx';
class App extends React.Component {
       constructor(props) {
    super(props);
    this.state = {value: 2,prime:''};
this.handleChange=this.handleChange.bind(this);
this.handleClick=this.handleClick.bind(this);
this.onFileLoad=this.onFileLoad.bind(this);
  }
handleChange(e,index,value){
this.setState({value});
this.setState({prime:this.value});

}
handleClick(e,value){
console.log('for Saving');
}
onFileLoad(e){console.log(e.target.result);
}


	 render()
	{
		return (
        <div>
        	<AppBar title="CI" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <FileUpload/>
          <Editor/>
          <RaisedButton label="Save" secondary={true}  onClick={this.handleClick} style={{marginLeft:"1%"}}/>
         </div>
      );
   }
}

export default App;
