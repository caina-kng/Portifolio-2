import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  ArrowUpRight,
  Send,
  Lock,
  Crosshair,
  CheckCircle,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const contactChannels = [
    {
      title: 'GITHUB',
      handle: 'github.com/caina-kng',
      url: 'https://github.com/caina-kng',
      icon: Github,
    },
    {
      title: 'LINKEDIN',
      handle: 'linkedin.com/in/joão-cainã-',
      url: 'https://www.linkedin.com/in/jo%C3%A3o-cain%C3%A3-',
      icon: Linkedin,
    },
    {
      title: 'INSTAGRAM',
      handle: '@og_castrin',
      url: 'https://instagram.com/og_castrin',
      icon: Instagram,
    },
    {
      title: 'E-MAIL',
      handle: 'joaocaina@gmail.com',
      url: 'mailto:joaocaina@gmail.com',
      icon: Mail,
    },
    {
      title: 'LOCALIZAÇÃO',
      handle: 'Brasília — DF, Brasil',
      url: null,
      icon: MapPin,
    },
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.nome.trim()) {
      errs.nome = 'Por favor, preencha seu nome.';
    }
    if (!formData.email.trim()) {
      errs.email = 'Por favor, informe seu e-mail.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Informe um e-mail válido.';
    }
    if (!formData.assunto.trim()) {
      errs.assunto = 'Por favor, informe o assunto.';
    }
    if (!formData.mensagem.trim()) {
      errs.mensagem = 'Por favor, escreva sua mensagem.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      // Construct mailto link fallback so the user can send directly via their default email client
      const mailtoUrl = `mailto:joaocaina@gmail.com?subject=${encodeURIComponent(
        `[Portfólio] ${formData.assunto}`
      )}&body=${encodeURIComponent(
        `Olá João,\n\nMeu nome é ${formData.nome} (${formData.email}).\n\n${formData.mensagem}`
      )}`;
      window.location.href = mailtoUrl;
    }
  };

  return (
    <section
      id="contato"
      className="py-20 sm:py-24 bg-[#06090B] relative overflow-hidden"
    >
      {/* Background Subtle Radar Concentric Rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none opacity-20">
        <div className="absolute inset-0 rounded-full border border-[#E5AD08]/40" />
        <div className="absolute inset-16 rounded-full border border-[#E5AD08]/30" />
        <div className="absolute inset-32 rounded-full border border-[#E5AD08]/20" />
        <div className="absolute inset-48 rounded-full border border-[#E5AD08]/15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-[#E5AD08] rounded-full shadow-[0_0_15px_#E5AD08]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-[#E5AD08] tracking-widest uppercase font-bold">
              06 — CONTATO
            </span>
            <div className="w-8 h-[1px] bg-[#E5AD08]/60" />
          </div>
          <h2 className="font-condensed text-4xl sm:text-6xl font-bold tracking-tight uppercase text-[#F4F4F1] mb-3">
            VAMOS CONVERSAR?
          </h2>
          <p className="text-sm sm:text-base text-[#B0B5BB] font-body max-w-2xl leading-relaxed">
            Se quiser trocar uma ideia sobre basquete, tecnologia, Inteligência Artificial, projetos ou oportunidades, entre em contato.{' '}
            <strong className="text-[#E5AD08] font-semibold">
              Vai ser um prazer conversar.
            </strong>
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          
          {/* Left Column: CANAIS DE CONTATO (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-xs text-[#E5AD08] font-bold tracking-widest uppercase">
                CANAIS DE CONTATO
              </span>
              <div className="w-10 h-[1px] bg-[#E5AD08]/40" />
            </div>

            <div className="space-y-3">
              {contactChannels.map((channel) => {
                const IconComponent = channel.icon;
                const ContentWrapper = channel.url ? 'a' : 'div';
                const wrapperProps = channel.url
                  ? {
                      href: channel.url,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'bg-[#0C1014] border border-[rgba(255,255,255,0.10)] hover:border-[#E5AD08] p-4 flex items-center justify-between transition-all duration-200 group cursor-pointer',
                    }
                  : {
                      className:
                        'bg-[#0C1014] border border-[rgba(255,255,255,0.10)] p-4 flex items-center justify-between',
                    };

                return (
                  <ContentWrapper key={channel.title} {...(wrapperProps as any)}>
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded bg-[#10151A] border border-[rgba(255,255,255,0.10)] flex items-center justify-center text-[#E5AD08] group-hover:border-[#E5AD08] transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-bold text-[#F4F4F1] uppercase tracking-wider block group-hover:text-[#E5AD08] transition-colors">
                          {channel.title}
                        </span>
                        <span className="text-xs text-[#737C85] font-mono">
                          {channel.handle}
                        </span>
                      </div>
                    </div>

                    {channel.url && (
                      <ArrowUpRight className="w-4 h-4 text-[#737C85] group-hover:text-[#E5AD08] transition-colors" />
                    )}
                  </ContentWrapper>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0C1014] border border-[rgba(255,255,255,0.10)] p-6 sm:p-8 lg:p-10 shadow-2xl">
            
            {/* Form Header */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(255,255,255,0.08)]">
              <h3 className="font-mono text-sm font-bold text-[#E5AD08] uppercase tracking-widest">
                ENVIE UMA MENSAGEM
              </h3>
              <span className="font-mono text-[10px] text-[#737C85] tracking-widest uppercase flex items-center gap-1.5">
                FORMULÁRIO DIRETO <span className="w-1.5 h-1.5 bg-[#E5AD08] rounded-full animate-pulse" />
              </span>
            </div>

            {submitted ? (
              <div className="py-10 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#E5AD08] mx-auto" />
                <h4 className="font-condensed text-2xl font-bold uppercase text-[#F4F4F1]">
                  Mensagem Pronta para Envio!
                </h4>
                <p className="text-xs sm:text-sm text-[#B0B5BB] font-body max-w-md mx-auto">
                  Seu cliente de e-mail foi acionado com o assunto e mensagem preenchidos. Caso prefira, você também pode enviar diretamente para <span className="text-[#E5AD08] font-mono">joaocaina@gmail.com</span>.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 border border-[#E5AD08] text-[#E5AD08] font-mono text-xs uppercase tracking-wider hover:bg-[#E5AD08] hover:text-[#06090B] transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                {/* Field: Nome */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold text-[#E5AD08] tracking-wider uppercase block">
                    NOME *
                  </label>
                  <input
                    type="text"
                    value={formData.nome}
                    onChange={(e) =>
                      setFormData({ ...formData, nome: e.target.value })
                    }
                    placeholder="Seu nome completo"
                    className="w-full bg-[#10151A] border border-[rgba(255,255,255,0.10)] focus:border-[#E5AD08] px-4 py-3 text-xs sm:text-sm text-[#F4F4F1] placeholder-[#737C85] outline-none transition-colors font-body"
                  />
                  {errors.nome && (
                    <span className="text-[11px] font-mono text-red-400 block">
                      {errors.nome}
                    </span>
                  )}
                </div>

                {/* Field: E-mail */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold text-[#E5AD08] tracking-wider uppercase block">
                    E-MAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-[#10151A] border border-[rgba(255,255,255,0.10)] focus:border-[#E5AD08] px-4 py-3 text-xs sm:text-sm text-[#F4F4F1] placeholder-[#737C85] outline-none transition-colors font-body"
                  />
                  {errors.email && (
                    <span className="text-[11px] font-mono text-red-400 block">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Field: Assunto */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold text-[#E5AD08] tracking-wider uppercase block">
                    ASSUNTO *
                  </label>
                  <input
                    type="text"
                    value={formData.assunto}
                    onChange={(e) =>
                      setFormData({ ...formData, assunto: e.target.value })
                    }
                    placeholder="Sobre o que deseja falar?"
                    className="w-full bg-[#10151A] border border-[rgba(255,255,255,0.10)] focus:border-[#E5AD08] px-4 py-3 text-xs sm:text-sm text-[#F4F4F1] placeholder-[#737C85] outline-none transition-colors font-body"
                  />
                  {errors.assunto && (
                    <span className="text-[11px] font-mono text-red-400 block">
                      {errors.assunto}
                    </span>
                  )}
                </div>

                {/* Field: Mensagem */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs font-bold text-[#E5AD08] tracking-wider uppercase block">
                    MENSAGEM *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) =>
                      setFormData({ ...formData, mensagem: e.target.value })
                    }
                    placeholder="Escreva sua mensagem ou proposta de conversa..."
                    className="w-full bg-[#10151A] border border-[rgba(255,255,255,0.10)] focus:border-[#E5AD08] px-4 py-3 text-xs sm:text-sm text-[#F4F4F1] placeholder-[#737C85] outline-none transition-colors resize-none font-body"
                  />
                  {errors.mensagem && (
                    <span className="text-[11px] font-mono text-red-400 block">
                      {errors.mensagem}
                    </span>
                  )}
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  id="btn-enviar-mensagem"
                  className="w-full py-4 bg-[#E5AD08] hover:bg-[#F5BD18] text-[#06090B] font-mono text-xs sm:text-sm font-bold uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_0_20px_rgba(229,173,8,0.25)] active:scale-[0.99]"
                >
                  <span>ENVIAR MENSAGEM</span>
                  <span className="text-sm">↗</span>
                </button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 pt-2 text-[10px] font-mono text-[#737C85]">
                  <Lock className="w-3 h-3" />
                  <span>Seus dados estão protegidos e não serão compartilhados.</span>
                </div>
              </form>
            )}

          </div>

        </div>

        {/* Section Bottom Technical Bar */}
        <div className="pt-8 border-t border-[rgba(255,255,255,0.10)] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#737C85] tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <Crosshair className="w-4 h-4 text-[#E5AD08]" />
            <span>
              <strong className="text-[#E5AD08]">06</strong> / 06
            </span>
          </div>

          <div>DISCIPLINA PARA EVOLUIR. CURIOSIDADE PARA CONSTRUIR.</div>

          <div>© 2026 • TODOS OS DIREITOS RESERVADOS</div>
        </div>

      </div>
    </section>
  );
};
