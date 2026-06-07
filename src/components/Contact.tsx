import React, { useState } from 'react';
import { Mail, MapPin, MessageCircle, Phone, Send } from 'lucide-react';
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
        title: 'Message sent',
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'rzore430@gmail.com', href: 'mailto:rzore430@gmail.com', color: 'var(--c-accent)' },
    { icon: Phone, label: 'Phone', value: '+91 8879466037', href: 'tel:+918879466037', color: 'var(--c-accent-2)' },
    { icon: MapPin, label: 'Location', value: 'Mumbai 400030, India', href: null, color: 'var(--c-violet)' },
  ];

  return (
    <section id="contact" className="section-wrap">
      <div className="soft-glow bottom-[-8rem] right-[10%] h-80 w-80 rounded-full bg-[var(--c-accent-2)]" />
      <div className="section-inner">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="section-label mb-4">Contact</p>
            <h2 className="section-heading">
              Open a <span className="gradient-text">Secure Channel</span>
            </h2>
          </div>
          <p className="section-desc">
            Open to entry-level or internship roles in SOC operations, vulnerability assessment, security analysis, full-stack development, and React Native mobile products.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div key={info.label} className="glass-panel reveal reveal-up p-5">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg" style={{ background: `${info.color}22`, color: info.color }}>
                    <info.icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[var(--c-text-muted)]">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="mt-1 block text-sm font-bold text-[var(--c-text)] transition hover:text-[var(--c-accent)]">
                        {info.value}
                      </a>
                    ) : (
                      <span className="mt-1 block text-sm font-bold text-[var(--c-text)]">{info.value}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}

            <div className="glass-panel reveal reveal-up p-5">
              <div className="mb-3 flex items-center gap-2 text-[var(--c-accent)]">
                <MessageCircle size={17} />
                <span className="text-sm font-black uppercase">Response Window</span>
              </div>
              <p className="text-sm leading-6 text-[var(--c-text-muted)]">
                I typically respond within 24 hours. For urgent work, LinkedIn is the fastest path.
              </p>
            </div>
          </div>

          <div className="glass-panel reveal reveal-up p-6 md:p-8">
            <h3 className="mb-6 flex items-center gap-3 font-['Outfit'] text-3xl font-black uppercase leading-none text-[var(--c-text)]">
              <Send size={22} className="text-[var(--c-accent-2)]" />
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label htmlFor={field.name} className="mb-2 block text-xs font-black uppercase tracking-widest text-[var(--c-text-muted)]">
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
                    className="w-full rounded-lg border px-4 py-3 text-sm outline-none transition"
                    style={{
                      background: 'rgba(255,255,255,0.06)',
                      borderColor: focusedField === field.name ? 'var(--c-accent)' : 'var(--c-border)',
                      color: 'var(--c-text)',
                      boxShadow: focusedField === field.name ? '0 0 0 3px var(--c-glow)' : 'none',
                    }}
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-black uppercase tracking-widest text-[var(--c-text-muted)]">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full resize-none rounded-lg border px-4 py-3 text-sm outline-none transition"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    borderColor: focusedField === 'message' ? 'var(--c-accent)' : 'var(--c-border)',
                    color: 'var(--c-text)',
                    boxShadow: focusedField === 'message' ? '0 0 0 3px var(--c-glow)' : 'none',
                  }}
                  placeholder="Tell me about the role, project, or problem..."
                />
              </div>

              <button type="submit" disabled={isSubmitting} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-black/20 border-t-black" />
                    Sending
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
