import { LucideIcon, Play, CircleCheckBig, Zap, RotateCcw, BookOpen, Users, Star, Gift, ChevronDown, Shield, Lock } from "lucide-react";

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

export function WhatYouWillReceive() {
  return (
    <section className="py-16 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          O Que Você Vai <span className="text-primary">Receber</span>
        </h2>
        <p className="text-sm mb-10 text-muted-foreground">Tudo o que você precisa para ensinar a Bíblia de forma criativa e sem esforço</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard icon={BookOpen} title="+750 Atividades Bíblicas" desc="Dinâmicas, jogos, histórias e atividades prontas para aplicar." />
          <FeatureCard icon={Users} title="Ideal para Ministério Infantil" desc="Perfeito para professoras, líderes e mães cristãs." />
          <FeatureCard icon={Zap} title="Acesso Imediato após a compra" desc="Material liberado automaticamente, sem espera." />
          <FeatureCard icon={Star} title="Uso Sem Limites para sempre" desc="Imprima e utilize sempre que precisar." />
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
          Escolha seu pacote
        </span>
        <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          Temos <span className="text-primary">Dois Pacotes.</span> Escolha com Sabedoria!
        </h2>
        <p className="text-sm mb-10 text-muted-foreground">Acesso imediato após a compra. Sem mensalidade.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Essential Package */}
          <div className="rounded-2xl border-2 overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-all bg-white border-border">
            <div className="px-6 pt-6 pb-5 text-center border-b">
              <h3 className="text-2xl font-black tracking-tight uppercase mb-3 text-primary">Pacote Essencial</h3>
              <span className="line-through text-sm font-medium text-destructive">De R$ 49,90</span>
              <div className="text-3xl font-black mt-1 text-success">R$ 10,00</div>
              <p className="text-xs mt-1 text-muted-foreground">pagamento único</p>
              <p className="text-xs font-bold mt-2 mb-3 text-success">Economize R$ 39,90!</p>
            </div>
            <div className="px-6 py-4 flex-1">
              <ul className="text-left space-y-3 mb-6">
                <PricingFeature text="+375 Atividades Bíblicas Prontas para Imprimir" />
                <PricingFeature text="Acesso imediato e vitalício" />
                <PricingFeature text="Enviamos pelo E-mail e Whatsapp" />
                <PricingFeature text="Garantia de 7 Dias" />
              </ul>
            </div>
            <div className="px-6 pb-6">
              <button className="w-full rounded-full font-bold py-3 border-2 transition-all cursor-pointer text-sm bg-primary border-primary text-white hover:opacity-90">
                Quero o Essencial
              </button>
              <div className="mt-4 rounded-xl px-4 py-3 text-center bg-primary/5">
                <p className="text-[11px] font-extrabold tracking-wide uppercase mb-1.5 text-primary">
                  Ainda dá tempo de levar a melhor opção!
                </p>
                <p className="text-[11px] font-semibold leading-snug text-foreground">
                  O <strong className="font-extrabold text-primary">Pacote Completo</strong> inclui mais <strong className="font-extrabold text-primary">atividades</strong>, <strong className="font-extrabold text-primary">atualizações</strong> e os <strong className="font-extrabold text-primary">3 bônus exclusivos</strong>.
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
              MAIS VENDIDO
            </div>
            <div className="px-6 pt-6 pb-5 text-center border-b">
              <h3 className="text-2xl font-black tracking-tight uppercase mb-3 text-primary">Pacote Completo</h3>
              <span className="line-through text-sm font-medium text-destructive">De R$ 126,70</span>
              <div className="text-3xl font-black mt-1 text-success">R$ 59,90</div>
              <p className="text-xs mt-1 text-muted-foreground">pagamento único</p>
              <p className="text-xs font-bold mt-2 mb-3 text-success">Economize R$ 66,80!</p>
            </div>
            <div className="px-6 py-4 flex-1">
              <ul className="text-left space-y-3 mb-6">
                <PricingFeature text="+750 Atividades Bíblicas Prontas para Imprimir" />
                <PricingFeature text="Atualizações Semanais" />
                <PricingFeature text="Acesso imediato e vitalício" />
                <PricingFeature text="Enviamos pelo E-mail e Whatsapp" />
                <PricingFeature text="Garantia de 14 Dias" />
              </ul>
              <p className="text-sm font-black text-center tracking-wide mt-0 mb-6 text-primary">BÔNUS EXCLUSIVOS</p>
              <ul className="text-left space-y-3 mb-4">
                <BonusFeature text="Bônus: Potinho da Oração Infantil" />
                <BonusFeature text="Bônus: Livro de Colorir Cristão" />
                <BonusFeature text="Bônus: Jogos Bíblicos Educativos" />
              </ul>
            </div>
            <div className="px-6 pb-6">
              <a href="https://pay.wiapy.com/kWefAj46uw" target="_blank" rel="noopener noreferrer" className="block w-full rounded-full font-bold py-3 border-2 text-white text-sm text-center hover:opacity-90 transition-all bg-primary border-primary">
                Quero o Completo
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-10 w-full max-w-lg mx-auto">
          <div className="text-center mb-5">
            <div className="inline-flex items-center gap-2 mb-1">
              <RotateCcw className="w-4 h-4 text-primary" />
              <span className="text-[11px] font-black uppercase tracking-widest text-primary">Garantia Incondicional</span>
            </div>
            <p className="text-base font-black text-foreground">Satisfação garantida ou seu dinheiro de volta</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <GuaranteeCard title="Pacote Essencial" days="7 Dias" color="text-success" icon={Shield} />
            <GuaranteeCard title="Pacote Completo" days="14 Dias" color="text-primary" icon={Shield} />
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 border rounded-xl py-2.5 px-4 bg-white/50">
            <Lock className="w-3 h-3 shrink-0 text-muted-foreground" />
            <p className="text-[9px] text-center leading-snug text-muted-foreground">
              Basta enviar um e-mail dentro do prazo de garantia e reembolsamos <span className="font-black text-foreground">100%</span> do valor pago, <span className="font-black text-foreground">sem perguntas</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
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
          <span className={color}>{days}</span> de<br />Garantia Total
        </p>
      </div>
      <p className="text-[10px] leading-relaxed text-muted-foreground">
        Não ficou satisfeita? <span className={`font-black ${color}`}>Reembolso 100%</span> sem questionamentos.
      </p>
      <div className={`w-full text-[9px] font-black py-1.5 rounded-xl uppercase tracking-wider ${color}`}>
        ✓ Compra sem risco
      </div>
    </div>
  );
}