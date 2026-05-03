import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.from('contact_submissions').insert([
        { name: formData.name, email: formData.email, message: formData.message },
      ]);
      if (error) throw error;

      await supabase.functions.invoke('send-contact-notification', {
        body: { name: formData.name, email: formData.email, message: formData.message },
      }).catch(console.error);

      toast({
        title: '✅ Message Sent!',
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: '❌ Something went wrong',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rzore430@gmail.com', href: 'mailto:rzore430@gmail.com', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Phone, label: 'Phone', value: '+91 8879466037', href: 'tel:+918879466037', gradient: 'from-violet-500 to-purple-500' },
    { icon: MapPin, label: 'Location', value: 'Mumbai 400030, India', href: null, gradient: 'from-rose-500 to-pink-500' },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden px-6">
      <div className="blob w-[400px] h-[400px] bottom-[-5%] right-[-5%]" style={{ background: 'var(--c-accent-2)', animationDelay: '2s' }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="section-label">Contact</p>
        <h2 className="section-heading">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        <p className="section-desc">
          Open to cyber security roles, pen-testing gigs, and full-stack collaborations. Let's build something awesome.
        </p>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Info */}
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="card p-5 flex items-center gap-4 group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${info.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: 'var(--c-text-muted)' }}>
                    {info.label}
                  </div>
                  {info.href ? (
                    <a href={info.href} className="text-sm font-medium transition-colors hover:text-emerald-500" style={{ color: 'var(--c-text)' }}>
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm font-medium" style={{ color: 'var(--c-text)' }}>{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Response time card */}
            <div className="card p-5" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.04), rgba(139,92,246,0.04))' }}>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle size={16} style={{ color: 'var(--c-accent)' }} />
                <span className="text-sm font-semibold" style={{ color: 'var(--c-text)' }}>Quick Response</span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--c-text-muted)' }}>
                I typically respond within 24 hours. For urgent matters, connect on LinkedIn.
              </p>
            </div>
          </div>

          {/* Right — Form */}
          <div className="card p-8">
            <h3 className="text-lg font-bold font-['Outfit'] mb-6 flex items-center gap-2" style={{ color: 'var(--c-text)' }}>
              <Send size={16} style={{ color: 'var(--c-accent)' }} />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--c-text-muted)' }}>
                    {field.label} *
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required
                    value={formData[field.name as keyof typeof formData]}
                    onChange={handleChange}
                    onFocus={() => setFocusedField(field.name)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-300"
                    style={{
                      background: 'var(--c-surface-2)',
                      border: `1.5px solid ${focusedField === field.name ? 'var(--c-accent)' : 'var(--c-border)'}`,
                      color: 'var(--c-text)',
                      boxShadow: focusedField === field.name ? '0 0 0 3px var(--c-glow)' : 'none',
                    }}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-xs font-medium uppercase tracking-widest mb-2" style={{ color: 'var(--c-text-muted)' }}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all duration-300"
                  style={{
                    background: 'var(--c-surface-2)',
                    border: `1.5px solid ${focusedField === 'message' ? 'var(--c-accent)' : 'var(--c-border)'}`,
                    color: 'var(--c-text)',
                    boxShadow: focusedField === 'message' ? '0 0 0 3px var(--c-glow)' : 'none',
                  }}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
