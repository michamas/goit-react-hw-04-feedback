import PropTypes from 'prop-types';

Section.prototype = {
  title: PropTypes.string.isRequired,
  childern: PropTypes.node,
};

export default function Section(props) {
  const { title, childern } = props;

  return (
    <div>
      <h2>{title}</h2>
      {childern}
    </div>
  );
}
