// import CardFour from '../../components/CardFour.tsx';
// import CardOne from '../../components/CardOne.tsx';
// import CardThree from '../../components/CardThree.tsx';
// import CardTwo from '../../components/CardTwo.tsx';
// import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
// import TableOne from '../../components/TableOne.tsx';


import IntensityComparisonChart from "../../components/IntensityComparisonChart";
import LineChart from "../../components/LineChart";
import ScatterPlot from "../../components/ScatterPlot";
import OverviewSection from "../../components/OverviewSection";
import RelevanceDistribution from "../../components/RelevanceDistribution";
import SourceContributionPieChart from "../../components/SourceContributionPieChart";
import TopRegionsMap from "../../components/TopRegionsMap";
import TopTopicsPieChart from "../../components/TopTopicsPieChart";
import data from "../../testData/DummyData";
import MapChart from "../../components/MapChart";
const Analysis = () => {
  console.log(data);
  return (
    <>
      <div className="mb-10 my-3">
        <h1 className="mb-3 text-xl font-bold ">Data Overview</h1>
       <OverviewSection data={data}/>
      </div>

      <div className="flex flex-col space-y-10">
        <LineChart data={data} />
        <ScatterPlot data={data} />
        <MapChart data={data} />
        <TopTopicsPieChart data={data} />
        <RelevanceDistribution data={data} />
        {/* <IntensityComparisonChart data={data}/> */}
        <TopRegionsMap data={data}/>
        <SourceContributionPieChart data={data} />
        <IntensityComparisonChart data={data} />
        <div className="col-span-12 xl:col-span-8">{/* <TableOne /> */}</div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default Analysis;
