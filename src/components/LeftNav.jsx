import NavItem from "./NavItem";

const navbarItems = [
  { id: 1, itemName: "Group title", hierachyLevel: 1 },
  { id: 11, itemName: "Option", hierachyLevel: 2 },
  { id: 12, itemName: "Option", hierachyLevel: 2 },
  { id: 121, itemName: "Item", hierachyLevel: 3 },
  { id: 122, itemName: "Item", hierachyLevel: 3 },
  { id: 123, itemName: "Item", hierachyLevel: 3 },
  { id: 124, itemName: "Item", hierachyLevel: 3 },
  { id: 125, itemName: "Item", hierachyLevel: 3 },
];

function LeftNav() {
  return (
    <div className="hidden flex-col gap-0.5 border-r border-gray10 px-1 pt-5 sm:flex">
      {navbarItems.map((item) => (
        <NavItem
          key={item.id}
          name={item.itemName}
          hierachyLevel={item.hierachyLevel}
        />
      ))}
    </div>
  );
}

export default LeftNav;
