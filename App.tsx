
import React, { useState, useCallback } from 'react';
import { 
  MessageCircle, 
  Instagram, 
  MapPin, 
  CheckCircle2, 
  Calendar, 
  Heart, 
  ShieldCheck, 
  Maximize2,
  X
} from 'lucide-react';

// --- Constants ---
const EXPERT_NAME = "Natália Mincato";
const EXPERT_TITLE = "Dentista - Ortodontia e Clínica Geral";
const WHATSAPP_URL = "https://wa.me/message/46RLO7UM6HHSI1";
const INSTAGRAM_URL = "https://instagram.com/dra.nataliamk";
const ADDRESS = "Rua Tupi, 329. Rio Branco - Novo Hamburgo";

const IMAGES = {
  // Ordem invertida conforme solicitado
  hero: "https://i.imgur.com/VWCkXcm.png",
  authority: "https://i.imgur.com/AWO0DZ3.png",
  results: [
    { url: "https://i.imgur.com/IdJDtD4.png", title: "Transformação de Sorriso" },
    { url: "https://i.imgur.com/7GlU2Qh.png", title: "Harmonia Facial" },
    { url: "https://i.imgur.com/q7epdbY.png", title: "Correção Ortodôntica" },
    { url: "https://i.imgur.com/WWPuxCS.png", title: "Resultado Final" },
  ],
  lifestyle: [
    { url: "https://i.imgur.com/Z5wsx09.png", title: "Ortodontia de Coração" },
    { url: "https://i.imgur.com/SKbUd8m.png", title: "Cuidado Pessoal" },
    { url: "https://i.imgur.com/7Q2TjQr.png", title: "Bastidores do Consultório" },
    { url: "https://i.imgur.com/6vOhvOk.png", title: "Atendimento Humanizado" },
    { url: "https://i.imgur.com/bojHlYz.png", title: "Equipamentos de Ponta" },
  ]
};

// --- Components ---

const Lightbox: React.FC<{ imageUrl: string; onClose: () => void }> = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={onClose}>
      <button className="absolute top-6 right-6 text-white" onClick={onClose} aria-label="Fechar">
        <X size={32} />
      </button>
      <img 
        src={imageUrl} 
        alt="Visualização ampliada" 
        className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

const CTAButton: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = "" }) => (
  <a 
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold py-5 px-8 rounded-full shadow-xl transition-all hover:scale-105 active:scale-95 hover:bg-[#128C7E] w-full text-center ${className}`}
  >
    <MessageCircle size={24} />
    <span className="text-lg uppercase tracking-wider">{children}</span>
  </a>
);

const FloatingWhatsApp: React.FC = () => (
  <a 
    href={WHATSAPP_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-[60] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-90 animate-bounce"
    aria-label="Falar no WhatsApp"
  >
    <MessageCircle size={32} fill="white" className="text-white" />
    <span className="absolute -top-1 -right-1 flex h-4 w-4">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
      <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
    </span>
  </a>
);

const Section: React.FC<{ children: React.ReactNode; className?: string; id?: string }> = ({ children, className = "", id }) => (
  <section id={id} className={`py-16 px-6 ${className}`}>
    <div className="max-w-lg mx-auto">
      {children}
    </div>
  </section>
);

const App: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openLightbox = useCallback((url: string) => {
    setActiveImage(url);
  }, []);

  return (
    <div className="font-sans overflow-x-hidden text-premium-dark">
      {/* Botão Flutuante */}
      <FloatingWhatsApp />

      {/* 1. HEROI - Alinhamento Centralizado */}
      <section className="relative min-h-screen flex flex-col pt-12 pb-6">
        <div className="max-w-lg mx-auto px-6 flex-1 flex flex-col items-center text-center">
          <header className="mb-10">
            <h1 className="font-serif text-5xl md:text-6xl leading-tight mb-6">
              Eu sou a <br/>
              <span className="italic text-premium-gold font-medium">Natália Mincato.</span>
            </h1>
            <p className="text-xl text-gray-600 font-light leading-relaxed max-w-[320px] mx-auto">
              Técnica e acolhimento para transformar seu sorriso e sua autoestima.
            </p>
          </header>

          <div className="relative mb-12 w-full max-w-[340px] aspect-[3/4]">
            <div className="absolute inset-0 bg-premium-gold/10 rounded-[2rem] rotate-3 translate-y-4 translate-x-2"></div>
            <img 
              src={IMAGES.hero} 
              alt="Dra. Natália Mincato" 
              className="relative rounded-[2rem] object-cover w-full h-full shadow-2xl z-10 border-4 border-white"
            />
          </div>

          <div className="w-full mt-auto mb-8">
            <CTAButton>
              Agendar consulta gratuita
            </CTAButton>
            <p className="text-sm text-gray-500 mt-3 font-medium">
              *Primeira avaliação sem compromisso
            </p>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU - Alinhamento Centralizado */}
      <Section className="bg-white">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="relative w-full max-w-[320px]">
            <img 
              src={IMAGES.authority} 
              alt="Autoridade Dra. Natália" 
              className="rounded-2xl w-full aspect-square object-cover grayscale-[10%] brightness-105 shadow-xl"
            />
            <div className="absolute -bottom-4 -right-2 bg-premium-gold px-5 py-3 rounded-xl text-white shadow-xl rotate-3">
              <span className="font-serif italic text-xl">Ortodontia de ❤️</span>
            </div>
          </div>
          
          <div className="mt-4">
            <h2 className="font-serif text-3xl mb-6">Paixão pelo Sorriso</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Acredito que um tratamento odontológico vai muito além de alinhar dentes. É sobre devolver a segurança de sorrir em cada momento especial da sua vida.
            </p>
            <ul className="space-y-4 text-left inline-block">
              {[
                "Atendimento totalmente focado em você",
                "Tecnologias modernas e confortáveis",
                "Diagnóstico honesto e planejado",
                "Ambiente acolhedor e exclusivo"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-premium-gold flex-shrink-0 mt-1" size={18} />
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-premium-bg">
        <h2 className="font-serif text-3xl mb-2 text-center">Resultados Reais</h2>
        <p className="text-center text-gray-500 mb-10">Transformações reais planejadas por mim</p>
        
        <div className="grid grid-cols-2 gap-4">
          {IMAGES.results.map((img, i) => (
            <div 
              key={i} 
              className="relative group cursor-pointer aspect-square rounded-2xl overflow-hidden shadow-md bg-white p-1"
              onClick={() => openLightbox(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-premium-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="text-white" size={24} />
              </div>
            </div>
          ))}
        </div>
        <p className="text-[10px] text-gray-400 text-center mt-8 italic uppercase tracking-widest">
          *Resultados podem variar conforme cada caso clínico.
        </p>
      </Section>

      {/* 4. DIFERENCIAIS */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl mb-12 text-center">Por que confiar em mim?</h2>
        <div className="grid gap-5">
          {[
            { icon: <Heart className="text-red-400" />, title: "Ortodontia de Coração", desc: "Cada sorriso é tratado com amor e dedicação absoluta." },
            { icon: <ShieldCheck className="text-blue-500" />, title: "Avaliação Honesta", desc: "Transparência total sobre o que seu sorriso realmente precisa." },
            { icon: <Calendar className="text-premium-gold" />, title: "Agilidade no WhatsApp", desc: "Facilidade e rapidez para marcar seus horários." },
            { icon: <CheckCircle2 className="text-green-500" />, title: "Acompanhamento Único", desc: "Você é atendido sempre por mim, do início ao fim." },
          ].map((card, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 items-center">
              <div className="bg-white p-3 rounded-xl shadow-sm flex-shrink-0">
                {card.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg text-premium-dark">{card.title}</h3>
                <p className="text-gray-600 text-sm leading-tight">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="bg-premium-dark text-white text-center">
        <h2 className="text-2xl font-light mb-8 italic">
          Ainda tem dúvidas sobre o seu caso? <br/>
          <span className="font-serif text-3xl not-italic text-premium-gold block mt-2">Vamos conversar agora.</span>
        </h2>
        <CTAButton className="mb-4">
          Tirar dúvidas no WhatsApp
        </CTAButton>
        <p className="text-gray-400 text-xs uppercase tracking-widest">Resposta personalizada para você</p>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <h2 className="font-serif text-3xl mb-12 text-center">Sua primeira consulta</h2>
        <div className="space-y-10">
          {[
            { step: "01", title: "Contato Inicial", desc: "Clique no botão e nos envie uma mensagem. Respondemos rápido!" },
            { step: "02", title: "Agendamento", desc: "Escolhemos juntos o melhor horário para você vir ao consultório." },
            { step: "03", title: "Avaliação Gratuita", desc: "Analisamos seu caso detalhadamente e criamos seu plano de tratamento." },
          ].map((item, i) => (
            <div key={i} className="flex gap-6 relative group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full border-2 border-premium-gold flex items-center justify-center text-premium-gold font-bold bg-white z-10 group-hover:bg-premium-gold group-hover:text-white transition-colors">
                  {item.step}
                </div>
                {i < 2 && <div className="absolute h-full w-[1px] bg-gray-200 top-10 left-5"></div>}
              </div>
              <div className="pb-4">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <Section className="bg-premium-bg !px-0">
        <h2 className="font-serif text-3xl mb-8 text-center px-6">Bastidores e Cuidado</h2>
        <div className="flex overflow-x-auto gap-4 pb-6 px-6 scrollbar-hide snap-x">
          {IMAGES.lifestyle.map((img, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 w-64 snap-center cursor-pointer"
              onClick={() => openLightbox(img.url)}
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-3">
                <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
              </div>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">{img.title}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <Section className="bg-white text-center pb-24">
        <div className="bg-premium-gold/5 p-8 rounded-[2.5rem] border border-premium-gold/20 shadow-inner">
          <h2 className="font-serif text-4xl mb-6">Pronto para o seu novo sorriso?</h2>
          <p className="text-gray-600 mb-10 text-lg leading-relaxed">
            Mude hoje a forma como você se vê no espelho com um atendimento que prioriza você.
          </p>
          <CTAButton>
            Garantir minha vaga gratuita
          </CTAButton>
          <div className="mt-8 flex flex-col items-center gap-2">
            <div className="flex gap-1">
              {[1,2,3,4,5].map(s => <span key={s} className="text-premium-gold text-lg">★</span>)}
            </div>
            <p className="text-[10px] text-gray-400 uppercase tracking-tighter font-bold">Experiência Premium 5 Estrelas</p>
          </div>
        </div>
      </Section>

      {/* 9. RODAPE */}
      <footer className="bg-premium-dark text-white py-14 px-6">
        <div className="max-w-lg mx-auto flex flex-col items-center gap-10">
          <div className="text-center">
            <span className="font-signature text-5xl text-premium-gold block mb-3">
              Natália Mincato
            </span>
            <p className="text-gray-400 text-[10px] tracking-[0.3em] uppercase font-medium">{EXPERT_TITLE}</p>
          </div>

          <div className="flex flex-col gap-5 text-gray-300 text-center items-center">
            <div className="flex items-center justify-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <MapPin size={16} className="text-premium-gold" />
              <span className="text-xs">{ADDRESS}</span>
            </div>
            <a 
              href={INSTAGRAM_URL} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center gap-2 text-premium-gold hover:text-white transition-colors font-semibold"
            >
              <Instagram size={18} />
              <span>@dra.nataliamk</span>
            </a>
          </div>

          <div className="pt-8 border-t border-white/5 w-full text-center">
            <p className="text-[9px] text-gray-600 uppercase tracking-widest font-bold">
              © 2024 • Design Premium para Profissionais
            </p>
          </div>
        </div>
      </footer>

      {/* Lightbox Overlay */}
      {activeImage && <Lightbox imageUrl={activeImage} onClose={() => setActiveImage(null)} />}
    </div>
  );
};

export default App;
