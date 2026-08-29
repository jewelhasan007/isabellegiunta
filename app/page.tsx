'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowDownRight, ArrowUpRight, Check, Instagram, Menu, Minus, X } from 'lucide-react';

type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  className: string;
};

const navItems = ['About', 'Services', 'Portfolio', 'Contact'];
const categories = ['All', 'Beauty', 'Behind the scenes', 'Editorial'];

const portfolioItems: PortfolioItem[] = [
  { title: 'The artist behind the brush', category: 'Beauty', image: 'https://images.pexels.com/photos/7290109/pexels-photo-7290109.jpeg?auto=compress&cs=tinysrgb&h=900', className: 'portfolio-tall' },
  { title: 'A milestone worth celebrating', category: 'Behind the scenes', image: 'https://images.pexels.com/photos/19571010/pexels-photo-19571010.jpeg?auto=compress&cs=tinysrgb&h=700', className: 'portfolio-wide' },
  { title: 'The craft in close-up', category: 'Editorial', image: 'https://images.pexels.com/photos/7773349/pexels-photo-7773349.jpeg?auto=compress&cs=tinysrgb&h=700', className: 'portfolio-square' },
  { title: 'Soft light, real confidence', category: 'Beauty', image: 'https://images.pexels.com/photos/8990725/pexels-photo-8990725.jpeg?auto=compress&cs=tinysrgb&h=700', className: 'portfolio-square' },
  { title: 'Every detail matters', category: 'Editorial', image: 'https://images.pexels.com/photos/3219424/pexels-photo-3219424.jpeg?auto=compress&cs=tinysrgb&h=900', className: 'portfolio-tall' },
  { title: 'The work behind the work', category: 'Behind the scenes', image: 'https://images.pexels.com/photos/9743932/pexels-photo-9743932.jpeg?auto=compress&cs=tinysrgb&h=700', className: 'portfolio-wide' },
];

const services = [
  ['01', 'Soft glam', 'Polished, radiant and effortless makeup for a naturally elevated look.'],
  ['02', 'Full glam', 'A refined, camera-ready experience designed for statement moments.'],
  ['03', 'Event makeup', 'Beautiful, long-lasting makeup for parties, celebrations and special occasions.'],
  ['04', 'Photoshoot makeup', 'Editorial makeup tailored to lighting, styling and photography.'],
  ['05', 'Custom glam', 'A personalized look built around your features, style and vision.'],
];

const testimonials = [
  ['“She made me feel like the best version of myself.”', 'Alyssa M.'],
  ['“Isabelle listened to exactly what I wanted, then elevated it beyond what I imagined.”', 'Camille R.'],
  ['“The whole experience felt calm, personal and so beautifully considered.”', 'Jasmine T.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxItem, setLightboxItem] = useState<PortfolioItem | null>(null);
  const [testimonial, setTestimonial] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const filteredPortfolio = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    document.body.style.overflow = lightboxItem ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxItem]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightboxItem(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <header className={`site-header ${menuOpen ? 'is-open' : ''}`}>
        <a className="wordmark" href="#top" onClick={closeMenu}>ISABELLE <span>GIUNTA</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}
        </nav>
        <a className="header-book" href="#contact">Book now <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className="mobile-nav">
          {navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item} onClick={closeMenu}>{item}</a>)}
          <a className="mobile-book" href="#contact" onClick={closeMenu}>Book a session <ArrowUpRight size={15} /></a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Los Angeles <span>•</span> Makeup artist</p>
          <h1>Beauty,<br /><em>but make it</em><br />personal.</h1>
          <p className="hero-description">Professional makeup and glam services designed to enhance your features, your confidence, and your individual style.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">Book a glam session <ArrowUpRight size={16} /></a>
            <a className="text-link" href="#portfolio">View portfolio <ArrowDownRight size={16} /></a>
          </div>
        </div>
        <div className="hero-art">
          <div className="hero-image-wrap">
            <Image src="https://images.pexels.com/photos/19927156/pexels-photo-19927156.jpeg?auto=compress&cs=tinysrgb&h=1100" alt="Isabelle Giunta, Los Angeles makeup artist" fill priority sizes="(max-width: 900px) 90vw, 48vw" className="hero-image" />
          </div>
          <div className="hero-stamp">Makeup<br />Beauty<br />Glam</div>
          <p className="hero-caption">01 — Isabelle Giunta<br /><span>Artist / Los Angeles</span></p>
        </div>
        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section className="intro section-shell">
        <p className="section-kicker">The philosophy</p>
        <div className="intro-grid">
          <h2>Your face is the canvas.<br /><em>Your beauty is the story.</em></h2>
          <div className="intro-text"><p>Makeup should feel like an extension of you — considered, confident and never overdone. I create polished looks that let your personality stay in the room.</p><p className="signature">Isabelle Giunta<br /><span>Makeup artist</span></p></div>
        </div>
      </section>

      <section className="about section-shell" id="about">
        <div className="about-image-wrap"><Image src="https://images.pexels.com/photos/3886313/pexels-photo-3886313.jpeg?auto=compress&cs=tinysrgb&h=1000" alt="Isabelle Giunta applying makeup with a brush" fill sizes="(max-width: 900px) 90vw, 43vw" className="cover-image" /></div>
        <div className="about-copy"><p className="section-kicker">Meet Isabelle</p><h2>An eye for<br /><em>the details.</em></h2><p>Based in Los Angeles, Isabelle is a makeup artist passionate about creating polished, beautiful and deeply personal looks. Her approach blends artistry with an easy, comfortable energy — so you feel like yourself, only a little more luminous.</p><p>From soft glam to full-camera moments, every appointment is built around individuality, intention and the small details that make a look yours.</p><a className="text-link" href="#contact">Get to know Isabelle <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="services section-shell" id="services">
        <div className="section-intro"><div><p className="section-kicker">The offering</p><h2>Looks for every<br /><em>kind of moment.</em></h2></div><p>Thoughtful, professional makeup experiences for the days you want to feel especially like yourself.</p></div>
        <div className="service-list">{services.map(([number, title, description]) => <a className="service-row" href="#contact" key={number}><span className="service-number">{number}</span><span className="service-title">{title}</span><span className="service-description">{description}</span><ArrowUpRight className="service-arrow" size={20} /></a>)}</div>
      </section>

      <section className="portfolio section-shell" id="portfolio">
        <div className="section-intro portfolio-heading"><div><p className="section-kicker">Selected work</p><h2>The<br /><em>portfolio.</em></h2></div><p>A collection of beauty, glam and the artistry behind each look.</p></div>
        <div className="category-tabs" role="tablist" aria-label="Portfolio categories">{categories.map((category) => <button className={activeCategory === category ? 'active' : ''} key={category} onClick={() => setActiveCategory(category)} role="tab" aria-selected={activeCategory === category}>{category}</button>)}</div>
        <div className="portfolio-grid">{filteredPortfolio.map((item, index) => <button className={`portfolio-item ${item.className}`} key={`${item.title}-${index}`} onClick={() => setLightboxItem(item)} aria-label={`Open ${item.title}`}><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 90vw, 33vw" className="cover-image" /><span className="portfolio-overlay"><span>{item.title}</span><ArrowUpRight size={18} /></span></button>)}</div>
      </section>

      <section className="instagram-strip"><div><p className="section-kicker">More from the studio</p><h2>Follow<br /><em>the glam.</em></h2></div><div className="instagram-copy"><p>Latest looks, behind-the-scenes moments and beauty inspiration, over on Instagram.</p><a href="https://www.instagram.com/onsetwithisabelle/" target="_blank" rel="noreferrer" className="button button-light">@onsetwithisabelle <Instagram size={16} /></a></div><div className="instagram-images"><Image src="https://images.pexels.com/photos/17022657/pexels-photo-17022657.jpeg?auto=compress&cs=tinysrgb&h=600" alt="Isabelle Giunta Instagram portfolio" fill sizes="25vw" className="cover-image" /><div className="instagram-note">See you<br />over there <ArrowUpRight size={17} /></div></div></section>

      <section className="experience section-shell"><div className="experience-title"><p className="section-kicker">The experience</p><h2>Beautifully<br /><em>considered.</em></h2></div><div className="experience-list">{[['01', 'Personalized', 'Every look is tailored to the client.'], ['02', 'Refined', 'Beautiful makeup without losing individuality.'], ['03', 'Camera ready', 'Looks designed to photograph beautifully.'], ['04', 'Professional', 'A polished and comfortable experience.']].map(([number, title, text]) => <div className="experience-item" key={number}><span>{number}</span><Check size={18} /><h3>{title}</h3><p>{text}</p></div>)}</div></section>

      <section className="testimonial-section"><div className="testimonial-inner"><p className="section-kicker">Kind words</p><div className="testimonial-quote"><span className="quote-mark">“</span><h2>{testimonials[testimonial][0]}</h2><p>— {testimonials[testimonial][1]}</p></div><div className="testimonial-controls"><button onClick={() => setTestimonial((testimonial + testimonials.length - 1) % testimonials.length)} aria-label="Previous testimonial"><ArrowDownRight size={18} /></button><span>0{testimonial + 1} <i /> 0{testimonials.length}</span><button onClick={() => setTestimonial((testimonial + 1) % testimonials.length)} aria-label="Next testimonial"><ArrowUpRight size={18} /></button></div></div></section>

      <section className="contact section-shell" id="contact"><div className="contact-heading"><p className="section-kicker">Now booking</p><h2>Let&apos;s create<br /><em>something beautiful.</em></h2><p>Tell me a little about what you&apos;re dreaming up. I&apos;ll be in touch within 2–3 business days.</p><div className="contact-details"><a href="mailto:Isabellegiunta12@gmail.com">Isabellegiunta12@gmail.com</a><a href="https://www.instagram.com/onsetwithisabelle/" target="_blank" rel="noreferrer">@onsetwithisabelle</a><span>Los Angeles, CA</span></div></div><form className="booking-form" onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} aria-label="Booking inquiry form">{submitted ? <div className="form-success"><Check size={28} /><h3>Your note is on its way.</h3><p>Thank you for reaching out. Isabelle will be in touch soon.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>Send another inquiry <ArrowUpRight size={15} /></button></div> : <><div className="form-row"><label>Full name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@email.com" /></label></div><div className="form-row"><label>Event date<input type="date" name="date" /></label><label>Service<select name="service" defaultValue=""><option value="" disabled>Select a service</option><option>Soft glam</option><option>Full glam</option><option>Event makeup</option><option>Photoshoot makeup</option><option>Custom glam</option></select></label></div><label>Tell me about your vision<textarea name="message" rows={4} placeholder="Date, location, occasion, and anything else I should know..." /></label><button className="button button-dark form-submit" type="submit">Send booking request <ArrowUpRight size={16} /></button></>}</form></section>

      <footer className="footer"><div className="footer-top"><a className="footer-wordmark" href="#top">ISABELLE <em>GIUNTA</em></a><p>Makeup artist<br />Los Angeles</p><div className="footer-links">{navItems.map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</div></div><div className="footer-bottom"><span>© 2026 Isabelle Giunta. All rights reserved.</span><a href="https://www.instagram.com/onsetwithisabelle/" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div></footer>

      <a className="sticky-book" href="#contact">Book now <ArrowUpRight size={16} /></a>

      {lightboxItem && <div className="lightbox" role="dialog" aria-modal="true" aria-label={lightboxItem.title} onClick={() => setLightboxItem(null)}><button className="lightbox-close" onClick={() => setLightboxItem(null)} aria-label="Close image"><X size={22} /></button><div className="lightbox-image" onClick={(event) => event.stopPropagation()}><Image src={lightboxItem.image} alt={lightboxItem.title} fill sizes="90vw" className="contain-image" /><p>{lightboxItem.title} <span>{lightboxItem.category}</span></p></div></div>}
    </main>
  );
}
