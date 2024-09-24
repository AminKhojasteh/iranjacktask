import CardLink from "./CardLink";
import CardTabs from "./CardTabs";
import CardTitle from "./CardTitle";

function Card({
  width,
  headertype,
  isLink = true,
  cardTitle,
  description,
  cardTabs,
  children,
}) {
  /* if we set width equal to 100% it means we want our Card and Charts for mobile */
  const isItForMobile = width === "100%";
  return (
    <div
      style={{
        width: `${width}px`,
        boxShadow: `${isItForMobile ? "" : "rgba(0, 0, 0, 0.14) 0px 2px 4px 0px"}`,
      }}
      className={`flex ${isItForMobile ? "mb-4 h-min" : "h-[400px]"} flex-col gap-4 overflow-hidden rounded-[8px] border p-4`}
    >
      <CardTitle
        cardTitle={cardTitle}
        description={description}
        headertype={headertype}
        isItForMobile={isItForMobile}
      />
      {cardTabs && (
        <CardTabs cardTabs={cardTabs} isItForMobile={isItForMobile} />
      )}
      <div
        className={`${isItForMobile ? "flex flex-col items-center" : "grow"}`}
      >
        {children}
      </div>
      {isLink && <CardLink isItForMobile={isItForMobile} />}
    </div>
  );
}

export default Card;
