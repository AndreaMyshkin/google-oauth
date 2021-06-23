import "./App.css";
import { GoogleLogin, GoogleLogout } from "react-google-login";


function App() {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const logout = () => {
    console.log("logout action");
    localStorage.clear();
  };
  return (
    <div className="App">
      <header className="App-header">
        <p>Oauth Example</p>
        <GoogleLogin
          clientId={"<INSERT CLIENT ID>"}
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <div style={{ margin: "2rem" }}></div>
        <GoogleLogout
          clientId={"<INSERT CLIENT ID>"}
          buttonText="Logout"
          onLogoutSuccess={logout}
        ></GoogleLogout>
      </header>
    </div>
  );
}

export default App;
