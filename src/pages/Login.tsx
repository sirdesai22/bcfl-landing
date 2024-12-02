import { useState } from "react";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";

function LoginPage() {
const { authenticate } = useOkto()!;
const [authToken, setAuthToken] = useState(null);

const handleGoogleLogin = async (credentialResponse:any) => {
 const idToken = credentialResponse.credential;
  authenticate(idToken, (authResponse:any, error:any) => {
      if (authResponse) {
        setAuthToken(authResponse.auth_token);
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
      } else if (error) {
            console.error("Authentication error:", error);
        }
    });
 };

 return (
    <div>
        <h1>Login</h1>
        {!authToken ? (
        <GoogleLogin
            onSuccess={handleGoogleLogin}
            // onError={(error:any) => console.error("Login Failed", error)}
        />
        ) : (
            <p>Authenticated</p>
        )}
    </div>
    );
}

export default LoginPage;