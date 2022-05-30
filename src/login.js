import * as React from 'react';
import { Pressable, ToastAndroid, Alert, Button } from 'react';
import Recipe from './images/Recipe1.png'
import "./style.css";

const Login =({ navigation }) =>{
  const password_field = React.useRef(null);

  const[username, setUsername] = React.useState('');
  const[password, setPassword] = React.useState('');
  const[error_1, set_error_1] = React.useState('');
  const[error_2, set_error_2] = React.useState('');
  const[visibility, set_visibility] = React.useState(false);

  const verify = () => {
    if (!username || !password) {
        !username ? set_error_1('Please enter a valid username') : null;
        !password ? set_error_2('Please enter a valid password') : null;
    } else { login(); }
  };

const login =async () => {
  try {
    const res = await fetch('https://fake-authentication1.p.rapidapi.com/api/v1/authentication/login',  {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'fake-authentication1.p.rapidapi.com',
		    'X-RapidAPI-Key': 'af86e07f2dmshac190d0d7e4a59ep11b82ejsn7d180729c51e'
      },
      body: JSON.stringify({
        userName: username, password: password,
      }),
    })
    const response = await res.json();
    console.log(JSON.stringify(response));
    if (response.user) {
       localStorage.getItem(
        '@credentials',
        JSON.stringify(response),
      );
      navigation.reset({
        index: 0,
        routes: [{ name: 'Navigation'}],
    });
    } else {
      ToastAndroid.show('The username or password you entered is incorrect', ToastAndroid.SHORT);
    }
  } catch { (e) => {
    Alert.alert('Oops',e.message ? e.message : 'An unexpected error has occured.Please confirm whether');
  }}
};

  return (
    <div class="container">
      <div class="forms-container">
        <div class="login">
      <h2 class="title">Login</h2>
      <div class="input-field">
      <i class="fas fa-user"></i>
        <input
          type="text"
          placeholder="username"
          onFocus={() => set_error_1('')}
          keyboardType={'email-address'}
          returnKeyType={'next'}
          onSubmitEditing={() => password_field.current.focus()}
          value={username}
          onChangeText={text => setUsername(text)}
          error={error_1}
        />
        </div>
        <div class="input-field">
        <i class="fas fa-lock"></i>
        <input
          type="password"
          placeholder="password"
          onFocus={() => set_error_2('')}
          returnKeyType={'next'}
          ref={password_field}
          value={password}
          onChangeText={text => setPassword(text)}
          error={error_2}
          onSubmitEditing={verify}
          secureTextEntry={visibility}
          renderRightAccessory={() => {
            return (
              <Pressable onPress={() => set_visibility(!visibility)} style={{ justifyContent: 'center', alignItems: 'center'}}>
              </Pressable>
            );
          }}
        />
        </div>
        <Button type="submit" class="btn solid " title="Login"
        onPress={() => verify()} />
    </div>
    </div>
    <div class="panels-container">
          <img src={require('./images/Recipe1.png').default} class="image" alt="" />
          <img src={Recipe} class="image" alt="" />
        </div>
    </div>
  );
};

export default Login;

