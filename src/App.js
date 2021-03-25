
import './App.css';
import {useGoogleOneTapLogin} from "react-google-one-tap-login";
import { useState } from 'react';
function App() {
const  [name, setName] = useState('');
const [email,setEmail] = useState('');


  useGoogleOneTapLogin({
  onSuccess:(response) => {
    setName(response.given_name);
    setEmail(response.email);
  },
  onError: (error) => console.log(error),
  googleAccountConfigs: {
    client_id: "686603645273-2c1pr1iu2qkv2hbb1qapcbgr5g9iu1qp.apps.googleusercontent.com"
  },
  });
  
  return <div className="app">
    {name}<br />
    {email}
  </div>
}

export default App;
