import React, { useState } from 'react';
import { Sparkles, Loader2, ArrowRight } from 'lucide-react';
import { generateMarketingCopy } from '../services/geminiService';
import { SectionId } from '../types';

interface AiDemoProps {
  id: string;
}

const AiDemo: React.FC<AiDemoProps> = ({ id }) => {
  const [topic, setTopic] = useState('');
  const [tone, setTone] = useState('Persuasive');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!topic) return;
    setLoading(true);
    const copy = await generateMarketingCopy(topic, tone);
    setResult(copy);
    setLoading(false);
  };

  return (
    <section id={id} className="py-24 bg-gradient-to-b from-primary to-[#050c14] border-y border-white/5 relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/5 blur-3xl rounded-l-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-wide">
              <Sparkles className="w-3 h-3" /> Live Demo
            </div>
            <h2 className="text-4xl font-display font-bold text-white leading-tight">
              Experience Our <br />
              <span className="text-secondary">AI Copywriting Engine</span>
            </h2>
            <p className="text-muted text-lg">
              We build custom AI systems trained on your brand voice. Try a simplified version of our copy generator powered by Google's Gemini Flash model.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                "Instant headline generation",
                "Tone-adjusted messaging",
                "Conversion-focused output"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Card */}
          <div className="flex-1 w-full max-w-lg">
            <div className="bg-[#0f1f30] rounded-2xl border border-white/10 shadow-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-white">YSC Copy Generator</h3>
                <div className="flex gap-1">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Product / Topic</label>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="e.g., Luxury Watch, SaaS Platform, Vegan Coffee..."
                    className="w-full bg-[#08121c] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-secondary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Tone</label>
                  <div className="flex gap-2">
                    {['Persuasive', 'Professional', 'Witty'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setTone(t)}
                        className={`flex-1 py-2 text-sm rounded-lg border transition-all ${
                          tone === t
                            ? 'bg-secondary/20 border-secondary text-secondary'
                            : 'bg-[#08121c] border-white/10 text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={loading || !topic}
                  className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transition-colors mt-2"
                >
                  {loading ? <Loader2 className="animate-spin w-5 h-5" /> : <Sparkles className="w-5 h-5 text-secondary" />}
                  {loading ? "Generating..." : "Generate Magic"}
                </button>
              </div>

              {/* Result Area */}
              <div className="mt-6 pt-6 border-t border-white/5 min-h-[120px]">
                {result ? (
                  <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                    <p className="text-xs text-secondary mb-2 font-mono">Output:</p>
                    <p className="text-gray-200 leading-relaxed font-medium whitespace-pre-wrap">
                      {result}
                    </p>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-gray-600 text-sm italic">
                    <p>Enter a topic above to see the AI in action.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AiDemo;