import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.candy';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function Doughnut2D({ chartData }) {
  const data = {
    "chart": {
      "caption": "Stars Per Language",
      "theme": "candy",
      "decimals": 0,
      "showPercentageValues": 0,
      "doughnutRadius": '45%'
    },
    "data": chartData
  };

  const chartConfigs = {
    type: 'doughnut2d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: data,
  };

  return <ReactFC {...chartConfigs} />;
}
