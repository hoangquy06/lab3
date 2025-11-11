import React from 'react';
import PropTypes from 'prop-types';

function UserProfile({ userData, theme = 'light' }) {
  // Expect userData to be provided via props (prop destructuring above)
  const { name, email, avatarUrl, imageSize } = userData || {};

  return (
    <div className={`profile-card theme-${theme}`}>
      <h3>User Profile</h3>
      <img
        src={avatarUrl}
        alt={name}
        width={imageSize}
        height={imageSize}
        className="profile-avatar"
        style={{ borderRadius: '50%' }}
      />
      <p>Name: {name}</p>
      <p>Email: {email}</p>
    </div>
  );
}

UserProfile.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    imageSize: PropTypes.number,
  }).isRequired,
  theme: PropTypes.string,
};

export default UserProfile;
