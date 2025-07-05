import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [activeTimelineItem, setActiveTimelineItem] = useState(0);

  const timelineEvents = [
    {
      year: "1975",
      date: "17 апреля",
      title: "Захват Пномпеня",
      description:
        "Красные кхмеры захватили столицу Камбоджи, началась принудительная эвакуация городского населения.",
      impact: "Начало геноцида",
      sources: ["Документы ООН", "Свидетельства очевидцев"],
    },
    {
      year: "1976",
      date: "Январь",
      title: "Провозглашение Демократической Кампучии",
      description:
        "Установление нового режима с радикальными социальными преобразованиями.",
      impact: "Коллективизация сельского хозяйства",
      sources: [
        "Архивы Йельского университета",
        "Документация Khmer Rouge Tribunal",
      ],
    },
    {
      year: "1977-1978",
      date: "Период",
      title: "Массовые репрессии",
      description:
        "Пик репрессий против интеллигенции, религиозных меньшинств и предполагаемых врагов режима.",
      impact: "Уничтожение 1.5-2 млн человек",
      sources: ["Исследования Университета Йеля", "Tribunal Documentation"],
    },
    {
      year: "1979",
      date: "7 января",
      title: "Падение режима",
      description:
        "Вьетнамские войска заняли Пномпень, конец правления красных кхмеров.",
      impact: "Освобождение выживших",
      sources: ["Военные архивы", "Свидетельства беженцев"],
    },
  ];

  const consequences = [
    {
      category: "Демографические потери",
      data: "1.5-2 млн погибших",
      description:
        "Около 25% населения Камбоджи погибло в результате казней, голода и болезней",
    },
    {
      category: "Культурное разрушение",
      data: "95% храмов разрушено",
      description:
        "Систематическое уничтожение буддийских монастырей и культурных памятников",
    },
    {
      category: "Образование",
      data: "75% учителей убито",
      description:
        "Целенаправленное уничтожение интеллигенции и образованных слоев населения",
    },
    {
      category: "Экономика",
      data: "Полный коллапс",
      description: "Разрушение всей экономической инфраструктуры страны",
    },
  ];

  return (
    <div className="min-h-screen bg-sepia-gradient animate-fade-in">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1
                className="text-3xl font-bold text-documentary-gradient animate-scale-in"
                style={{ fontFamily: "Playfair Display" }}
              >
                Красные кхмеры: Исторический анализ
              </h1>
              <p className="text-slate-600 mt-2">
                Документальное исследование режима 1975-1979
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Исторический архив
              </Badge>
              <Button variant="outline" size="sm">
                <Icon name="BookOpen" size={16} className="mr-2" />
                Источники
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage:
              "url(/img/ad4f6295-79a1-4b94-bd66-ad2c689b4479.jpg)",
            filter: "sepia(30%) contrast(1.2)",
          }}
        ></div>
        <div className="max-w-7xl mx-auto text-center relative z-20">
          <div className="mb-6">
            <h2
              className="text-5xl font-bold mb-4 text-historical-gradient animate-pulse-soft"
              style={{ fontFamily: "Playfair Display" }}
            >
              Режим террора
            </h2>
          </div>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto leading-relaxed bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg">
            С 1975 по 1979 год режим красных кхмеров под руководством Пол Пота
            осуществлял один из самых жестоких геноцидов в истории человечества.
            Этот сайт представляет документальный анализ событий того периода.
          </p>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <h3
            className="text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            <Icon name="Clock" size={32} className="inline mr-3 text-red-600" />
            Хронология событий
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-600 to-red-800 rounded-full"></div>

            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} mb-12 animate-slide-up`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
                  <Card
                    className={`cursor-pointer transition-all duration-500 hover-lift timeline-glow ${
                      activeTimelineItem === index
                        ? "ring-2 ring-red-500 bg-red-50 shadow-2xl"
                        : "hover:bg-slate-50"
                    }`}
                    onClick={() => setActiveTimelineItem(index)}
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-2xl font-bold text-red-800">
                          {event.year}
                        </CardTitle>
                        <Badge variant="outline">{event.date}</Badge>
                      </div>
                      <h4 className="text-xl font-semibold text-slate-900">
                        {event.title}
                      </h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-700 mb-4">{event.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-red-700">
                          <Icon
                            name="AlertTriangle"
                            size={16}
                            className="mr-2"
                          />
                          <span className="font-medium">Последствия:</span>
                          <span className="ml-2">{event.impact}</span>
                        </div>
                        <div className="flex items-center text-sm text-slate-600">
                          <Icon name="FileText" size={16} className="mr-2" />
                          <span className="font-medium">Источники:</span>
                          <span className="ml-2">
                            {event.sources.join(", ")}
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white ${
                    activeTimelineItem === index
                      ? "bg-red-600 animate-pulse-soft"
                      : "bg-slate-400"
                  } transition-colors duration-300`}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consequences Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3
            className="text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            <Icon
              name="BarChart3"
              size={32}
              className="inline mr-3 text-red-600"
            />
            Последствия режима
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {consequences.map((item, index) => (
              <Card
                key={index}
                className="relative overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-red-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-slate-900">
                    {item.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {item.data}
                  </div>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h3
            className="text-3xl font-bold text-center mb-12"
            style={{ fontFamily: "Playfair Display" }}
          >
            <Icon
              name="BookOpen"
              size={32}
              className="inline mr-3 text-red-600"
            />
            Система цитирования
          </h3>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="primary-sources">
              <AccordionTrigger className="text-lg font-semibold">
                Первичные источники
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Документы Khmer Rouge Tribunal
                    </h4>
                    <p className="text-sm text-slate-600">
                      Официальные документы Чрезвычайных палат судов Камбоджи
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">
                      Архивы Йельского университета
                    </h4>
                    <p className="text-sm text-slate-600">
                      Документация программы геноцида Йельского университета
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="testimonies">
              <AccordionTrigger className="text-lg font-semibold">
                Свидетельства очевидцев
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Устная история</h4>
                    <p className="text-sm text-slate-600">
                      Записи интервью с выжившими и свидетелями
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Документы беженцев</h4>
                    <p className="text-sm text-slate-600">
                      Свидетельства беженцев в лагерях на границе с Таиландом
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-300 mb-4">
            Этот сайт создан в память о жертвах режима красных кхмеров и служит
            образовательным целям для изучения истории геноцида.
          </p>
          <div className="flex justify-center items-center gap-4">
            <Icon name="Heart" size={20} className="text-red-500" />
            <span className="text-sm text-slate-400">В память о погибших</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
