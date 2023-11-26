import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);

export default function Doughnut2D({ chartData }) {
        const data = {
                "chart": {
                        "caption": "Most Forked",
                        "yAxisName": "Repos",
                        "xAxisName": "Stars",
                        "xAxisNameFontSize": "16px",
                        "yAxisNameFontSize": "16px"
                },
                "data": chartData
        };

        const chartConfigs = {
                type: 'bar3d',
                width: '100%',
                height: '400',
                dataFormat: 'json',
                dataSource: data,
        };

        return <ReactFC {...chartConfigs} />;
}
