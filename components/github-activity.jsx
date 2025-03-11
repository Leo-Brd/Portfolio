"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useTranslation } from 'next-i18next';

export function GithubActivity() {
  const { t } = useTranslation('common');
  const [events, setEvents] = useState([]);
  const username = "Leo-Brd";

  useEffect(() => {
    fetch(`https://api.github.com/users/Leo-Brd/events`)
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération de l'activité GitHub : ", error)
      );
  }, []);

  return (
    <div className="p-6 mb-12">
      <h2 className="text-4xl font-bold mb-10 text-center">{t("github-activity-title")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.slice(0, 6).map((event, index) => (
          <Card key={index} className="hover:shadow-lg dark:shadow-white/10 transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="text-lg font-semibold">
                  {event.type.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <a
                  href={`https://github.com/${event.repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-black dark:hover:text-primary-foreground"
                >
                  <ArrowRight className="w-5 h-5" />
                </a>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                📂 <span className="font-medium">{event.repo.name}</span>
              </p>
              {event.payload?.commits?.map((commit, i) => (
                <p key={i} className="text-sm mt-2">
                  💻 Commit : <span className="text-foreground">{commit.message}</span>
                </p>
              ))}
              <p className="text-sm text-muted-foreground mt-2">
                🕒 {new Date(event.created_at).toLocaleString()}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
