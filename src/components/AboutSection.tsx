import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import Icon from '@/components/ui/icon';

const stats = [
  { value: '15+', label: 'лет на рынке' },
  { value: '30+', label: 'реализованных проектов' },
  { value: '12', label: 'регионов присутствия' },
  { value: '₽50 млрд', label: 'объём инвестиций' },
];

const directions = [
  {
    icon: 'Zap',
    title: 'Энергетика',
    desc: 'Строительство и модернизация электросетевых объектов, подстанций и генерирующих мощностей.',
  },
  {
    icon: 'Train',
    title: 'Транспорт',
    desc: 'Развитие железнодорожной и транспортно-логистической инфраструктуры по всей России.',
  },
  {
    icon: 'TrendingUp',
    title: 'Инвестиции',
    desc: 'Привлечение и управление инвестициями в инфраструктурные проекты с высокой надёжностью.',
  },
  {
    icon: 'Building2',
    title: 'Строительство',
    desc: 'Комплексное проектирование и строительство промышленных и инфраструктурных объектов.',
  },
];

export default function AboutSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="bg-neutral-950 py-24 px-8 md:px-16" ref={ref}>
      <div className="container mx-auto max-w-6xl">

        {/* Header */}
        <div className={cn(
          'mb-16 transform transition-all duration-700 ease-out',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-amber-400 mb-3">О компании</p>
          <h2 className="text-3xl md:text-5xl font-semibold text-white leading-tight mb-6">
            ИнвестЭнерго<span className="text-amber-400">Транс</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl leading-relaxed">
            Группа компаний с многолетним опытом реализации крупных инфраструктурных проектов в сфере энергетики и транспорта. Мы работаем с государственными и частными партнёрами по всей России, обеспечивая полный цикл — от инвестирования до сдачи объекта.
          </p>
        </div>

        {/* Stats */}
        <div className={cn(
          'grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-16 transform transition-all duration-700 delay-200 ease-out',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 px-8 py-10 text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-2">{s.value}</p>
              <p className="text-sm text-white/50 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Directions */}
        <div className={cn(
          'grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 transform transition-all duration-700 delay-300 ease-out',
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        )}>
          {directions.map((d) => (
            <div key={d.title} className="bg-neutral-950 p-10 group hover:bg-neutral-900 transition-colors duration-300">
              <div className="mb-5">
                <Icon name={d.icon} size={32} className="text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{d.title}</h3>
              <p className="text-white/55 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}