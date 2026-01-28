"use client";
import React from "react";
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartContainer,
} from "@/components/ui/chart";
import { SiHtml5, SiCss3, SiJavascript, SiPython, SiC } from "react-icons/si";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

// Données des langages de programmation
const programmingData = [
  { language: "html/css", value: 4, fill: "rgb(var(--chart-1))", description: "HTML/CSS" },
  { language: "javascript", value: 4, fill: "rgb(var(--chart-2))", description: "JavaScript" },
  { language: "python", value: 3, fill: "rgb(var(--chart-3))", description: "Python" },
  { language: "c", value: 2, fill: "rgb(var(--chart-4))", description: "C" },
];

// Configuration des couleurs et des icônes
type ProgrammingConfigKey = "html/css" | "javascript" | "python" | "c";
type ProgrammingConfig = {
  [key in ProgrammingConfigKey]: {
    icon: React.ReactNode;
    color: string;
  };
};

const programmingConfig: ProgrammingConfig = {
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

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{ payload: { description: string } }>;
}
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload?.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-background border border-border p-3 rounded-lg shadow-sm">
        <p className="text-sm text-foreground">{data.description}</p>
      </div>
    );
  }
  return null;
};

interface CustomTickProps {
  x?: number;
  y?: number;
  payload?: { value: ProgrammingConfigKey };
}

const CustomTick = ({ x, y, payload }: CustomTickProps) => {
  if (!payload) return null;
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
};

export function ProgrammingLanguages() {
  const { t } = useTranslation('common');

  return (
    <Card className="w-full sm:w-[400px]">
      <CardHeader>
        <CardTitle className="text-2xl sm:text-3xl">{t("code-languages-title")}</CardTitle>
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
              tick={<CustomTick />}
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
              fill={programmingData[0].fill}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <Link href="/skills">
          <p className="hover:text-blue-600 dark:text-secondary">{"⏩ "} {t("code-languages-subtitle")}</p>
        </Link>
      </CardFooter>
    </Card>
  );
}