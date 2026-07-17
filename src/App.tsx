import React from 'react';
import { ShieldCheck, FileCode2, Image, Type, RefreshCw, Layers, ArrowUpCircle } from 'lucide-react';

export default function App() {
  const cssFiles = [
    'all.min.css',
    'bootstrap-icons.min.css',
    'font-face.css',
    'fonts.css',
    'sweetalert2.min.css',
    'swiper-bundle.min.css'
  ];

  const imageFiles = [
    'whatsapp.svg',
    'bg-desk.20260630052839.png'
  ];

  const fontFamilies = [
    'Aspekta (Multiple Weights)',
    'Libre Caslon Condensed (Bold, Italic, Medium, Regular, SemiBold)',
    'Maggies',
    'Morganite (Thin, Light, Medium, Bold, ExtraBold, Black & Italics)',
    'Thunder (Bold, HC, LC & Italics)'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans antialiased selection:bg-teal-500 selection:text-slate-950">
      {/* Header */}
      <header className="border-b border-slate-900 bg-slate-950/80 backdrop-blur-md sticky top-0 z-10 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-teal-500/10 flex items-center justify-center border border-teal-500/30">
              <Layers className="h-5 w-5 text-teal-400" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Vercel & AI Studio Workspace
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1 text-xs font-semibold text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Ready & Online
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-6 py-12 flex-1 w-full grid md:grid-cols-3 gap-8 items-start">
        {/* Intro/Status Card */}
        <div className="md:col-span-2 space-y-6">
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-8 space-y-4">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
              Seu ambiente está pronto para rodar! 🚀
            </h1>
            <p className="text-slate-400 leading-relaxed text-base">
              Identificamos que você removeu o arquivo de entrada padrão para subir seus próprios arquivos. 
              O servidor de desenvolvimento do AI Studio já está configurado e ativo. Todos os seus arquivos estáticos 
              e fontes foram processados com sucesso.
            </p>
            <div className="bg-slate-950/60 rounded-xl p-5 border border-slate-900 flex items-start gap-4">
              <ShieldCheck className="h-6 w-6 text-teal-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <h4 className="font-semibold text-white text-sm">Pronto para Hospedar</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Você pode jogar seus arquivos de código (como <code className="bg-slate-900 text-teal-400 px-1 py-0.5 rounded font-mono">index.html</code>, 
                  arquivos JavaScript, etc.) diretamente no explorador do AI Studio à esquerda. Eles substituirão este painel de status automaticamente!
                </p>
              </div>
            </div>
          </div>

          {/* Guidelines / Next Steps */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-8 space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <ArrowUpCircle className="h-5 w-5 text-teal-400" />
              Como carregar o seu site:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-slate-950/40 p-5 rounded-xl border border-slate-900 space-y-2">
                <span className="text-teal-400 text-xs font-bold font-mono tracking-wider uppercase">Passo 1</span>
                <h4 className="font-semibold text-white text-sm">Arraste seus Arquivos</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Use o painel lateral do AI Studio para fazer o upload do seu arquivo <code className="text-teal-400 font-mono">index.html</code> principal e arquivos de script.
                </p>
              </div>
              <div className="bg-slate-950/40 p-5 rounded-xl border border-slate-900 space-y-2">
                <span className="text-emerald-400 text-xs font-bold font-mono tracking-wider uppercase">Passo 2</span>
                <h4 className="font-semibold text-white text-sm">Visualização Instantânea</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Assim que o seu <code className="text-emerald-400 font-mono">index.html</code> for enviado, ele passará a ser servido automaticamente no frame de visualização ao lado.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Assets Panel */}
        <div className="space-y-6">
          {/* Section Header */}
          <div className="space-y-1">
            <h3 className="text-sm font-bold text-slate-400 tracking-wider uppercase">Ativos Detectados</h3>
            <p className="text-xs text-slate-500">Arquivos carregados com sucesso no explorador</p>
          </div>

          {/* CSS Card */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FileCode2 className="h-5 w-5 text-teal-400" />
                <h4 className="font-semibold text-white text-sm">Estilos (CSS)</h4>
              </div>
              <span className="text-xs bg-teal-400/10 text-teal-400 px-2.5 py-0.5 rounded-full font-bold">
                {cssFiles.length}
              </span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-slate-400 border-t border-slate-900/60 pt-3">
              {cssFiles.map((file, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-950/40 px-2 py-1.5 rounded border border-slate-900/30">
                  <span className="text-teal-500/50">#</span>
                  <span className="truncate">{file}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Fonts Card */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Type className="h-5 w-5 text-violet-400" />
                <h4 className="font-semibold text-white text-sm">Fontes Tipográficas</h4>
              </div>
              <span className="text-xs bg-violet-400/10 text-violet-400 px-2.5 py-0.5 rounded-full font-bold">
                {fontFamilies.length}
              </span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400 border-t border-slate-900/60 pt-3">
              {fontFamilies.map((family, idx) => (
                <li key={idx} className="bg-slate-950/40 px-3 py-2 rounded border border-slate-900/30 leading-snug">
                  <span className="font-medium text-slate-200 block mb-0.5">{family.split(' (')[0]}</span>
                  <span className="text-[10px] text-slate-500">{family.split(' (')[1]?.replace(')', '') || 'Regular'}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Images Card */}
          <div className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Image className="h-5 w-5 text-emerald-400" />
                <h4 className="font-semibold text-white text-sm">Imagens & Vetores</h4>
              </div>
              <span className="text-xs bg-emerald-400/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-bold">
                {imageFiles.length}
              </span>
            </div>
            <ul className="space-y-2 text-xs font-mono text-slate-400 border-t border-slate-900/60 pt-3">
              {imageFiles.map((file, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-950/40 px-2 py-1.5 rounded border border-slate-900/30">
                  <span className="text-emerald-500/50">#</span>
                  <span className="truncate">{file}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/50 px-6 py-6 text-center text-xs text-slate-500">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} AI Studio Workspace. Pronto para servir sua aplicação.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors cursor-default">Fácil Implantação</span>
            <span className="text-slate-800">|</span>
            <span className="hover:text-slate-400 transition-colors cursor-default">Suporte a Vercel</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
