import React, {useEffect, useState} from "react";
import {BarChart, Bar, XAxis, YAxis, Tooltip} from "recharts";
import { getYearComparison } from "../../api/dashboardApi";

function YearComparisonChart() {
    const [data, setData] = useState([]);

    useEffect(()=> {
        getYearComparison()
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    },[]);

    return (
        <BarChart width={600} height={300} data={data}>
            <XAxis dataKey="year"/>
            <YAxis/>
            <Tooltip/>
            <Bar dataKey="total_budget" fill="#82ca9d"/>
        </BarChart>
    )
}

export default YearComparisonChart;