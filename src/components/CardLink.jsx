function CardLink({ isItForMobile }) {
  return (
    <div
      className={`flex h-5 w-full items-center ${isItForMobile ? "flex-row-reverse" : ""}`}
    >
      <a
        className={`cursor-pointer text-blue05 ${isItForMobile ? "text-[15px] font-semibold" : "text-sm font-[400px]"}`}
      >
        View Details
      </a>
    </div>
  );
}

export default CardLink;
