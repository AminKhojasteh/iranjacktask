import Card from "../components/Card";
import Chart01 from "../Charts/Chart01";
import Chart02 from "../Charts/Chart02";
import Chart03 from "../Charts/Chart03";
import Chart04 from "../Charts/Chart04";
import Chart05 from "../Charts/Chart05";
import Chart06 from "../Charts/Chart06";

function MainFrameMobile() {
  return (
    <div className="overflow-scroll p-4 sm:hidden">
      <Card
        width={"100%"}
        headertype={1}
        isLink={true}
        cardTitle={"Chart 1"}
        description={"Description"}
        cardTabs={["7 days", "30 days", "60 days"]}
      >
        <Chart01 isItForMobile={true} />
      </Card>
      <Card
        width={"100%"}
        headertype={1}
        isLink={true}
        cardTitle={"Chart 2"}
        description={"Description"}
        cardTabs={[]}
      >
        <Chart02 isItForMobile={true} />
      </Card>
      <Card
        width={"100%"}
        headertype={1}
        isLink={true}
        cardTitle={"Chart 3"}
        description={"Description"}
        cardTabs={["7 days", "30 days", "60 days"]}
      >
        <Chart03 isItForMobile={true} />
      </Card>
      <Card
        width={"100%"}
        headertype={2}
        isLink={true}
        cardTitle={"Card 4"}
        description={"Description"}
      >
        <Chart04 isItForMobile={true} />
      </Card>
      <Card
        width={"100%"}
        headertype={1}
        isLink={true}
        cardTitle={"Chart 5"}
        description={"Description"}
        cardTabs={["7 days", "30 days", "60 days"]}
      >
        <Chart05 isItForMobile={true} />
      </Card>
      <Card
        width={"100%"}
        headertype={1}
        isLink={false}
        cardTitle={"Chart 6"}
        description={"Description"}
        cardTabs={["First tab", "Second tab", "Third tab"]}
      >
        <Chart06 isItForMobile={true} />
      </Card>
    </div>
  );
}

export default MainFrameMobile;
