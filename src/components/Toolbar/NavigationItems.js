import React from 'react';

import NavigationItem from './NavigationItem';

const navigationItems = props => {
  let userNavItems = (
    <>
      <NavigationItem type="Login" click={props.onSigninLink}>
        Login
      </NavigationItem>
      <NavigationItem type="Signup" click={props.onSignupLink}>
        New Account
      </NavigationItem>
    </>
  );
  if (props.loggedIn) {
    userNavItems = (
      <NavigationItem type="User" click={props.onProfileLink}>
        {props.name}
      </NavigationItem>
    );
  }

  return (
    <ul className="NavigationItems">
      <NavigationItem>Flowers</NavigationItem>
      <NavigationItem>Latest Sightings</NavigationItem>
      <NavigationItem>Favorites</NavigationItem>
      {userNavItems}

      <style jsx>{`
        .NavigationItems {
          margin: 0;
          padding: 0;
          display: flex;
          list-style: none;
          height: 100%;
        }
      `}</style>
    </ul>
  );
};

export default navigationItems;
