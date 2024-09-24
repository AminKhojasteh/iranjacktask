import Card from "./Card";
import Chart01 from "../Charts/Chart01";
import Chart02 from "../Charts/Chart02";
import Chart03 from "../Charts/Chart03";
import Chart04 from "../Charts/Chart04";
import Chart05 from "../Charts/Chart05";
import Chart06 from "../Charts/Chart06";

function Dashboard() {
  return (
    <div className="flex flex-wrap content-start gap-x-2 gap-y-[15px] p-5">
      <Card
        width={282}
        headertype={1}
        isLink={true}
        cardTitle={"Card Title"}
        description={"Description"}
        cardTabs={["7 days", "30 days", "60 days"]}
      >
        <Chart01 />
      </Card>
      <Card
        width={282}
        headertype={1}
        isLink={true}
        cardTitle={"Card Title"}
        description={"Description"}
        cardTabs={[]}
      >
        <Chart02 />
      </Card>
      <Card
        width={488}
        headertype={1}
        isLink={true}
        cardTitle={"Chart 3"}
        description={"Description"}
        cardTabs={["7 days", "30 days", "60 days"]}
      >
        <Chart03 />
      </Card>
      <Card
        width={266}
        headertype={2}
        isLink={true}
        cardTitle={"Card 4"}
        description={"Description"}
      >
        <Chart04 />
      </Card>
      <Card
        width={282}
        headertype={1}
        isLink={true}
        cardTitle={"Chart 5"}
        description={"Description"}
        cardTabs={["7 days", "30 days", "60 days"]}
      >
        <Chart05 />
      </Card>
      <Card
        width={503}
        headertype={1}
        isLink={false}
        cardTitle={"Chart 6"}
        description={"Description"}
        cardTabs={["First tab", "Second tab", "Third tab"]}
      >
        <Chart06 />
      </Card>
    </div>
  );
}

export default Dashboard;
