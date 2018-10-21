import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';

const Chart = (props) => {

    // var  data={[        {x: 1, y: 4},
    //                     {x: 5, y: 2},
    //                     {x: 15, y: 6}
    //         ]};

    // const dataArr = data.map((d)=> {
    //     return {x: d.year + '/' + d.quarter, 
    //     y: parseFloat(d.count/1000)}
    // });
    console.log(props.results)
    return (
        <XYPlot
            xType="ordinal"
            width={1000}
            height={500}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis title="Period of time(year and quarter)" />
            <YAxis title="Number of pull requests (thousands)" />
                <LineSeries
                    data= {[{x: 1, y: 4},{x: 5, y: 2},{x: 15, y: 6}]}
                    style={{stroke: 'violet', strokeWidth: 3}}/>
        </XYPlot>
    );
}

export default Chart;