import { SectionWrapper, Title } from './Section.styled';
import PropTypes from 'prop-types';

/**
 * Section with title and children to separate various parts of the content.
 *
 * @param {string} [props.title] Section title.
 * @param {React.Component | React.Component[]} [props.children] Section children elements.
 *
 * @returns {React.Component} Section with title and children components.
 */
const Section = ({ title, children }) => (
  <SectionWrapper>
    {title && <Title>{title}</Title>}
    {children}
  </SectionWrapper>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

export default Section;
