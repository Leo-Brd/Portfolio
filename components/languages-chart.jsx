"use client";
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
} from "@/components/ui/chart";

// Données des langues
const chartData = [
  { language: "francais", value: 4, fill: "rgb(var(--chart-1))", description: "Langue maternelle" },
  { language: "anglais", value: 3, fill: "rgb(var(--chart-2))", description: "Courant" },
  { language: "espagnol", value: 2, fill: "rgb(var(--chart-3))", description: "Intermédiaire" },
  { language: "japonais", value: 1, fill: "rgb(var(--chart-4))", description: "Débutant" },
];

// Configuration des couleurs et des étiquettes
const chartConfig = {
  francais: {
    label: "🇫🇷",
    color: "hsl(var(--chart-1))",
  },
  anglais: {
    label: "🇬🇧",
    color: "hsl(var(--chart-2))",
  },
  espagnol: {
    label: "🇪🇸",
    color: "hsl(var(--chart-3))",
  },
  japonais: {
    label: "🇯🇵",
    color: "hsl(var(--chart-4))",
  },
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-sm">
        <p className="text-sm text-foreground">{data.description}</p>
      </div>
    );
  }
  return null;
};

export function Languages() {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="text-3xl">Je peux parler en...</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 20,
              right: 20,
            }}
          >
            <YAxis
              dataKey="language"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={(props) => {
                const { x, y, payload } = props;
                const emoji = chartConfig[payload.value]?.label || payload.value;
                return (
                  <g transform={`translate(${x},${y})`}>
                    <text
                      x={0}
                      y={0}
                      dy={10}
                      textAnchor="end"
                      fontSize={28}
                      fill="currentColor"
                    >
                      {emoji}
                    </text>
                  </g>
                );
              }}
            />
            <XAxis dataKey="value" type="number" hide />
            <Tooltip
              cursor={false}
              content={<CustomTooltip />}
            />
            <Bar
              dataKey="value"
              layout="vertical"
              radius={5}
              isAnimationActive={true}
              fill={({ payload }) => chartConfig[payload.language]?.color}
            />

          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Mis à jour récemment...
      </CardFooter>
    </Card>
  );
}