import { LucideIcon, Play, CircleCheckBig, Zap, RotateCcw, BookOpen, Users, Star, Gift, ChevronDown, Shield, Lock, ThumbsUp, Award } from "lucide-react";

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
            
            <div className="relative aspect-[9/16] rounded-[26px] overflow-hidden bg-black">
              <div className="w-full h-full" dangerouslySetInnerHTML={{ 
                __html: `<wistia-player media-id="zwnzq9nuy8" aspect="0.5625"></wistia-player>` 
              }} />
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[78px] h-[22px] bg-black rounded-full z-10 pointer-events-none" />
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

export function WhyChoose() {
  return (
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3 tracking-wide uppercase text-primary">
            Por que escolher?
          </span>
          <h2 className="text-2xl md:text-3xl font-black mb-3 text-foreground">
            Por Que Escolher a <span className="text-primary">Coleção Bíblica Infantil?</span>
          </h2>
          <p className="max-w-xl mx-auto text-sm leading-relaxed text-muted-foreground">
            Descubra por que professoras, líderes e mães cristãs estão usando este material para ensinar a Palavra de Deus com mais leveza e criatividade.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <WhyCard 
            icon={Users} 
            title="Ideal para Ministério Infantil" 
            desc="Atividades pensadas para Escola Dominical, cultos infantis e ensino cristão em casa."
            gradient="from-blue-500 to-blue-700"
          />
          <WhyCard 
            icon={BookOpen} 
            title="Fundamentado na Palavra" 
            desc="Conteúdo baseado em histórias e princípios bíblicos para fortalecer valores cristãos."
            gradient="from-indigo-500 to-blue-700"
          />
          <WhyCard 
            icon={CircleCheckBig} 
            title="Pronto para Imprimir" 
            desc="Material organizado e fácil de aplicar, sem precisar preparar nada do zero."
            gradient="from-cyan-500 to-blue-700"
          />
          <WhyCard 
            icon={Star} 
            title="Ensino Leve e Envolvente" 
            desc="Dinâmicas e atividades que tornam o aprendizado bíblico mais divertido e participativo."
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
          Bônus exclusivos
        </span>
        <h2 className="text-2xl md:text-3xl font-black mb-2 text-foreground">
          Receba <span className="text-primary">3 Bônus Incríveis</span> de Graça!
        </h2>
        <p className="mb-10 text-sm max-w-xl mx-auto text-muted-foreground">
          Materiais extras que vão transformar suas aulas em experiências inesquecíveis
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <BonusCard 
            index="01" 
            title="Potinho da Oração Infantil" 
            desc="Modelos prontos para incentivar o hábito da oração diária de forma simples e prática."
            oldPrice="R$ 19,90"
            img="/bonus-1.png"
          />
          <BonusCard 
            index="02" 
            title="Livro de Colorir Cristão" 
            desc="Ilustrações bíblicas para colorir e reforçar os ensinamentos de maneira criativa."
            oldPrice="R$ 27,00"
            img="/bonus-2.png"
          />
          <BonusCard 
            index="03" 
            title="Jogos Bíblicos Educativos" 
            desc="Atividades interativas para tornar o aprendizado bíblico mais leve e divertido."
            oldPrice="R$ 29,90"
            img="/bonus-3.png"
          />
        </div>

        <div className="rounded-2xl border-2 inline-flex flex-col items-center gap-1 px-10 py-4 mb-8 border-border">
          <p className="text-xs uppercase tracking-wide font-bold text-foreground">Total em Bônus</p>
          <p className="text-2xl font-black line-through text-destructive">R$ 76,80</p>
          <p className="text-lg font-black text-success">Hoje: Completamente GRÁTIS</p>
        </div>

        <div className="block">
          <a href="#oferta">
            <button className="text-white text-sm px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform border-none cursor-pointer bg-success hover:opacity-90">
              LIBERAR BÔNUS AGORA
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
        <span className="text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-widest text-primary">BÔNUS {index}</span>
        <img alt={title} className="w-full rounded-xl mb-5 aspect-video object-cover shadow-md" src={img} />
        <h3 className="font-bold text-base mb-2 leading-snug text-foreground">{title}</h3>
        <p className="text-sm leading-relaxed mb-4 flex-1 text-muted-foreground">{desc}</p>
        <span className="text-xs font-semibold px-3 py-1 rounded-full text-primary">
          Valor: <span className="line-through font-semibold text-destructive">{oldPrice}</span> · <span className="font-black">GRÁTIS</span>
        </span>
      </div>
    </div>
  );
}

export function Author() {
  return (
    <section className="py-16 px-4 bg-muted">
      <div className="max-w-lg mx-auto">
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-8 h-[1px] bg-border" />
          <span className="text-[11px] font-black uppercase tracking-widest text-primary">Sobre a Autora</span>
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
            <p className="text-xs font-bold text-center mb-5 text-primary uppercase tracking-tight">Educadora Cristã e Líder de Ministério Infantil</p>
            <div className="space-y-3 w-full">
              <AuthorPoint text="Com anos de experiência no ensino bíblico infantil, Ana Cristina dedica sua caminhada a ajudar crianças a crescerem na fé desde cedo." />
              <AuthorPoint text="Ao longo do tempo, percebeu a dificuldade que muitas professoras, líderes e mães enfrentam ao preparar aulas envolventes e fundamentadas na Palavra de Deus." />
              <AuthorPoint text="Foi a partir dessa necessidade que nasceu a Coleção Bíblica Infantil, reunindo mais de 750 atividades bíblicas prontas para imprimir e aplicar com facilidade." />
              <div className="border-l-2 border-amber-400 bg-amber-50 rounded-r-xl pl-3 pr-3 py-2.5">
                <p className="text-xs leading-relaxed text-amber-900">
                  <span className="font-black">Seu propósito é claro: Ensinar a Palavra de Deus de forma leve, criativa e significativa</span>, fortalecendo valores cristãos na vida das crianças.
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
          <span className="font-black text-lg tracking-tight text-foreground">Coleção Bíblica Infantil</span>
        </div>
        <p className="text-sm mb-6 leading-relaxed text-muted-foreground">
          Transformando o <span className="font-bold px-1.5 py-0.5 rounded-md text-primary bg-primary/5">aprendizado bíblico infantil</span>
        </p>
        <div className="h-px w-full mb-5 bg-border" />
        <div className="flex justify-center gap-3 flex-wrap mb-6">
          <FooterBadge text="+750 Atividades" />
          <FooterBadge text="Garantia 14 Dias" color="text-success" />
          <FooterBadge text="Acesso Vitalício" color="text-amber-600" bg="bg-amber-50" />
        </div>
        <p className="text-[10px] text-muted-foreground">© 2026 Coleção Bíblica Infantil. Todos os direitos reservados.</p>
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