import PropTypes from "prop-types";
import { courseStyle, courseStyleOutline, courseNoPassedStyle, courseNoPassedStyleOutline } from "./style";

export default function Course(props) {
  const { name } = props;
  return (
    <button style={courseStyle}>{name}</button>
  )
}

export function CoursePassed(props) {
  const { name } = props;
  return (
    <button style={courseStyleOutline}>{name}</button>
  )
}

export function CourseNoPassed(props) {
  const { name } = props;
  return (
    <button style={courseNoPassedStyle}>{name}</button>
  )
}

export function CourseNoPassedOutline(props) {
  const { name } = props;
  return (
    <button style={courseNoPassedStyleOutline}>{name}</button>
  )
}

Course.propTypes = {
  name: PropTypes.string,
}

CoursePassed.propTypes = {
  name: PropTypes.string,
}

CourseNoPassed.propTypes = {
  name: PropTypes.string,
}

CourseNoPassedOutline.propTypes = {
  name: PropTypes.string,
}