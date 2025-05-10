"use client";

import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";
import data from "@/mockData/chartData.json";

export default function CustomLineChart() {
  return (
    <div className="w-full h-20 rounded-md ">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 10, bottom: 0, left: 10 }}
        >
          <XAxis
            dataKey="name"
            stroke="#A0A0B0"
            interval="preserveStartEnd"
            axisLine={false}
            tickLine={false}
            tickFormatter={(_, index) => {
              return index % 2 === 0 ? _ : "";
            }}
            tickMargin={2}
          />
          <Tooltip contentStyle={{ display: "none" }} />
          <Line
            type="linear"
            dataKey="value"
            stroke="#3B82F6"
            strokeWidth={4}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
