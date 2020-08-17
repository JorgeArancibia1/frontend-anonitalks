import React from "react";
import PropTypes from 'prop-types';

export const PostTarjet = ({user, title, content}) => {
  return (
    <div>
      <h3>{ user }</h3>
      <span>{ title }</span>
      <p>
        { content }
      </p>
    </div>
  );
};

PostTarjet.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

PostTarjet.defaultProps = {
  user: 'User',
  title: 'Title',
  content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere animi porro hic quaerat, doloribus possimus fugit sunt ex obcaecati dolores, quidem veritatis repellendus velit dolor! Ea tempora asperiores consectetur nulla!'
}