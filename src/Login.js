import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedBotton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { renderComponent } from 'recompose';
import Axios from 'axios';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }

  render(){
    return (
      <div>
        <MuiThemeProvider>
        <div>
        <AppBar
          title="Login"
          />
          <TextField
            hintText="Enter your Username"
            floatingLabelText="Username"
            onChange = {(event,newValue) => this.setState({username:newValue})}
          />
          <br/>
          <TextField
            type="password"
            hintText="Enter your Password"
            floatingLabelText="Password"
            onChange = {(event,newValue) => this.setState({password:newValue})}
            />
          <br/>
          <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
        </div>
        </MuiThemeProvider>
      </div>
    );
  };
  handleClick(event){
    var apiBaseUrl = 'http://localhost:4000/api';
    var self = this;
    var payload={
      'email':this.state.username,
      'password':this.state.password
    }
    Axios.post(apiBaseUrl+'login', payload)
    .then(function(response){
      console.log(response);
      if(response.data.code == 200){
        console.log('Login successfull');
        var uploadScreen=[];
        uploadSceen.push(<UploadScreen appContext={self.props.appContext}/>)
        self.props.appContext.setState({loginPage:[],uploadSceen:uploadSceen})
      }
      else if (response.data.code == 204){
        console.log('username password is wrong');
        alert('username password is wrong')
      }
      else{
        console.log('user does not exist');
        alert('user does not exist')
      }
    }).catch(function(error){
      console.log(error);
    });
  }
}
const style = {
    margin: 15,
};

export default Login;