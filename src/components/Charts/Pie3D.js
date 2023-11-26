import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function Pie3D({ chartData }) {
  const data = {
    "chart": {
      "caption": "Languages",
      "theme": "fusion",
      "decimals": 0
    },
    "data": chartData
  };

  const chartConfigs = {
    type: 'pie3d',
    width: '100%',
    height: '400',
    dataFormat: 'json',
    dataSource: data,
  };

  return <ReactFC {...chartConfigs} />;
}
