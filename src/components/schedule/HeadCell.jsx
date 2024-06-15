import PropTypes from "prop-types";
export default function HeadCell({ title, width }) {
  return (
    <th
      className={`border-collapse border-2 border-[#00393F] bg-[#00393F] font-semibold text-white ${width}`}
    >
      {title}
    </th>
  );
}

HeadCell.propTypes = {
  title: PropTypes.string,
  width: PropTypes.string,
};
