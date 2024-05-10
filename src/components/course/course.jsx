import PropTypes from "prop-types";
import { courseStyle, courseStyleOutline, courseNoPassedStyle, courseNoPassedStyleOutline } from "./style";

export default function Course(props) {
  const { name } = props;
  return (
    <div style={courseStyle}>{name}</div>
  )
}

export function CoursePassed(props) {
  const { name } = props;
  return (
    <div style={courseStyleOutline}>{name}</div>
  )
}

export function CourseNoPassed(props) {
  const { name } = props;
  return (
    <div style={courseNoPassedStyle}>{name}</div>
  )
}

export function CourseNoPassedOutline(props) {
  const { name } = props;
  return (
    <div style={courseNoPassedStyleOutline}>{name}</div>
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