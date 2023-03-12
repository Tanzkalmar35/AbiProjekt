import React from "react";

import Donute_chart from "../diagramm_components/donute/donute_chart";
import Bar_chart from "../diagramm_components/bar/bar_chart";
import Line_chart from "../diagramm_components/line/line_chart";

import { useState } from "react";

const Dashboard = () => {
  //Changes the visibility of the chart
  const [doughnut_chrat_view, setDoughnut_chrat_view] = useState(true);
  const [bar_chrat_view, setbar_chrat_view] = useState(false);

  const [line_chrat_view, setline_chrat_view] = useState(false);

  return (
    <div className="flex grid-cols-3 text-center justify-center ">
      {/*If trigger equals true the chart is viewed */}
    
      <div className=" col-span-1  ">
      <Donute_chart trigger={doughnut_chrat_view}></Donute_chart>
      </div>
    </div>
  );
};

export default Dashboard;
