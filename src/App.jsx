import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  ChevronDown,
  Database,
  Brain,
  Code,
  BarChart3,
  ExternalLink,
  Cpu,
  Layers,
  Camera,
  Trophy,
  BookOpen,
  Activity,
  Globe
} from 'lucide-react';
import NeuralBackground from './components/NeuralBackground';
import Section from './components/Section';
import GlowingCard from './components/GlowingCard';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function AkhilPortfolio() {
  const [activeSection, setActiveSection] = useState('home');

  // Navigation Logic
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Scroll Spy for Active Section Highlighting
  useEffect(() => {
    const observerOptions = {
      root: null,
      // Triggers when the section is near the center of the viewport
      rootMargin: '-40% 0px -40% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      <NeuralBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-slate-950/70 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div
            className="text-2xl font-bold tracking-tighter"
            style={{
              backgroundImage: 'linear-gradient(to right, #22d3ee, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            AL.
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 hover:text-cyan-400 ${activeSection === item.id ? 'text-cyan-400' : 'text-slate-400'
                  }`}
              >
                {item.label.toUpperCase()}
              </button>
            ))}
          </div>
          {/* Mobile Menu Button (Simplified for this demo) */}
          <button className="md:hidden text-slate-300">
            <Layers size={24} />
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 relative z-10">

        {/* 1. HERO SECTION */}
        <Section id="home" className="flex flex-col items-start justify-center min-h-screen">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-semibold tracking-widest mb-6 animate-fade-in-down">
            <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
            WELCOME TO MY DATA STORY
          </div>

          <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
            Akhil S Lal <br />
            <span
              className="font-bold"
              style={{
                backgroundImage: 'linear-gradient(to right, #22d3ee, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'inline-block'
              }}
            >
              Data Scientist
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-2xl mb-10 font-light">
            Machine Learning • Predictive Modeling • AI & Analytics.
            Transforming raw data into decision-grade intelligence.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center"
            >
              <Database className="mr-2" size={20} /> View Projects
            </button>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <ChevronDown size={32} />
          </div>
        </Section>

        {/* 2. ABOUT CHAPTER */}
        <Section id="about">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8 flex items-center">
                <span className="text-cyan-500 mr-4">01.</span> About Me
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6 border-l-2 border-cyan-500/50 pl-6">
                I am an AI & Data Science graduate passionate about solving real-world problems using analytics, modeling, and storytelling. I don't just analyze data; I translate it into actionable strategies.
              </p>

              <div className="space-y-6">
                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center mb-2">
                    <BookOpen className="text-violet-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">Education</h3>
                  </div>
                  <div className="ml-9 text-slate-400">
                    <p className="font-medium text-cyan-200">B.E. Artificial Intelligence & Data Science</p>
                    <p>NMIT Bengaluru • CGPA 7.70</p>
                  </div>
                </div>

                <div className="bg-slate-900/50 p-4 rounded-xl border border-white/5 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center mb-2">
                    <Camera className="text-violet-400 mr-3" size={24} />
                    <h3 className="text-xl font-semibold text-white">Interests</h3>
                  </div>
                  <div className="ml-9 flex gap-3 flex-wrap">
                    {['Football & Cricket', 'Photography', 'State-Level Athlete', 'Movies'].map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs bg-slate-800 rounded-full text-slate-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Abstract 3D-like composition */}
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {/* Class 12 Metrics Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-white/5 shadow-2xl transform translate-y-8 h-fit">
                  <Brain size={48} className="text-cyan-400 mb-4" />
                  <h4 className="text-2xl font-bold text-white">88.4%</h4>
                  <p className="text-sm text-slate-400">Class 12 Metrics</p>
                </div>

                {/* Languages Card */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl border border-white/5 shadow-2xl h-fit">
                  <Globe size={48} className="text-violet-400 mb-4" />
                  <h4 className="text-xl font-bold text-white mb-3">Languages</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex flex-col">
                      <span className="text-slate-200 font-medium">English</span>
                      <span className="text-slate-500 text-xs">Professional</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-slate-200 font-medium">Malayalam</span>
                      <span className="text-slate-500 text-xs">Native</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-slate-200 font-medium">Hindi</span>
                      <span className="text-slate-500 text-xs">Working</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-slate-200 font-medium">Kannada</span>
                      <span className="text-slate-500 text-xs">Conversational</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl -z-10 rounded-full transform scale-110"></div>
            </div>
          </div>
        </Section>

        {/* 3. EXPERIENCE TIMELINE */}
        <Section id="experience">
          <h2 className="text-4xl font-bold text-white mb-12 flex items-center justify-center">
            <span className="text-cyan-500 mr-4">02.</span> Experience
          </h2>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute top-0 bottom-0 left-0 md:left-1/2 w-1 bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent -translate-x-1/2 z-0"></div>

            {/* Job 1 */}
            <div className="relative mb-16 md:grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white">Decision Scientist</h3>
                <p className="text-cyan-400 font-medium">Mu Sigma Business Solutions</p>
                <p className="text-sm text-slate-500">Aug 2025 – Nov 2025</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)] z-10"></div>
              <GlowingCard className="md:col-start-2">
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span> Improved network reliability resulting in 15% downtime reduction.</li>
                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span> Built ML models for latency, speed, and congestion analysis.</li>
                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span> Tech: Python, SQL, Power BI, Figma, Agile.</li>
                </ul>
              </GlowingCard>
            </div>

            {/* Job 2 */}
            <div className="relative mb-16 md:grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white">Data Science Intern</h3>
                <p className="text-violet-400 font-medium">CodeClause</p>
                <p className="text-sm text-slate-500">Remote</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-violet-400 rounded-full shadow-[0_0_15px_rgba(139,92,246,1)] z-10"></div>
              <GlowingCard className="order-1 md:text-right">
                <ul className="space-y-2 text-sm text-slate-300 inline-block text-left">
                  <li className="flex items-start"><span className="text-violet-500 mr-2">▹</span> Developed robust Credit Card Fraud Detection ML models.</li>
                  <li className="flex items-start"><span className="text-violet-500 mr-2">▹</span> Utilized Jupyter Notebooks for EDA and model training.</li>
                  <li className="flex items-start"><span className="text-violet-500 mr-2">▹</span> Received Letter of Recommendation for performance.</li>
                </ul>
              </GlowingCard>
            </div>

            {/* Job 3 */}
            <div className="relative mb-16 md:grid md:grid-cols-2 gap-8 items-center">
              <div className="md:text-right mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-white">Data Analytics Apprentice</h3>
                <p className="text-cyan-400 font-medium">MedTourEasy</p>
              </div>
              <div className="absolute left-0 md:left-1/2 -translate-x-[5px] md:-translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(6,182,212,1)] z-10"></div>
              <GlowingCard className="md:col-start-2">
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span> Conducted Bayesian analysis comparing handedness lifespan.</li>
                  <li className="flex items-start"><span className="text-cyan-500 mr-2">▹</span> Delivered myth-busting analytical conclusions through viz.</li>
                </ul>
              </GlowingCard>
            </div>
          </div>
        </Section>

        {/* 4. SKILLS VISUAL MAP */}
        <Section id="skills">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              <span className="text-cyan-500 mr-2">03.</span> Technical Arsenal
            </h2>
            <p className="text-slate-400">Tools and technologies defining my workflow.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages & Tools */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Code className="mr-2 text-cyan-400" /> Core Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {['Python', 'SQL', 'R', 'MySQL', 'Excel', 'Power BI', 'Tableau', 'Jupyter'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-slate-900 rounded-lg border border-slate-800 text-cyan-100 hover:border-cyan-500/50 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all cursor-default">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center">
                <Trophy className="mr-2 text-violet-400" /> Certifications
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Google Data Analytics', issuer: 'Google' },
                  { name: 'CompTIA Network+', issuer: 'Infosys' },
                  { name: 'SQL for Data Science', issuer: 'UC Davis' },
                  { name: 'Python Programming', issuer: 'HRD & Guvi' },
                ].map((cert) => (
                  <div key={cert.name} className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg border-l-4 border-violet-500">
                    <span className="font-medium text-slate-200">{cert.name}</span>
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{cert.issuer}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* 5. PROJECTS GRID */}
        <Section id="projects">
          <h2 className="text-4xl font-bold text-white mb-12">
            <span className="text-cyan-500 mr-4">04.</span> Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Project 1 */}
            <GlowingCard>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-green-500/20 rounded-lg">
                  <Cpu className="text-green-400" size={24} />
                </div>
                <div className="flex gap-2">
                  <Github className="text-slate-500 hover:text-white cursor-not-allowed opacity-50" size={20} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">SASYA: The CropCure Analyst</h3>
              <p className="text-slate-400 text-sm mb-4">
                End-to-end CNN model trained on 38 classes for plant disease detection. Features a Gradio deployment and Tkinter UI integration.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs text-green-300 bg-green-900/30 px-2 py-1 rounded">CNN</span>
                <span className="text-xs text-green-300 bg-green-900/30 px-2 py-1 rounded">Deep Learning</span>
                <span className="text-xs text-green-300 bg-green-900/30 px-2 py-1 rounded">Gradio</span>
              </div>
            </GlowingCard>

            {/* Project 2 */}
            <a href="https://github.com/Akhil-S-Lal/CodeClauseInternship_CreditCardFraudDetection" target="_blank" rel="noreferrer" className="block">
              <GlowingCard>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-violet-500/20 rounded-lg">
                    <Activity className="text-violet-400" size={24} />
                  </div>
                  <div className="flex gap-2">
                    <Github className="text-slate-400 group-hover:text-white transition-colors" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Credit Card Fraud Detection</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Random Forest Classifier pipeline handling imbalanced datasets. Includes animated confusion matrix visualizations and feature importance analysis.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs text-violet-300 bg-violet-900/30 px-2 py-1 rounded">Scikit-Learn</span>
                  <span className="text-xs text-violet-300 bg-violet-900/30 px-2 py-1 rounded">Random Forest</span>
                </div>
              </GlowingCard>
            </a>

            {/* Project 3 */}
            <a href="https://github.com/Akhil-S-Lal/MedTourEasy" target="_blank" rel="noreferrer" className="block">
              <GlowingCard>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-cyan-500/20 rounded-lg">
                    <BarChart3 className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex gap-2">
                    <Github className="text-slate-400 group-hover:text-white transition-colors" size={20} />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Lifespan Analysis (Bayesian)</h3>
                <p className="text-slate-400 text-sm mb-4">
                  A statistical myth-busting project using Bayesian models to compare lifespans of left vs. right-handed individuals.
                </p>
                <div className="flex gap-2 mb-4 flex-wrap">
                  <span className="text-xs text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">Statistics</span>
                  <span className="text-xs text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded">Data Viz</span>
                </div>
              </GlowingCard>
            </a>

            {/* Project 4 */}
            <GlowingCard>
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-amber-500/20 rounded-lg">
                  <Database className="text-amber-400" size={24} />
                </div>
                <div className="flex gap-2">
                  <span className="text-xs text-amber-500 border border-amber-500 px-2 py-0.5 rounded">Corporate</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Network Performance Prediction</h3>
              <p className="text-slate-400 text-sm mb-4">
                Enterprise-grade ML pipelines for latency and congestion forecasting. Reduced network downtime significantly via predictive maintenance.
              </p>
              <div className="flex gap-2 mb-4 flex-wrap">
                <span className="text-xs text-amber-300 bg-amber-900/30 px-2 py-1 rounded">Mu Sigma</span>
                <span className="text-xs text-amber-300 bg-amber-900/30 px-2 py-1 rounded">Predictive Modeling</span>
              </div>
            </GlowingCard>
          </div>
        </Section>

        {/* 6. QUOTE SECTION */}
        <Section className="text-center py-32">
          <div className="max-w-4xl mx-auto relative">
            <span className="text-9xl absolute -top-10 -left-10 text-slate-800 font-serif opacity-50">“</span>
            <h2 className="text-3xl md:text-5xl font-light leading-snug text-slate-200">
              I blend <span className="text-cyan-400 font-semibold">AI</span>, <span className="text-violet-400 font-semibold">Analytics</span>, and <span className="text-white font-semibold">Storytelling</span> to build scalable, data-driven impact.
            </h2>
            <span className="text-9xl absolute -bottom-20 -right-10 text-slate-800 font-serif opacity-50 transform rotate-180">“</span>
          </div>
        </Section>

        {/* 7. CONTACT SECTION */}
        <Section id="contact" className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-white/10 rounded-3xl p-8 md:p-16 text-center shadow-2xl relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]"></div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 relative z-10">Let's Connect</h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto relative z-10">
              Open to opportunities in Data Science, Machine Learning, and Analytics.
            </p>

            <div className="flex flex-wrap justify-center gap-6 relative z-10">
              <a href="mailto:akhilslal007@gmail.com" className="flex items-center px-6 py-4 bg-slate-800 hover:bg-cyan-900/30 border border-slate-700 hover:border-cyan-500 rounded-xl transition-all group">
                <Mail className="text-cyan-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200">akhilslal007@gmail.com</span>
              </a>

              <a href="tel:+919686612660" className="flex items-center px-6 py-4 bg-slate-800 hover:bg-green-900/30 border border-slate-700 hover:border-green-500 rounded-xl transition-all group">
                <Phone className="text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200">+91 9686612660</span>
              </a>

              <a href="https://www.linkedin.com/in/akhil-s-lal-713138217" target="_blank" rel="noreferrer" className="flex items-center px-6 py-4 bg-slate-800 hover:bg-blue-900/30 border border-slate-700 hover:border-blue-500 rounded-xl transition-all group">
                <Linkedin className="text-blue-400 mr-3 group-hover:scale-110 transition-transform" />
                <span className="text-slate-200">LinkedIn Profile</span>
              </a>
            </div>
          </div>

          <footer className="mt-20 text-center text-slate-600 text-sm">
            <p>© {new Date().getFullYear()} Akhil S Lal. Crafted with Data & Design.</p>
          </footer>
        </Section>

      </main>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
      `}</style>
    </div>
  );
}
