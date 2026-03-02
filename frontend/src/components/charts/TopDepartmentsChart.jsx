import React, {useEffect, useState} from "react";
import {Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { getTopDepartments } from "../../api/dashboardApi";

function TopDepartmnetsChart() {
    const [data, setData] = useState([]);

    useEffect(()=> {
        getTopDepartments(2024)
        .then (res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="department_id"/>
        <YAxis/>
        <Tooltip/>
        <Bar dataKey="total_budget" fill="#ff7300"/>
        </BarChart>
    )
}
export default TopDepartmnetsChart;