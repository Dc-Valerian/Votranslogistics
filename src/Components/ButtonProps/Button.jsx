import PropTypes from 'prop-types';

const Button = ({ backgroundColor, width, text, color,link }) => {
  return (
    <a href={link}>
  
      <button className={`transition hover:scale-105 hover:shadow-lg focus:outline-none  h-12 text-${color}  flex justify-center items-center font-semibold rounded-3xl  hover:text-black cursor-pointer  duration-150 ease-in-out delay-150 mt-10`}
      style={{backgroundColor:backgroundColor,width:width,}}
      >
      {text}
      </button>
    </a>
  );
};

Button.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Button;
