import React from 'react';
import { Section } from './ui/Section';
import { ShieldCheck, Lock, Eye, CheckCircle2 } from 'lucide-react';

export const Trust: React.FC = () => {
  return (
    <Section className="bg-background relative border-t border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-semibold text-white mb-6">Trust, Control, and Approval</h2>
        <p className="text-secondary text-lg mb-8 leading-relaxed">
          Nothing is published without explicit approval. You can reject anything without explanation.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <ShieldCheck size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">NDAs Signed</h3>
            <p className="text-sm text-gray-400">Standard confidentiality agreements protect sensitive information.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <Lock size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Sensitive Information Filtered</h3>
            <p className="text-sm text-gray-400">We filter sensitive details before anything reaches your approval queue.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <Eye size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Explicit Approval Required</h3>
            <p className="text-sm text-gray-400">Nothing publishes without your explicit approval.</p>
          </div>

          <div className="glass-panel rounded-2xl p-6">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-4 text-white">
              <CheckCircle2 size={20} />
            </div>
            <h3 className="text-white font-medium mb-3">Reject Without Explanation</h3>
            <p className="text-sm text-gray-400">You can reject anything without explanation. No questions asked.</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
