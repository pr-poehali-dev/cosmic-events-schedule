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
      return {
        icon: "Play",
        label: "Шоу",
        gradient: "from-cyan-400 via-blue-500 to-purple-600",
        glow: "shadow-cyan-500/30",
      };
    case "lecture":
      return {
        icon: "BookOpen",
        label: "Лекция",
        gradient: "from-purple-400 via-pink-500 to-red-500",
        glow: "shadow-purple-500/30",
      };
    case "special":
      return {
        icon: "Star",
        label: "Спецпрограмма",
        gradient: "from-yellow-400 via-orange-500 to-red-600",
        glow: "shadow-orange-500/40",
      };
  }
};

const PlanetariumSchedule = () => {
  return (
    <div className="w-full max-w-5xl relative">
      {/* Космический фон с звёздами */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div
          className="absolute top-32 right-16 w-0.5 h-0.5 bg-blue-300 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute top-48 left-1/3 w-0.5 h-0.5 bg-purple-300 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/4 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute bottom-20 left-12 w-0.5 h-0.5 bg-white rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Заголовок */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-4 mb-6 relative">
          <div className="relative">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 via-purple-700 to-black border-2 border-purple-400/30 flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <Icon name="Telescope" size={28} className="text-cyan-300" />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full blur opacity-30 animate-pulse"></div>
          </div>
          <div>
            <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-300 via-purple-400 to-pink-400 bg-clip-text text-transparent tracking-tight">
              РАСПИСАНИЕ
            </h1>
            <div className="text-2xl font-light text-gray-300 tracking-[0.3em] mt-1">
              ПЛАНЕТАРИЯ
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          Погрузитесь в бездонные глубины космоса и откройте тайны Вселенной
        </p>
      </div>

      {/* Сетка событий */}
      <div className="space-y-8">
        {scheduleEvents.map((event, index) => {
          const typeInfo = getEventTypeInfo(event.type);
          const isEven = index % 2 === 0;

          return (
            <div
              key={event.id}
              className={`group relative animate-fade-in ${
                isEven ? "ml-0 mr-8" : "ml-8 mr-0"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Космическая траектория */}
              <div
                className={`absolute top-1/2 ${isEven ? "-right-6" : "-left-6"} w-6 h-px bg-gradient-to-r ${isEven ? "from-transparent to-purple-500/50" : "from-purple-500/50 to-transparent"}`}
              ></div>

              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1">
                {/* Внутреннее свечение */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10"></div>

                {/* Граница с эффектом */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${typeInfo.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
                ></div>
                <div
                  className={`absolute inset-px bg-gradient-to-br from-slate-900 via-gray-900 to-black rounded-lg`}
                ></div>

                <div className="relative z-10">
                  <CardHeader className="pb-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <Badge
                            className={`flex items-center gap-2 px-3 py-1 bg-gradient-to-r ${typeInfo.gradient} text-black font-semibold border-0 shadow-lg ${typeInfo.glow}`}
                          >
                            <Icon name={typeInfo.icon as any} size={14} />
                            {typeInfo.label}
                          </Badge>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Icon name="Timer" size={14} />
                            <span>{event.duration}</span>
                          </div>
                        </div>
                        <CardTitle className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300 leading-tight">
                          {event.title}
                        </CardTitle>
                      </div>

                      {/* Время в необычном формате */}
                      <div className="relative">
                        <div className="text-right">
                          <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                            <Icon name="Calendar" size={14} />
                            {event.date}
                          </div>
                          <div className="relative">
                            <div
                              className={`text-3xl font-mono font-bold bg-gradient-to-r ${typeInfo.gradient} bg-clip-text text-transparent`}
                            >
                              {event.time}
                            </div>
                            <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed text-lg mb-6">
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <button
                        className={`group/btn inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${typeInfo.gradient} text-black font-semibold rounded-full transition-all duration-300 hover:shadow-lg ${typeInfo.glow} hover:scale-105`}
                      >
                        <span>Забронировать место</span>
                        <Icon
                          name="ArrowRight"
                          size={16}
                          className="transition-transform group-hover/btn:translate-x-1"
                        />
                      </button>

                      {/* Индикатор популярности */}
                      <div className="flex items-center gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${i < 2 ? "bg-cyan-400" : "bg-gray-600"} animate-pulse`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Нижний космический акцент */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
          <div className="w-8 h-px bg-gradient-to-r from-transparent to-purple-500"></div>
          <span>∞ БЕСКОНЕЧНОСТЬ ЖДЁТ ∞</span>
          <div className="w-8 h-px bg-gradient-to-l from-transparent to-purple-500"></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetariumSchedule;
