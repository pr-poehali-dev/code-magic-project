import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const images = [
  'https://cdn.poehali.dev/projects/127ccc8c-12fa-426c-a9cc-d52636a6e723/files/1f89f94e-3066-4139-9acb-828aec8cca60.jpg',
  'https://cdn.poehali.dev/projects/127ccc8c-12fa-426c-a9cc-d52636a6e723/files/6fa63923-a1df-4631-a630-d75b502332a8.jpg',
  'https://cdn.poehali.dev/projects/127ccc8c-12fa-426c-a9cc-d52636a6e723/files/eb075715-a3be-4fa9-9118-9a1c6cd87604.jpg',
  'https://cdn.poehali.dev/projects/127ccc8c-12fa-426c-a9cc-d52636a6e723/files/1874b000-a974-4c37-8b4e-95d7a77a88ce.jpg',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={cn(
              'absolute inset-0 transition-opacity duration-1000 ease-in-out',
              currentIndex === index ? 'opacity-100' : 'opacity-0'
            )}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-8 md:px-16">
          <div className="flex max-w-2xl flex-col gap-12">
            {/* Portrait */}
            <div
              className={cn(
                'transform transition-all duration-1000 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="relative h-48 w-48 overflow-hidden rounded-2xl border-4 border-white/80 shadow-2xl md:h-64 md:w-64 bg-white/10 flex items-center justify-center">
                <img
                  src="https://cdn.poehali.dev/projects/127ccc8c-12fa-426c-a9cc-d52636a6e723/files/8addaa6b-d8f9-4311-b6a6-d8a9bd634acf.jpg"
                  alt="ИнвестЭнергоТранс"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={cn(
                'transform transition-all duration-1000 delay-300 ease-out',
                isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              )}
            >
              <div className="space-y-5">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/50 mb-2">
                    Группа компаний
                  </p>
                  <p className="text-3xl font-semibold text-white md:text-4xl lg:text-5xl leading-tight">
                    ИнвестЭнерго<span className="text-amber-400">Транс</span>
                  </p>
                </div>
                <p className="text-lg font-light text-white/75 md:text-xl max-w-md leading-relaxed">
                  Инвестиции в энергетику и транспортную инфраструктуру. Реализуем масштабные проекты — от финансирования до запуска.
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-none bg-amber-400 px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-amber-300"
                  >
                    Связаться с нами
                  </a>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-none border border-white/40 px-6 py-3 text-sm font-light text-white/90 transition-all hover:border-white hover:text-white"
                  >
                    Наши проекты
                  </a>
                </div>
                <div className="flex gap-4 pt-2">
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-amber-400"
                    aria-label="Telegram"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                    </svg>
                  </a>
                  <a
                    href="https://vk.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 transition-colors hover:text-amber-400"
                    aria-label="VKontakte"
                  >
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.745-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.043-2.763-5.32-2.763-5.788 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.814-.542 1.27-1.422 2.18-3.625 2.18-3.625.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'h-1 transition-all duration-300',
              currentIndex === index ? 'w-12 bg-white' : 'w-8 bg-white/40 hover:bg-white/60'
            )}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}