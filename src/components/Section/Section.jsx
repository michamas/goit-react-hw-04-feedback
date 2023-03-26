import PropTypes from 'prop-types';

Section.prototype = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default function Section(props) {
  const { title, children } = props;

  return (
    <div className="section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
