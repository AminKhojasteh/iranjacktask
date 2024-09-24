import IconDown from "../assets/icons/IconDown";

function NavItem({ name, hierachyLevel = 1 }) {
  const leftPadding = `${6 + (hierachyLevel - 1) * 24}px`;
  return (
    <div
      style={{ paddingLeft: leftPadding }}
      className="flex h-8 items-center gap-2"
    >
      <IconDown className="h-3 w-3 fill-gray05" />
      <span className="text-sm font-[400] text-gray03">{name}</span>
    </div>
  );
}

export default NavItem;
