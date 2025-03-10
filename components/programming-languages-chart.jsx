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
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiC } from "react-icons/si";
import Link from "next/link";

// Données des langages de programmation
const programmingData = [
  { language: "html/css", value: 4, fill: "rgb(var(--chart-1))", description: "HTML/CSS" },
  { language: "javascript", value: 4, fill: "rgb(var(--chart-2))", description: "JavaScript" },
  { language: "python", value: 3, fill: "rgb(var(--chart-3))", description: "Python" },
  { language: "c", value: 2, fill: "rgb(var(--chart-4))", description: "C" },
];

// Configuration des couleurs et des icônes
const programmingConfig = {
  "html/css": {
    icon: (
      <div className="flex">
        <SiHtml5 className="w-5 h-5 sm:w-6 sm:h-6 text-[#E44D26]" />
        <SiCss3 className="w-5 h-5 sm:w-6 sm:h-6 text-[#264DE4]" />
      </div>
    ),
    color: "hsl(var(--chart-1))",
  },
  javascript: {
    icon: <SiJavascript className="w-6 h-6 sm:w-8 sm:h-8 text-[#F7DF1E]" />,
    color: "hsl(var(--chart-2))",
  },
  python: {
    icon: <SiPython className="w-6 h-6 sm:w-7 sm:h-7 text-[#3776AB]" />,
    color: "hsl(var(--chart-3))",
  },
  c: {
    icon: <SiC className="w-6 h-6 sm:w-7 sm:h-7 text-[#235186]" />,
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

export function ProgrammingLanguages() {
  return (
    <Card className="w-full sm:w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl">Mais aussi en...</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={programmingConfig}>
          <BarChart
            accessibilityLayer
            data={programmingData}
            layout="vertical"
            margin={{
              left: 20,
              right: 20,
            }}
            width={300}
            height={200}
          >
            <YAxis
              dataKey="language"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tick={(props) => {
                const { x, y, payload } = props;
                const icon = programmingConfig[payload.value]?.icon || null;
                return (
                  <g transform={`translate(${x},${y})`}>
                    <foreignObject x={-40} y={-15} width={45} height={30}>
                      <div className="flex items-center justify-center">
                        {icon}
                      </div>
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
              fill={({ payload }) => programmingConfig[payload.language]?.color}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <Link href="/skills">
          <p className="hover:text-blue-600 dark:text-secondary">{"⏩ "} Pour en savoir plus...</p>
        </Link>
      </CardFooter>
    </Card>
  );
}