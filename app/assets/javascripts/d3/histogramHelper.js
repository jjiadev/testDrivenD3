function binData(data, xScale , numberOfBins) {


    return  d3.layout.histogram().bins(xScale.ticks(numberOfBins))(data);;
}
function scaleBinnedData(binnedData, xScale, yScale){
    var scaledData = [];
    binnedData.forEach(function (data) {
        scaledData.push({x: xScale(data.x), y: yScale(data.y), width: xScale(data.dx)});
    });
    return scaledData
}
function renderHistogramData(canvas, data, xAxisOffset, yAxisOffset, graphingAreaHeight) {
    var dataGroup = canvas.append('g').attr('transform', 'translate(' + xAxisOffset + ', ' + yAxisOffset + ')').attr('class', 'dataGroup');
    var bar = dataGroup.selectAll(".bar")
        .data(data)
        .enter().append("g")
        .attr("class", "bar")
        .attr("transform", function (d) {
            return "translate(" + d.x + ", " + d.y + ")";
        });
    bar.append("rect")
        .attr("x", 1)
        .attr("width", function (d) {
            return d.width - 1;
        })
        .attr("height", function (d) {
            return  graphingAreaHeight - d.y;
        });

}