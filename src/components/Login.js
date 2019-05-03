import React from 'react' 
import { withKeycloak } from 'react-keycloak';

const LoginPage = ({ keycloak }) => {
    // Here you can access all of keycloak methods and variables.
    // See https://www.keycloak.org/docs/latest/securing_apps/index.html#javascript-adapter-reference
    return (
      <div>
        <button type="button" onClick={() => keycloak.login()}>
          Login
        </button>
      </div>
    );
  };
  
  export default withKeycloak(LoginPage);