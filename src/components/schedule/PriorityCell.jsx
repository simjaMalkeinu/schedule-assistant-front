import PropTypes from "prop-types";
export default function PriorityCell({ priority }) {
  return (
    <td className="border-collapse border-2 border-[#00393F] text-[#00393F] ">
      <div className="w-full h-full flex justify-center">
        {priority.toLowerCase() === "alta" && (
          <div className=" rounded-full bg-red-700 w-[31px] h-[31px]"></div>
        )}
        {priority.toLowerCase() === "baja" && (
          <div className=" rounded-full bg-sky-500 w-[31px] h-[31px]"></div>
        )}
      </div>
    </td>
  );
}

PriorityCell.propTypes = {
  priority: PropTypes.string,
};
