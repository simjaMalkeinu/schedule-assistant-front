import PropTypes from "prop-types";
export default function SignatureCell({ content, width }) {
  return (
    <th
      className={`border-collapse border-2 border-[#00393F] text-[#00393F] font-normal ${width}`}
    >
      {content}
    </th>
  );
}

SignatureCell.propTypes = {
  content: PropTypes.string,
  width: PropTypes.string,
};
