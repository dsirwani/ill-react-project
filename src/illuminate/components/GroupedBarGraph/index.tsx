import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import { useStyles } from './style';

interface GroupedBarGraphProps {
  width: number;
  height: number;
  models: any;
}

const GroupedBarGraph = (props: GroupedBarGraphProps) => {
  const classes = useStyles();
  const chartRef = useRef<HTMLInputElement>(null);

  const plotGraph = () => {
    let { models, width, height } = props
    var container: any = d3.select(chartRef.current),
      margin = {
        top: 20,
        right: 0,
        bottom: 20,
        left: 0
      },

      barPadding = .2,
      axisTicks = { qty: 5, outerSize: 0, dateFormat: '%m-%d' };

    var svg: any = container
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Adding Scales
    var xScale0: any = d3.scaleBand().range([0, width - margin.left - margin.right]).padding(barPadding);
    var xScale1: any = d3.scaleBand();
    var yScale: any = d3.scaleLinear().range([height - margin.top - margin.bottom, 0]);

    // Adding Axis
    var xAxis: any = d3.axisBottom(xScale0).tickSizeOuter(axisTicks.outerSize);
    // var yAxis: any = d3.axisLeft(yScale).ticks(axisTicks.qty).tickSizeOuter(axisTicks.outerSize);

    // Mapping the Axis with data
    xScale0.domain(models.map((d: any) => d.month));
    xScale1.domain(['plan', 'revenue']).range([0, xScale0.bandwidth()]);
    yScale.domain([0, d3.max(models, (d: any) => d.plan > d.revenue ? d.plan : d.revenue)]);

    var divTooltip = d3.select("body").append("div").attr("class", classes.toolTip);
    // Create and Transform Group Element
    var month = svg.selectAll(".month")
      .data(models)
      .enter().append("g")
      .attr("class", "month")
      .attr("transform", (d: any) => `translate(${xScale0(d.month)},0)`);

    // Appending the bars
    /* Add plan bars */
    month.selectAll(".bar.plan")
      .data((d: any) => [d])
      .enter()
      .append("rect")
      .attr("rx", '7px')
      .attr("class", "bar plan")
      // .style("fill", "#808080")
      .style("fill", "#90a4ae")
      .attr("x", (d: any) => xScale1('plan'))
      .attr("y", (d: any) => yScale(d.plan))
      .attr("width", '10px')
      // .attr("width", xScale1.bandwidth())
      .attr("height", (d: any) => {
        if (d.plan == 0) {
          return 0
        }
        return height - margin.top - margin.bottom - yScale(d.plan)
      });

    /* Add revenue bars */
    month.selectAll(".bar.revenue")
      .data((d: any) => [d])
      .enter()
      .append("rect")
      .attr("rx", '7px')
      .attr("class", "bar revenue")
      .style("fill", (d: any) => {
        if (d.revenue < d.plan) {
          return "#ED2B42" //red
        } else if (d.revenue == d.plan) {
          return "#F9BF1C" //yellow
        }
        return "#0ED069" //green
      })
      .attr("x", (d: any) => xScale1('revenue'))
      .attr("y", (d: any) => yScale(d.revenue))
      .attr("width", '10px')
      // .attr("width", xScale1.bandwidth())
      .attr("height", (d: any) => {
        if (d.revenue == 0) {
          return 0
        }
        return height - margin.top - margin.bottom - yScale(d.revenue)
      });

    // Tooltip
    month.on("mousemove", function (d: any) {
      divTooltip.style("left", d3.event.pageX + 10 + "px");
      divTooltip.style("top", d3.event.pageY - 25 + "px");
      divTooltip.style("display", "inline-block");
      divTooltip.html('Revenue: ' + '$' + d3.format(",")(d.revenue) + "<br>" + 'Plan: ' + '$' + d3.format(",")(d.plan));
    });
    month.on("mouseout", function (d: any) {
      divTooltip.style("display", "none");
    });

    // Add the X Axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", `translate(0,${height - margin.top - margin.bottom})`)
      .call(xAxis);

    // Add the Y Axis
    // svg.append("g")
    //   .attr("class", "y axis")
    //   .call(yAxis);
  }

  useEffect(() => {
    plotGraph();
  }, [])

  return (
    <div ref={chartRef} className={`${classes.chartContainer} ${classes.scrollBar}`}>
    </div>
  );
};

export default GroupedBarGraph;