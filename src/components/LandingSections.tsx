import { LucideIcon, Play, CircleCheckBig, Zap, RotateCcw } from "lucide-react";

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 py-2.5 px-4 text-center bg-primary">
      <p className="text-white text-sm md:text-base font-bold drop-shadow-sm">
        🚨 OFERTA VÁLIDA SOMENTE HOJE - 25/04/2026
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="pt-20 pb-16 px-4 bg-secondary">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full mb-5 bg-primary text-white">
          😵‍💫 Crianças agitadas, sem foco e você sem tempo pra planejar?
        </span>
        <h1 className="text-2xl md:text-4xl font-black leading-snug mb-6 tracking-tight text-foreground">
          <span className="text-primary">+750 Atividades Bíblicas Prontas para Imprimir</span> que Mantêm as Crianças Calmas, Atentas e Engajadas
        </h1>
        <p className="text-sm md:text-base mb-8 max-w-xl mx-auto leading-relaxed text-muted-foreground">
          Tudo pronto pra usar hoje <span className="font-bold text-foreground">sem estresse</span> e sem perder tempo planejando.
        </p>
        
        <div className="mx-auto mb-8 w-full max-w-xs">
          <div className="relative p-3 rounded-[38px] bg-gradient-to-br from-zinc-800 to-black shadow-2xl ring-2 ring-inset ring-zinc-700/50">
            {/* Phone Frame Elements */}
            <div className="absolute left-[-2px] top-[22%] w-[3px] height-[26px] bg-zinc-900 rounded-l-sm" />
            <div className="absolute left-[-2px] top-[32%] w-[3px] height-[44px] bg-zinc-900 rounded-l-sm" />
            <div className="absolute left-[-2px] top-[44%] w-[3px] height-[44px] bg-zinc-900 rounded-l-sm" />
            <div className="absolute right-[-2px] top-[30%] w-[3px] height-[64px] bg-zinc-900 rounded-r-sm" />
            
            <div className="relative aspect-[9/16] rounded-[26px] overflow-hidden bg-black cursor-pointer group">
              <video 
                src="/vsl.mp4" 
                poster="https://images.unsplash.com/photo-1512011516432-118d22744033?q=80&w=800&auto=format&fit=crop" 
                playsInline 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[78px] h-[22px] bg-black rounded-full z-10 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center bg-black/25 group-hover:bg-black/40 transition-colors pointer-events-none">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-primary ml-1 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#oferta">
          <button className="text-base px-7 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform cursor-pointer bg-primary text-white border-none">
            Quero Acesso Imediato com Desconto
          </button>
        </a>

        <div className="flex flex-wrap justify-center gap-3 mt-7">
          <TrustBadge icon={CircleCheckBig} text="Compra 100% Segura" iconColor="text-success" />
          <TrustBadge icon={Zap} text="Acesso Imediato" iconColor="text-primary" />
          <TrustBadge icon={RotateCcw} text="Garantia de 14 Dias" iconColor="text-primary" />
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
