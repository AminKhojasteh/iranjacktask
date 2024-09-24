import IconDots from "../assets/icons/IconDots";
import IconGear from "../assets/icons/IconGear";
import IconExpand from "../assets/icons/IconExpand";
import IconMagnifier from "../assets/icons/IconMagnifier";

function CardTitle({
  cardTitle,
  description,
  headertype = 1,
  isItForMobile = false,
}) {
  if (isItForMobile)
    return (
      <div className="flex h-7 justify-between">
        <div className="flex h-full items-center justify-center">
          <h4
            style={{ letterSpacing: "-0.23px" }}
            className="text-[15px] font-semibold text-gray01"
          >
            {cardTitle}
          </h4>
        </div>
        <div className="flex h-full items-center justify-center">
          <IconDots className="h-5 w-5 fill-gray05" />
        </div>
      </div>
    );

  return (
    <div className="flex h-9 w-full items-center">
      <div className="grow">
        <h4 className="text-sm font-bold text-gray01">{cardTitle}</h4>
        <p className="text-[12px] font-[400] text-gray05">{description}</p>
      </div>
      {headertype === 2 && (
        <div className="p-[6px]">
          <IconMagnifier className="h-5 w-5 fill-gray03" />
        </div>
      )}
      {headertype === 2 && (
        <div className="p-[6px]">
          <IconExpand className="h-5 w-5 fill-gray03" />
        </div>
      )}
      {headertype === 2 && (
        <div className="p-[6px]">
          <IconGear className="h-5 w-5 fill-gray03" />
        </div>
      )}
      <div className="p-[6px]">
        <IconDots className="h-5 w-5 fill-gray03" />
      </div>
    </div>
  );
}

export default CardTitle;
