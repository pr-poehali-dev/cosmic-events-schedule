import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ScheduleEvent {
  id: string;
  title: string;
  time?: string;
  dates: string[];
  type:
    | "open-day"
    | "exhibition"
    | "observation"
    | "lecture"
    | "film"
    | "multi";
  duration?: string;
  description: string;
  isDaily?: boolean;
  isRange?: boolean;
}

const scheduleEvents: ScheduleEvent[] = [
  {
    id: "1",
    title: "День открытых дверей для школьников",
    dates: ["5 апреля", "7 апреля", "9 апреля"],
    type: "open-day",
    description:
      "Бесплатная экскурсия по планетарию, лекции, фильм о космосе и общение с сотрудниками.",
  },
  {
    id: "2",
    title: "Космическая фотовыставка",
    dates: ["10-30 апреля"],
    type: "exhibition",
    description:
      "Выставка красочных космических фотографий, представленных профессиональными астрономами. Посетители смогут насладиться красотой космоса.",
    isRange: true,
  },
  {
    id: "3",
    title: "Вечернее наблюдение звездного неба",
    time: "18:00 и 19:00",
    dates: ["Ежедневно"],
    type: "observation",
    duration: "60 мин",
    description:
      "Погрузитесь в атмосферу ночного неба и откройте для себя созвездия и планеты.",
    isDaily: true,
  },
  {
    id: "4",
    title: "Загадки черных дыр",
    time: "15:30",
    dates: ["17 апреля"],
    type: "lecture",
    duration: "90 мин",
    description:
      "Астрономы расскажут о загадках и свойствах черных дыр, а также о последних открытиях в этой области науки.",
  },
  {
    id: "5",
    title: "Путешествие по Солнечной системе",
    time: "17:00",
    dates: ["22 апреля"],
    type: "film",
    duration: "75 мин",
    description:
      "Совершите захватывающее путешествие по нашей Солнечной системе и узнайте больше о планетах и спутниках.",
  },
  {
    id: "6",
    title: "Жизнь на других планетах",
    time: "15:30",
    dates: ["23 апреля"],
    type: "lecture",
    duration: "85 мин",
    description:
      "Ученые расскажут о поиске жизни во Вселенной и о последних открытиях в области экзопланет.",
  },
  {
    id: "7",
    title: "Тройная космическая программа",
    time: "17:00",
    dates: ["24 апреля"],
    type: "multi",
    duration: "180 мин",
    description:
      "Фильм «Путешествие к галактикам», лекция «Звездные взрывы» и научно-популярный фильм «Великая симфония Вселенной».",
  },
];

const getEventTypeInfo = (type: ScheduleEvent["type"]) => {
  switch (type) {
    case "open-day":
      return {
        icon: "Users",
        label: "День открытых дверей",
        gradient: "from-emerald-400 via-teal-500 to-cyan-600",
        glow: "shadow-teal-500/40",
        bgAccent: "from-emerald-900/20 to-teal-900/10",
      };
    case "exhibition":
      return {
        icon: "Image",
        label: "Выставка",
        gradient: "from-violet-400 via-purple-500 to-fuchsia-600",
        glow: "shadow-purple-500/40",
        bgAccent: "from-violet-900/20 to-purple-900/10",
      };
    case "observation":
      return {
        icon: "Eye",
        label: "Наблюдение",
        gradient: "from-blue-400 via-indigo-500 to-purple-600",
        glow: "shadow-indigo-500/40",
        bgAccent: "from-blue-900/20 to-indigo-900/10",
      };
    case "lecture":
      return {
        icon: "BookOpen",
        label: "Лекция",
        gradient: "from-orange-400 via-red-500 to-pink-600",
        glow: "shadow-red-500/40",
        bgAccent: "from-orange-900/20 to-red-900/10",
      };
    case "film":
      return {
        icon: "Play",
        label: "Фильм",
        gradient: "from-cyan-400 via-blue-500 to-indigo-600",
        glow: "shadow-blue-500/40",
        bgAccent: "from-cyan-900/20 to-blue-900/10",
      };
    case "multi":
      return {
        icon: "Layers",
        label: "Мега-программа",
        gradient: "from-yellow-400 via-orange-500 to-red-600",
        glow: "shadow-orange-500/50",
        bgAccent: "from-yellow-900/20 to-orange-900/10",
      };
  }
};

const PlanetariumSchedule = () => {
  return (
    <div className="w-full max-w-6xl relative">
      {/* Космический фон с движущимися звёздами */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          ></div>
        ))}

        {/* Космические туманности */}
        <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-radial from-purple-600/10 to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div
          className="absolute bottom-40 right-20 w-60 h-60 bg-gradient-radial from-cyan-600/10 to-transparent rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Заголовок */}
      <div className="text-center mb-20 relative">
        <div className="inline-flex items-center gap-6 mb-8 relative">
          <div className="relative group">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 border border-purple-300/30 flex items-center justify-center shadow-2xl shadow-purple-500/40 group-hover:shadow-purple-500/60 transition-all duration-500">
              <Icon name="Telescope" size={32} className="text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full blur opacity-20 group-hover:opacity-40 animate-pulse transition-opacity"></div>
          </div>
          <div>
            <h1 className="text-6xl font-black bg-gradient-to-r from-cyan-200 via-purple-300 to-pink-300 bg-clip-text text-transparent tracking-tight leading-none">
              РАСПИСАНИЕ
            </h1>
            <div className="text-3xl font-light text-gray-300 tracking-[0.4em] mt-2">
              АПРЕЛЬ 2025
            </div>
          </div>
        </div>
        <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
          Откройте врата в бесконечность космоса • Каждое событие — новая
          галактика знаний
        </p>
      </div>

      {/* Сетка событий */}
      <div className="grid gap-8">
        {scheduleEvents.map((event, index) => {
          const typeInfo = getEventTypeInfo(event.type);

          return (
            <div
              key={event.id}
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-slate-900/80 via-gray-900/90 to-black/95 backdrop-blur-sm shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 transform hover:scale-[1.01] hover:-translate-y-2">
                {/* Динамический фон */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${typeInfo.bgAccent} opacity-40`}
                ></div>

                {/* Светящаяся граница */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${typeInfo.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-700 blur-sm`}
                ></div>
                <div className="absolute inset-0.5 bg-gradient-to-br from-slate-900/90 via-gray-900/95 to-black rounded-lg"></div>

                <div className="relative z-10 p-8">
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      {/* Тип события */}
                      <div className="flex items-center gap-4 mb-6">
                        <Badge
                          className={`flex items-center gap-3 px-4 py-2 bg-gradient-to-r ${typeInfo.gradient} text-black font-bold border-0 shadow-xl ${typeInfo.glow} text-sm`}
                        >
                          <Icon name={typeInfo.icon as any} size={16} />
                          {typeInfo.label}
                        </Badge>

                        {event.duration && (
                          <div className="flex items-center gap-2 text-gray-400 text-sm bg-gray-800/50 px-3 py-1 rounded-full">
                            <Icon name="Clock" size={14} />
                            <span>{event.duration}</span>
                          </div>
                        )}

                        {event.isDaily && (
                          <div className="flex items-center gap-2 text-cyan-400 text-sm bg-cyan-900/20 px-3 py-1 rounded-full border border-cyan-500/30">
                            <Icon name="RotateCcw" size={14} />
                            <span>Ежедневно</span>
                          </div>
                        )}
                      </div>

                      {/* Заголовок */}
                      <CardTitle className="text-3xl font-bold text-white group-hover:text-cyan-200 transition-colors duration-500 leading-tight mb-4">
                        {event.title}
                      </CardTitle>

                      {/* Описание */}
                      <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {event.description}
                      </p>

                      {/* Кнопка */}
                      <button
                        className={`group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r ${typeInfo.gradient} text-black font-bold rounded-full transition-all duration-500 hover:shadow-2xl ${typeInfo.glow} hover:scale-105 text-lg`}
                      >
                        <span>Забронировать билет</span>
                        <Icon
                          name="Rocket"
                          size={18}
                          className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:rotate-12"
                        />
                      </button>
                    </div>

                    {/* Даты и время */}
                    <div className="text-right min-w-fit">
                      {/* Даты */}
                      <div className="space-y-3 mb-6">
                        {event.dates.map((date, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-end gap-3"
                          >
                            <Icon
                              name="Calendar"
                              size={16}
                              className="text-gray-400"
                            />
                            <span
                              className={`text-lg font-semibold ${event.isDaily ? "text-cyan-300" : event.isRange ? "text-purple-300" : "text-white"}`}
                            >
                              {date}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Время */}
                      {event.time && (
                        <div className="relative">
                          <div
                            className={`text-4xl font-mono font-black bg-gradient-to-r ${typeInfo.gradient} bg-clip-text text-transparent`}
                          >
                            {event.time}
                          </div>
                          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      )}

                      {/* Специальные индикаторы */}
                      {event.type === "multi" && (
                        <div className="mt-4 flex items-center justify-end gap-1">
                          <span className="text-xs text-orange-400 font-semibold">
                            3 СОБЫТИЯ
                          </span>
                          {[...Array(3)].map((_, i) => (
                            <div
                              key={i}
                              className="w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse"
                              style={{ animationDelay: `${i * 0.3}s` }}
                            ></div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>

      {/* Нижний космический акцент */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center gap-4 text-gray-500 text-sm">
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <div className="flex items-center gap-2">
            <Icon name="Infinity" size={16} className="text-purple-400" />
            <span className="tracking-widest font-semibold">
              КОСМОС БЕСКОНЕЧЕН
            </span>
            <Icon name="Infinity" size={16} className="text-purple-400" />
          </div>
          <div className="w-16 h-px bg-gradient-to-l from-transparent via-purple-500 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default PlanetariumSchedule;
