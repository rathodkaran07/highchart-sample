import { Component } from "@angular/core";

import * as Highcharts from "highcharts";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    lang: {
      loading: "Loading...",
      numericSymbols: ["k", "M", "G", "T", "P", "E"]
    },
    credits: {
      enabled: false
    },
    colors: [
      "#058DC7",
      "#50B432",
      "#ED561B",
      "#DDDF00",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4"
    ],
    chart: {
      backgroundColor: "#131722",
      borderColor: "transparent",
      borderWidth: 1,
      borderRadius: 0,
      plotBackgroundColor: "#202943",
      plotShadow: true,
      plotBorderWidth: 0,
      type: "area"
    },
    title: { text: "" },
    subtitle: { text: "" },
    xAxis: {
      gridLineWidth: 0,
      lineColor: "#000",
      tickColor: "#000",
      title: { text: "" },
      labels: {
        style: { color: "#fff", font: "11px Consolas, monospace" },
        formatter: function () {
          return this.value;
        }
      }
    },
    yAxis: {
      gridLineWidth: 0,
      minorTickInterval: "auto",
      lineColor: "#fff",
      lineWidth: 0,
      tickWidth: 0,
      tickColor: "#fff",
      labels: { style: { color: "#888", font: "11px Consolas, monospace" } },
      title: { text: "" },
      startOnTick: false,
      endOnTick: false,
      opposite: false
    },
    legend: {
      backgroundColor: "#fff",
      borderWidth: 0,
      itemStyle: {
        font: "11px Trebuchet MS, Verdana, sans-serif",
        color: "#565656"
      },
      symbolHeight: 12,
      symbolWidth: 14,
      itemHoverStyle: { color: "#fefefe" },
      itemHiddenStyle: { color: "#fefefe" },
      align: "center",
      verticalAlign: "top",
      y: 2,
      x: -10,
      floating: false
    },

    plotOptions: {
      area: {
        marker: {
          enabled: false,
          symbol: "circle",
          radius: 2,
          states: { hover: { enabled: !0 } }
        }
      }
    },

    navigation: { buttonOptions: { theme: { stroke: "#CCCCCC" } } },
    tooltip: {
      useHTML: true,
      backgroundColor: "rgba(240,240,240,.6)",
      borderColor: "#fff",
      borderWidth: 1,
      borderRadius: 0,
      style: { color: "#000" }
    },
    series: [
      {
        name: "Buy Orders",
        data: [
          [0.1524, 0.948665],
          [0.1539, 35.510715],
          [0.154, 39.883437],
          [0.1541, 40.499661],
          [0.1545, 43.262994000000006],
          [0.1547, 60.14799400000001],
          [0.1553, 60.30799400000001],
          [0.1558, 60.55018100000001],
          [0.1564, 68.381696]
        ],
        color: "rgb(155, 206, 133)"
      },
      {
        name: "Sell Orders",
        data: [
          [0.1435, 242.521842],
          [0.1436, 206.49862099999999],
          [0.1437, 205.823735],
          [0.1438, 197.33275],
          [0.1439, 153.677454],
          [0.144, 146.007722],
          [0.1442, 82.55212900000001],
          [0.1443, 59.152814000000006]
        ],
        color: "rgb(252, 137, 141)"
      }
    ]
  };
}
