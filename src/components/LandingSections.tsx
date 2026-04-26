import { useEffect } from "react";
import { LucideIcon, Play, CircleCheckBig, Zap, RotateCcw, BookOpen, Users, Star, Gift, ChevronDown, Shield, Lock, ThumbsUp, Award, MessageSquare } from "lucide-react";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

function useWistiaScripts() {
  useEffect(() => {
    const scripts = [
      { id: "wistia-player-script", src: "https://fast.wistia.com/player.js", type: undefined },
      { id: "wistia-embed-zwnzq9nuy8", src: "https://fast.wistia.com/embed/zwnzq9nuy8.js", type: "module" },
    ];

    scripts.forEach(({ id, src, type }) => {
      if (document.getElementById(id)) return;
      const script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = true;
      if (type) script.type = type;
      document.head.appendChild(script);
    });
  }, []);
}

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-2.5 px-4 text-center bg-primary">
      <p className="text-white text-sm md:text-base font-bold drop-shadow-sm">
        🚨 OFERTA VÁLIDA SOLO HOY - 26/04/2026
      </p>
    </div>
  );
}

export function Hero() {
  useWistiaScripts();

  return (
    <section className="pt-20 pb-16 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full mb-5 bg-primary text-white">
          😵‍💫 ¿Niños inquietos, sin concentración y usted sin tiempo para planear?
        </span>
        <h1 className="text-2xl md:text-4xl font-black leading-snug mb-6 tracking-tight text-foreground">
          <span className="text-primary">¡Más de 750 Actividades Bíblicas Listas para Imprimir!</span> que mantienen a los niños calmados, atentos y motivados
        </h1>
        <p className="text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed text-muted-foreground">
          Enséñeles la Biblia a los pelados de forma bacana y sin tanto complique.
        </p>
        
        <div className="mx-auto mb-8 w-full max-w-xs">
          <div className="relative p-3 rounded-[38px] bg-gradient-to-br from-zinc-800 to-black shadow-2xl ring-2 ring-inset ring-zinc-700/50">
            {/* Phone Frame Elements */}
            <div className="absolute left-[-2px] top-[22%] w-[3px] height-[26px] bg-zinc-900 rounded-l-sm" />
            <div className="absolute left-[-2px] top-[32%] w-[3px] height-[44px] bg-zinc-900 rounded-l-sm" />
            <div className="absolute left-[-2px] top-[44%] w-[3px] height-[44px] bg-zinc-900 rounded-l-sm" />
            <div className="absolute right-[-2px] top-[30%] w-[3px] height-[64px] bg-zinc-900 rounded-r-sm" />
            
            <div className="relative aspect-[9/16] rounded-[26px] overflow-hidden bg-black">
              <div className="w-full h-full" suppressHydrationWarning dangerouslySetInnerHTML={{ 
                __html: `<wistia-player media-id="zwnzq9nuy8" aspect="0.5625"></wistia-player>` 
              }} />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[78px] h-[22px] bg-black rounded-full z-10 pointer-events-none" />
            </div>
          </div>
        </div>

        <a href="#oferta">
          <button className="text-base px-7 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer bg-primary text-white border-none">
            ¡Quiero mi acesso ya mismo!
          </button>
        </a>

        <div className="flex flex-wrap justify-center gap-3 mt-7">
          <TrustBadge icon={CircleCheckBig} text="Compra 100% Segura" iconColor="text-success" />
          <TrustBadge icon={Zap} text="Acceso Inmediato" iconColor="text-primary" />
          <TrustBadge icon={RotateCcw} text="Garantía de 14 Días" iconColor="text-primary" />
        </div>
      </div>
    </section>
  );
}

function TrustBadge({ icon: Icon, text, iconColor }: { icon: LucideIcon; text: string; iconColor: string }) {
  return (
    <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold">
      <Icon className={`w-4 h-4 ${iconColor}`} />
      <span className="text-foreground">{text}</span>
    </span>
  );
}

export function WhatYouWillReceive() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          Lo Que Vas a <span className="text-primary">Recibir</span>
        </h2>
        <p className="text-sm mb-10 text-muted-foreground">Todo lo que necesita para enseñar la Biblia de forma creativa y sin esfuerzo</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={BookOpen} title="+750 Actividades Bíblicas" desc="Dinámicas, juegos, historias y actividades listas para aplicar." />
          <FeatureCard icon={Users} title="Ideal para Ministerio Infantil" desc="Perfecto para profesoras, líderes y mamás cristianas." />
          <FeatureCard icon={Zap} title="Acceso Inmediato tras la compra" desc="Material liberado automáticamente, sin esperas." />
          <FeatureCard icon={Star} title="Uso Sin Límites para siempre" desc="Imprima y utilice siempre que lo necesite." />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, desc }: { icon: LucideIcon; title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all group bg-white">
      <div className="w-12 h-12 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform bg-gradient-to-br from-primary to-blue-800">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="font-bold text-sm mb-1 leading-snug text-foreground">{title}</h3>
      <p className="text-xs leading-relaxed text-muted-foreground">{desc}</p>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="oferta" className="py-16 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase text-primary bg-primary/10">
          Elija su paquete
        </span>
        <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          Tenemos <span className="text-primary">Dos Paquetes.</span> ¡Elija con Sabiduría!
        </h2>
        <p className="text-sm mb-10 text-muted-foreground">Acceso inmediato tras la compra. Sin mensualidad.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Essential Package */}
          <div className="rounded-2xl border-2 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all bg-white border-border">
            <div className="px-6 pt-6 pb-5 text-center border-b">
              <h3 className="text-2xl font-black tracking-tight uppercase mb-3 text-primary">Paquete Esencial</h3>
              <span className="line-through text-sm font-medium text-destructive">De $ 49.900</span>
              <div className="text-3xl font-black mt-1 text-success">a solo: $ 10.000</div>
              <p className="text-xs mt-1 text-muted-foreground">pago único</p>
              <p className="text-xs font-bold mt-2 mb-3 text-success">¡Ahorre $ 39.900!</p>
            </div>
            <div className="px-6 py-4 flex-1">
              <ul className="text-left space-y-3 mb-6">
                <PricingFeature text="+375 Actividades Bíblicas Listas para Imprimir" />
                <PricingFeature text="Acceso inmediato y vitalicio" />
                <PricingFeature text="Enviamos por E-mail y Whatsapp" />
                <PricingFeature text="Garantía de 7 Días" />
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full rounded-full font-bold py-3 border-2 transition-all cursor-pointer text-sm bg-primary border-primary text-white hover:opacity-90">
                ¡Quiero mi acceso ya mismo!
              </button>
              <div className="mt-4 rounded-xl px-4 py-3 text-center bg-primary/5">
                  <p className="text-[11px] font-extrabold tracking-wide uppercase mb-1.5 text-primary">
                    ¡Aún está a tiempo de llevar la mejor opción!
                  </p>
                  <p className="text-[11px] font-semibold leading-snug text-foreground">
                    El <strong className="font-extrabold text-primary">Paquete Completo</strong> incluye más <strong className="font-extrabold text-primary">actividades</strong>, <strong className="font-extrabold text-primary">actualizaciones</strong> y los <strong className="font-extrabold text-primary">3 bonos exclusivos</strong>.
                  </p>
                <div className="flex items-center justify-center gap-0.5 mt-1.5 text-primary">
                  <ChevronDown className="w-4 h-4" />
                  <ChevronDown className="w-4 h-4" />
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Complete Package */}
          <div className="rounded-2xl border-2 overflow-hidden flex flex-col shadow-lg hover:shadow-xl transition-all bg-white border-primary relative ring-4 ring-primary/10">
            <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg">
              MÁS VENDIDO
            </div>
            <div className="px-6 pt-6 pb-5 text-center border-b">
              <h3 className="text-2xl font-black tracking-tight uppercase mb-3 text-primary">Paquete Completo</h3>
              <span className="line-through text-sm font-medium text-destructive">De $ 126.700</span>
              <div className="text-3xl font-black mt-1 text-success">a solo: $ 59.900</div>
              <p className="text-xs mt-1 text-muted-foreground">pago único</p>
              <p className="text-xs font-bold mt-2 mb-3 text-success">¡Ahorre $ 66.800!</p>
            </div>
            <div className="px-6 py-4 flex-1">
              <ul className="text-left space-y-3 mb-6">
                <PricingFeature text="+750 Actividades Bíblicas Listas para Imprimir" />
                <PricingFeature text="Actualizaciones Semanales" />
                <PricingFeature text="Acceso inmediato y vitalicio" />
                <PricingFeature text="Enviamos por E-mail y Whatsapp" />
                <PricingFeature text="Garantia de 14 Días" />
              </ul>
              <p className="text-sm font-black text-center tracking-wide mt-0 mb-6 text-primary">BONOS EXCLUSIVOS</p>
              <ul className="text-left space-y-3 mb-4">
                <BonusFeature text="Bono: Cajita de la Oración (Frasquito de Oración)" />
                <BonusFeature text="Bono: Libro de Colorear Cristiano" />
                <BonusFeature text="Bono: Juegos Bíblicos Educativos" />
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a href="https://pay.wiapy.com/kWefAj46uw" target="_blank" rel="noopener noreferrer" className="block w-full rounded-full font-bold py-3 border-2 text-white text-sm text-center hover:opacity-90 transition-all bg-primary border-primary">
                ¡Quiero mi acceso ya mismo!
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-10 w-full max-w-lg mx-auto">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 mb-1">
              <RotateCcw className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-black uppercase tracking-widest text-primary">Garantía Incondicional</span>
            </div>
            <p className="text-base font-black text-foreground">Satisfacción garantizada o le devolvemos su dinero</p>
            <p className="text-[11px] font-bold mt-1 text-primary animate-pulse uppercase tracking-tighter">¡Pilas! Que esta oferta es por tiempo limitado.</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <GuaranteeCard title="Paquete Esencial" days="7 Días" color="text-success" icon={Shield} />
            <GuaranteeCard title="Paquete Completo" days="14 Días" color="text-primary" icon={Shield} />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 border rounded-xl py-2.5 px-4 bg-white/50">
            <Lock className="w-3 h-3 shrink-0 text-muted-foreground" />
            <p className="text-[9px] text-center leading-snug text-muted-foreground">
              Basta con enviar un e-mail dentro del plazo de garantía y le reembolsamos el <span className="font-black text-foreground">100%</span> de lo pagado, <span className="font-black text-foreground">sin preguntas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase text-primary">
            ¿Por qué elegirnos?
          </span>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
            ¿Por Qué Elegir la <span className="text-primary">Colección Bíblica Infantil?</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed text-muted-foreground">
            Descubra por qué profesoras, líderes y mamás cristianas están usando este material para enseñar la Palabra de Dios con más ligereza y creatividad.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WhyCard 
            icon={Users} 
            title="Ideal para Ministerio Infantil" 
            desc="Actividades pensadas para Escuela Dominical, cultos infantiles y enseñanza cristiana en casa."
            gradient="from-blue-500 to-blue-700"
          />
          <WhyCard 
            icon={BookOpen} 
            title="Fundamentado en la Palabra" 
            desc="Contenido basado en historias e principios bíblicos para fortalecer valores cristianos."
            gradient="from-indigo-500 to-blue-700"
          />
          <WhyCard 
            icon={CircleCheckBig} 
            title="Listo para Imprimir" 
            desc="Material organizado y fácil de aplicar, sin tener que preparar nada desde cero."
            gradient="from-cyan-500 to-blue-700"
          />
          <WhyCard 
            icon={Star} 
            title="Enseñanza Ligera y Motivadora" 
            desc="Dinámicas y actividades que hacen que el aprendizaje bíblico sea más divertido y participativo."
            gradient="from-blue-400 to-blue-800"
          />
        </div>
      </div>
    </section>
  );
}

function WhyCard({ icon: Icon, title, desc, gradient }: { icon: LucideIcon; title: string; desc: string; gradient: string }) {
  return (
    <div className="rounded-2xl border-2 p-5 flex items-start gap-4 hover:shadow-xl transition-all group bg-white border-transparent hover:border-border">
      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform bg-gradient-to-br ${gradient} shrink-0`}>
        <Icon className="w-7 h-7 text-white" />
      </div>
      <div className="text-left">
        <h3 className="font-bold text-base mb-1 leading-snug text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

export function BonusDetails() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto text-center">
        <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 tracking-wide uppercase text-primary">
          Bonos exclusivos
        </span>
        <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          ¡Reciba <span className="text-primary">3 Bonos Increíbles</span> de Grava!
        </h2>
        <p className="mb-10 text-sm max-w-xl mx-auto text-muted-foreground">
          Materiales extra que van a transformar sus clases en experiencias inolvidables
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <BonusCard 
            index="01" 
            title="Cajita de la Oración (Frasquito de Oración)" 
            desc="Listo para imprimir y armar de una. Modelos listos para incentivar el hábito de la oración."
            oldPrice="$ 19.900"
            img="/bonus-1.png"
          />
          <BonusCard 
            index="02" 
            title="Libro de Colorear Cristiano" 
            desc="Dibujos bien tiernos para enseñar con toda la alegría. Ilustraciones para reforzar enseñanzas."
            oldPrice="$ 27.000"
            img="/bonus-2.png"
          />
          <BonusCard 
            index="03" 
            title="Juegos Bíblicos" 
            desc="Quiz, dominó, UNO y ¡muchas vainas más! Actividades interactivas para el aprendizaje."
            oldPrice="$ 29.900"
            img="/bonus-3.png"
          />
        </div>

        <div className="rounded-2xl border-2 inline-flex flex-col items-center gap-1 px-10 py-4 mb-8 border-border">
          <p className="text-xs uppercase tracking-wide font-bold text-foreground">Total en Bonos</p>
          <p className="text-2xl font-black line-through text-destructive">$ 76.800</p>
          <p className="text-lg font-black text-success">Hoy: Completamente GRATIS</p>
        </div>

        <div className="block">
          <a href="#oferta">
            <button className="text-white text-sm px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform border-none cursor-pointer bg-success hover:opacity-90">
              ¡Quiero mi acceso ya mismo!
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

function BonusCard({ index, title, desc, oldPrice, img }: { index: string; title: string; desc: string; oldPrice: string; img: string }) {
  return (
    <div className="rounded-2xl border-2 overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all bg-white border-border">
      <div className="px-5 pt-5 pb-5 flex flex-col items-center flex-1">
        <span className="text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest text-primary">BONO {index}</span>
        <img alt={title} className="w-full rounded-xl mb-5 shadow-md object-contain" src={img} />
        <h3 className="font-bold text-base mb-2 leading-snug text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed mb-4 flex-1 text-muted-foreground">{desc}</p>
        <span className="text-xs font-semibold px-3 py-1 rounded-full text-primary">
          Precio: <span className="line-through font-semibold text-destructive">{oldPrice}</span> · <span className="font-black">GRATIS</span>
        </span>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);

  const testimonials = [
    {
      img: "/depoimento-whats-1.png",
      name: "Juliana Castro",
      text: "¡Uff, re-feliz! Inclusive ya se lo pasé a las otras profes de la iglesia. Las clases quedaron re-chéveres y los pelados participan mucho más. Valeó muchísimo la pena, de verdad."
    },
    {
      img: "/depoimento-whats-2.png",
      name: "Bárbara Ospina",
      text: "En serio, me cambió las clases de una. Los pelados se quedan re-metidos de principio a fin y ya no me toca matarme horas preparando todo. La variedad es una chimba."
    },
    {
      img: "/depoimento-whats-3.png",
      name: "Carla Martínez",
      text: "De una lo usé con mis pelados este fincho. Les fascinó el libro de colorear e los juegos. Está mucho más bacano enseñar la Biblia en casa ahora. Hasta mi marido quedó re-tramado."
    },
  ];

  return (
    <section className="py-16 px-4 bg-muted/50 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 mb-3">
          <MessageSquare className="w-4 h-4 text-primary" />
          <span className="text-[11px] font-black uppercase tracking-widest text-primary">Testimonios reales</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-foreground">
          Lo Que Dicen <span className="text-primary">Madres y Profesoras</span>
        </h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-4">
        <div className="embla" ref={emblaRef}>
          <div className="embla__container flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="embla__slide flex-[0_0_85%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_35%] px-2">
                <div className="h-full rounded-2xl overflow-hidden shadow-lg border-4 border-white bg-white flex flex-col">
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-1 mb-3 text-amber-400">
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                      <Star className="w-4 h-4 fill-current" />
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground italic mb-6 flex-1">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-bold text-foreground leading-none">{testimonial.name}</p>
                        <p className="text-[11px] text-muted-foreground mt-1">Cliente Verificada</p>
                      </div>
                    </div>
                  </div>
                  <div className="aspect-video relative overflow-hidden bg-muted">
                    <img 
                      src={testimonial.img} 
                      alt={`Depoimento ${index + 1}`} 
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Author() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-[1px] bg-border" />
          <span className="text-[11px] font-black uppercase tracking-widest text-primary">Sobre la Autora</span>
          <div className="w-8 h-[1px] bg-border" />
        </div>
        <div className="rounded-3xl border shadow-md overflow-hidden bg-white border-blue-200">
          <div className="h-16 bg-primary/5" />
          <div className="flex flex-col items-center -mt-10 px-6 pb-6">
            <div className="relative mb-3">
              <div className="w-20 h-20 rounded-full border-4 overflow-hidden shadow-lg border-primary">
                <img alt="Ana Cristina" className="w-full h-full object-cover" src="/autora-foto.png" />
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-black px-2.5 py-0.5 rounded-full whitespace-nowrap shadow bg-primary text-white">✦ Autora</span>
            </div>
            <h3 className="text-xl font-black mt-2 text-center text-foreground">Ana Cristina</h3>
            <p className="text-xs font-bold text-center mb-5 text-primary uppercase tracking-tight">Educadora Cristiana y Líder de Ministerio Infantil</p>
            <div className="space-y-3 w-full">
              <AuthorPoint text="Con años de experiencia en la enseñanza bíblica infantil, Ana Cristina dedica su camino a ayudar a los niños a crecer en la fe desde temprana edad." />
              <AuthorPoint text="Con el tiempo, notó la dificultad que muchas profesoras, líderes y madres enfrentan al preparar clases motivadoras y fundamentadas en la Palabra de Dios." />
              <AuthorPoint text="Fue a partir de esa necesidad que nació la Colección Bíblica Infantil, reuniendo más de 750 actividades bíblicas listas para imprimir y aplicar con facilidad." />
              <div className="border-l-2 border-amber-400 bg-amber-50 rounded-r-xl pl-3 pr-3 py-2.5">
                <p className="text-xs leading-relaxed text-amber-900">
                  <span className="font-black">Su propósito es claro: Enseñar la Palabra de Dios de forma ligera, creativa y significativa</span>, fortaleciendo valores cristianos en la vida de los niños.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AuthorPoint({ text }: { text: string }) {
  return (
    <div className="border-l-2 border-primary/20 rounded-r-xl pl-3 pr-3 py-2.5">
      <p className="text-xs leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden pt-14 pb-10 px-4 text-center bg-white border-t border-blue-100">
      <div className="relative max-w-sm mx-auto">
        <div className="flex items-center justify-center gap-2.5 mb-3">
          <div className="w-9 h-9 rounded-xl border flex items-center justify-center border-border">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <span className="font-black text-lg tracking-tight text-foreground">Colección Bíblica Infantil</span>
        </div>
        <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
          Transformando el <span className="font-bold px-1.5 py-0.5 rounded-md text-primary bg-primary/5">aprendizaje bíblico infantil</span>
        </p>
        <div className="h-px w-full mb-5 bg-border" />
        <div className="flex justify-center gap-3 flex-wrap mb-6">
          <FooterBadge text="+750 Actividades" />
          <FooterBadge text="Garantía 14 Días" color="text-success" />
          <FooterBadge text="Acceso Vitalicio" color="text-amber-600" bg="bg-amber-50" />
        </div>
        <p className="text-[10px] text-muted-foreground">© 2026 Colección Bíblica Infantil. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

function FooterBadge({ text, color = "text-primary", bg = "bg-white" }: { text: string; color?: string; bg?: string }) {
  return (
    <span className={`text-[10px] font-black px-3 py-1 rounded-full border border-border ${color} ${bg}`}>
      {text}
    </span>
  );
}

function PricingFeature({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3 text-sm">
      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5">
        <CircleCheckBig className="w-3.5 h-3.5 text-success" />
      </div>
      <span className="font-bold text-foreground/90">{text}</span>
    </li>
  );
}

function BonusFeature({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3 text-sm">
      <Gift className="w-4 h-4 shrink-0 text-amber-500" />
      <span className="font-bold text-foreground/90">{text}</span>
    </li>
  );
}

function GuaranteeCard({ title, days, color, icon: Icon }: { title: string; days: string; color: string; icon: LucideIcon }) {
  return (
    <div className="border-2 rounded-2xl p-4 flex flex-col items-center text-center gap-3 shadow-sm bg-white">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center">
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div>
        <p className={`text-[9px] font-black uppercase tracking-widest mb-0.5 ${color}`}>{title}</p>
        <p className="text-sm font-black leading-tight text-foreground">
          <span className={color}>{days}</span> de<br />Garantía Total
        </p>
      </div>
      <p className="text-[10px] leading-relaxed text-muted-foreground">
        ¿No quedó satisfecha? <span className={`font-black ${color}`}>Reembolso 100%</span> sin cuestionamientos.
      </p>
      <div className={`w-full text-[9px] font-black py-1.5 rounded-xl uppercase tracking-wider ${color}`}>
        ✓ Compra sin riesgo
      </div>
    </div>
  );
}

export function FAQ() {
  const faqs = [
    {
      q: "¿Como recibo o material?",
      a: "Le llega de una a su correo apenas se confirme el pago. Es digital, lo descarga y listo."
    },
    {
      q: "¿Sirve para niños de qué edad?",
      a: "Está pensado para pelados de todas las edades, desde los más chiquiticos hasta los más grandes de la escuela dominical."
    },
    {
      q: "¿El pago es seguro?",
      a: "¡Más que seguro! Usamos plataformas con toda la seguridad para que no tenga ningún complique."
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-black text-center mb-10 text-foreground">
          Preguntas <span className="text-primary">Frecuentes</span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-2xl p-6 bg-muted/30">
              <h3 className="font-bold text-base mb-2 text-foreground">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}