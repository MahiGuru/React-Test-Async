import React from 'react';
import { useKeycloak } from 'react-keycloak';


function UserProfile(props) {
    
  // Using array destructuring
  const [keycloak] = useKeycloak();
  // or Object destructuring
//   const { keycloak, initialized } = useKeycloak();

  return (
    <div>
      <div>{`User is ${!keycloak.authenticated ? 'NOT ' : ''}authenticated`}</div>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}
    </div>
  )
}

UserProfile.propTypes = {

}

export default UserProfile

