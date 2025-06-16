import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ScheduleEvent {
  id: string;
  title: string;
  time: string;
  date: string;
  type: "show" | "lecture" | "special";
  duration: string;
  description: string;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    id: "1",
    title: "Путешествие к звёздам",
    time: "19:00",
    date: "15 июня",
    type: "show",
    duration: "45 мин",
    description: "Исследуем далёкие галактики и звёздные системы",
  },
  {
    id: "2",
    title: "Тайны чёрных дыр",
    time: "20:30",
    date: "15 июня",
    type: "lecture",
    duration: "60 мин",
    description: "Лекция о самых загадочных объектах Вселенной",
  },
  {
    id: "3",
    title: "Солнечная система",
    time: "18:00",
    date: "16 июня",
    type: "show",
    duration: "40 мин",
    description: "Знакомство с планетами нашей системы",
  },
  {
    id: "4",
    title: "Ночь персеид",
    time: "21:00",
    date: "16 июня",
    type: "special",
    duration: "90 мин",
    description: "Специальная программа наблюдения метеорного потока",
  },
  {
    id: "5",
    title: "Космические миссии",
    time: "19:30",
    date: "17 июня",
    type: "lecture",
    duration: "50 мин",
    description: "История освоения космоса человечеством",
  },
];

const getEventTypeInfo = (type: ScheduleEvent["type"]) => {
  switch (type) {
    case "show":
      return { icon: "Play", label: "Шоу", variant: "default" as const };
    case "lecture":
      return {
        icon: "BookOpen",
        label: "Лекция",
        variant: "secondary" as const,
      };
    case "special":
      return {
        icon: "Star",
        label: "Спецпрограмма",
        variant: "outline" as const,
      };
  }
};

const PlanetariumSchedule = () => {
  return (
    <div className="w-full max-w-4xl">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
            <Icon name="Telescope" size={24} className="text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Расписание планетария
          </h1>
        </div>
        <p className="text-gray-600 text-lg">
          Откройте для себя тайны Вселенной в наших программах
        </p>
      </div>

      <div className="grid gap-6">
        {scheduleEvents.map((event, index) => {
          const typeInfo = getEventTypeInfo(event.type);

          return (
            <Card
              key={event.id}
              className="group relative overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-white shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge
                        variant={typeInfo.variant}
                        className="flex items-center gap-1"
                      >
                        <Icon name={typeInfo.icon as any} size={12} />
                        {typeInfo.label}
                      </Badge>
                      <span className="text-sm text-gray-500">
                        {event.duration}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {event.title}
                    </CardTitle>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <Icon name="Calendar" size={14} />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-lg font-semibold text-purple-600">
                      <Icon name="Clock" size={16} />
                      {event.time}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <button className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium text-sm transition-colors group-hover:gap-3">
                    Узнать подробнее
                    <Icon
                      name="ArrowRight"
                      size={14}
                      className="transition-transform"
                    />
                  </button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default PlanetariumSchedule;
