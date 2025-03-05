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
import { GB, FR, ES, JP } from "country-flag-icons/react/3x2";

// Données des langues
const chartData = [
  { language: "fr", value: 4, fill: "rgb(var(--chart-1))", description: "Français" },
  { language: "gb", value: 3, fill: "rgb(var(--chart-2))", description: "English" },
  { language: "es", value: 2, fill: "rgb(var(--chart-3))", description: "Español" },
  { language: "jp", value: 1, fill: "rgb(var(--chart-4))", description: "日本語" },
];

// Configuration des couleurs et des étiquettes
const chartConfig = {
  fr: {
    icon: <FR className="w-8 h-8" />,
    color: "hsl(var(--chart-1))",
  },
  gb: {
    icon: <GB className="w-8 h-8" />,
    color: "hsl(var(--chart-2))",
  },
  es: {
    icon: <ES className="w-8 h-8" />,
    color: "hsl(var(--chart-3))",
  },
  jp: {
    icon: <JP className="w-8 h-8" />,
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
                const { icon } = chartConfig[payload.value];
                return (
                  <g transform={`translate(${x},${y})`}>
                    <foreignObject x={-25} y={-16} width={60} height={60}>
                      {icon}
                    </foreignObject>
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
        J'apprends le japonais quotidiennement !
      </CardFooter>
    </Card>
  );
}