import React from 'react';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import {Editor, EditorState} from 'draft-js';
class FileUpload extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={editorState: EditorState.createEmpty()};
      this.onChange = (editorState) => this.setState({editorState});
      this.handleChange = this.handleChange.bind(this);
  }
  handleChange()
  {
    var temp = document.getElementById('filedata').files[0];
    var reader = new FileReader();
    reader.onload = function(e) {
    this.setState({
       editorState: reader.result
     });
   }

   reader.readAsText(temp);

    }

    render()
    {
          return(
                  <div className="custom-file-upload">
                  <input type="file" name="upload" onChange={this.handleChange} id='filedata'/>
                  </div>
                  );
    }
}
export default FileUpload;
