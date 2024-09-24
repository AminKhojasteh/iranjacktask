function CheckboxGroup({ groupName, options }) {
  return (
    <form className="flex items-center">
      {options.map((option, index) => (
        <div
          key={groupName + index}
          className="flex h-8 items-center gap-[6px] pl-[14px] pr-3"
        >
          <input
            type="radio"
            name={groupName}
            id={index}
            value={option}
            className="scale-[1.3] text-gray03"
          />
          <label
            htmlFor={index}
            className="ml-0.5 text-sm font-semibold text-gray03"
          >
            {option}
          </label>
        </div>
      ))}
    </form>
  );
}

export default CheckboxGroup;
