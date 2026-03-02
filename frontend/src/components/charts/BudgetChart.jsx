import React, {useEffect, useState} from "react";
import {LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid} from "recharts";
import { getMonthlyBudget } from "../../api/dashboardApi";

function BudgetChart() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getMonthlyBudget(2024)
        .then(res => setData(res.data))
        .catch(err => console.log(err));
    }, []);

    return (
        <LineChart width = {600} height={300} data = {data}>
            <CartesianGrid stroke="#ccc"/>
            <XAxis dataKey="month"/>
            <YAxis/>
            <Tooltip/>
            <Line type="monotone" dataKey = "total_budget" stroke="#8884d8"/>
        </LineChart>
    )
}

export default BudgetChart