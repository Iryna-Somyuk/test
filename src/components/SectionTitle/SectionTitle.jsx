import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <div className=" flex flex-col items-center px-5 py-4">
      <h1 className="text-black mb-5 font-bold uppercase text-xl">{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
