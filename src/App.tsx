/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Section from "./components/Section";
import DashboardSection from "./components/DashboardSection";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-purple/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/20 blur-[120px]" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-6xl mx-auto space-y-32 md:space-y-64">
        {/* Hero & About Section */}
        <Hero />

        {/* Skills Section */}
        <Section className="!py-0">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white/90">
              <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Tecnologias</span>
            </h2>
            <p className="text-white/40 mt-4">Minha stack e ferramentas de trabalho</p>
          </div>
          <Skills />
        </Section>

        {/* Dashboard Demonstrations (The Lab) */}
        <Section className="space-y-48 md:space-y-96">
          <div className="text-center mb-16 md:mb-32">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              Conheça alguns dos meus <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">projetos</span>
            </h2>
            <p className="text-white/40 text-lg">Projetos reais e experimentações em dados</p>
          </div>

          <DashboardSection 
            title="Monitoramento de Logística Internacional"
            description="Engenharia de dados aplicada ao rastreamento de operações aéreas e marítimas com foco em métricas de performance."
            image="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnVoZ2tieXljeWRpN284aHVmbnA3bmRhZjF4a2lyMG4wcWRnZXdpbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5EqukBN8EEKiScaq3j/giphy.gif"
          />
          
          <DashboardSection 
            title="Otimização de Operações Logísticas"
            description="Análise de distribuição e fluxos operacionais para redução de gargalos logísticos."
            image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXhmYWN1N2MwZ3NhdW8xeWNpaW54MDJyandrdm9pbGR1dGY1a212dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/5hl9b9fg3JLqiXr0w7/giphy.gif"
            reversed
          />

          <DashboardSection 
            title="Gestão Inteligente de Inventário"
            description="Sistema de controle de estoque automatizado com alertas de reposição baseados em dados históricos."
            image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExenQzNWE5NzhhemJwcW9ndzM5eWNzbzQ0c2M3YmV0d2lud2dmYzJudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EcdONdIizfJIxiheyk/giphy.gif"
          />

          <DashboardSection 
            title="Dashboard de Fluxo Financeiro"
            description="Visualização estratégica de indicadores financeiros e fluxo de caixa para suporte à tomada de decisão."
            image="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeHdsazJrY3czNXg2Mmd0cWM0bm5mN2h2dnN4c3FyZmRmYWdjbTZvNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YHW7yraKgGs4lC6yfc/giphy.gif"
            reversed
          />
        </Section>

        {/* Contact Section */}
        <Section id="contact" className="text-center pb-4">
          <div className="mb-20">
            <h2 className="text-5xl font-bold tracking-tighter mb-6">
              <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">Contato</span>
            </h2>
          </div>
          
          <div className="glass max-w-3xl mx-auto p-16 rounded-[40px] border border-white/5 space-y-10 bg-white/[0.02]">
            <h2 className="text-5xl font-bold tracking-tight text-white">Vamos conversar?</h2>
            <p className="text-white/40 text-xl max-w-lg mx-auto leading-relaxed">
              Sinta-se à vontade para entrar em contato e iniciarmos uma conversa!
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <a 
                href="https://www.linkedin.com/in/losdn/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] border border-white/5 hover:bg-white/10 transition-all text-white font-medium"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:losdn@outlook.com.br"
                className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/[0.05] border border-white/5 hover:bg-white/10 transition-all text-white font-medium"
              >
                <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <span>losdn@outlook.com.br</span>
              </a>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-4 px-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Lorraine Santos.
          </p>
        </footer>
      </main>
    </div>
  );
}
