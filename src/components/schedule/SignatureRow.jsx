import PropTypes from "prop-types";
import SignatureCell from "../../components/schedule/SignatureCell";
import PriorityCell from "../../components/schedule/PriorityCell";

export default function SignatureRow(props) {
  const {
    priority,
    sequence,
    subject,
    teacher,
    monday,
    tuesday,
    wednesday,
    thursday,
    friday,
  } = props;
  return (
    <tr className="h-[58px] border-collapse border-2 border-[#00393F] text-sm text-center">
      <PriorityCell priority={priority} />
      <SignatureCell content={sequence} />
      <SignatureCell content={subject} />
      <SignatureCell content={teacher} />
      <SignatureCell content={monday} />
      <SignatureCell content={tuesday} />
      <SignatureCell content={wednesday} />
      <SignatureCell content={thursday} />
      <SignatureCell content={friday} />
    </tr>
  );
}

SignatureRow.propTypes = {
  priority: PropTypes.string,
  sequence: PropTypes.string,
  subject: PropTypes.string,
  teacher: PropTypes.string,
  monday: PropTypes.string,
  tuesday: PropTypes.string,
  wednesday: PropTypes.string,
  thursday: PropTypes.string,
  friday: PropTypes.string,
};
