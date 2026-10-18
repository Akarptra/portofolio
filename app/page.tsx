"use client";

import { useState } from 'react';
import { LuArrowDown, LuArrowRight, LuArrowUpRight, LuDownload, LuMail, LuMapPin, LuCpu, LuNetwork, LuDatabase, LuCode, LuLayers3, LuCheck, LuMenu, LuX, LuFileText } from 'react-icons/lu';
import { FaLinkedinIn } from 'react-icons/fa';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { projects, type Project } from './projects';
import { CertificationSection } from './certification-section';

const skillGroups = [
  { Icon: LuCpu, title: 'Machine learning & NLP', text: 'From raw data to evaluated neural models & recommendations.', tags: ['Python','TensorFlow','Scikit-learn','NLP','Pandas','Bi-LSTM'] },
  { Icon: LuNetwork, title: 'AI systems & infrastructure', text: 'Autonomous agent flywheels, Discord bots, and Linux servers.', tags: ['Hermes Agent','Linux ARM64','Docker','Pterodactyl','Azure','Next.js 14'] },
  { Icon: LuDatabase, title: 'Fullstack & Financial Engines', text: 'PSAK double-entry ledgers, REST APIs, and automated pipelines.', tags: ['TypeScript','Prisma ORM','SQLite','Tailwind CSS','Discord.py','Git'] },
];

function Tags({ items }: { items: string[] }) {
  return <div className="tags">{items.map(t=><span key={t}>{t}</span>)}</div>;
}

export default function Home() {
  const [selected, setSelected] = useState<Project|null>(null);
  const [menu, setMenu] = useState(false);
  const [copied, setCopied] = useState(false);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('rakario14@gmail.com');
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = 'mailto:rakario14@gmail.com';
    }
  }

  function getVisualClass(id: string) {
    if (id === 'akarporos') return 'akarporos-visual';
    if (id === 'alertflow') return 'alertflow-visual';
    if (id === 'finance') return 'finance-visual';
    if (id === 'nutrimood') return 'nutrimood-visual';
    return 'research-visual';
  }

  function renderVisual(p: Project, i: number) {
    if (p.id === 'akarporos') {
      return (
        <div className="akarporos-preview">
          <img src="/images/akarporos.jpg" alt="Akar Poros AI studio brand identity" loading="lazy" />
        </div>
      );
    }
    if (p.id === 'alertflow') {
      return (
        <div className="alertflow-preview">
          <img src="/images/alertflow.jpg" alt="AlertFlow stream radar Discord bot" loading="lazy" />
        </div>
      );
    }
    if (p.id === 'finance') {
      return (
        <div className="finance-preview">
          <img src="/images/akarporos-finance.jpg" alt="Akar Poros Finance PSAK accounting ERP" loading="lazy" />
        </div>
      );
    }
    if (p.id === 'nutrimood') {
      return (
        <div className="browser-preview">
          <div className="browser-bar"><span/><span/><span/><p>nutrimoodv.vercel.app</p></div>
          <img src="/images/nutrimood.png" alt="NutriMood web application for personalized meal recommendations" width={1728} height={972} loading="lazy"/>
        </div>
      );
    }
    return (
      <div className="research-data">
        <div className="research-heading"><span>Bi-LSTM + GloVe</span><LuCpu size={25}/></div>
        <div className="research-score">89.11<span>%</span></div>
        <p>Test accuracy · GloVe 100d</p>
        <div className="chart-bars" aria-label="Reported accuracy: GloVe 100d 89.11%, 200d 87.66%, 300d 87.66%">
          {[['100d','89.11'],['200d','87.66'],['300d','87.66']].map(([n,v],j)=>(
            <div className="chart-row" key={n}>
              <span>{n}</span>
              <div><i className={j===0?'best-bar':''} style={{width:v+'%'}}/></div>
              <span>{v}%</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="wordmark" href="/" aria-label="Raka Putra, home" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>
            raka<span>.</span>
          </a>
          <nav className={'navigation'+(menu?' is-open':'')} aria-label="Main navigation">
            {[['Work','work'],['About','about'],['Experience','experience'],['Certification','certification']].map(([label,id])=>(
              <a href={'#'+id} key={id} onClick={(e)=>{e.preventDefault();scrollTo(id);setMenu(false)}}>{label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={(e)=>{e.preventDefault();scrollTo('contact');setMenu(false)}}>
              Let’s talk <LuArrowUpRight size={16}/>
            </a>
          </nav>
          <button className="mobile-menu" aria-label={menu?'Close navigation':'Open navigation'} aria-expanded={menu} onClick={()=>setMenu(!menu)}>
            {menu?<LuX size={24}/>:<LuMenu size={24}/>}
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="availability"><span/>Open to work & collaborations</div>
            <p className="intro">Hi, I’m Raka Putra <span/></p>
            <h1 id="hero-title">Turning data<br/>into <span className="accent">intelligent<br/>systems.</span></h1>
            <p className="hero-description">I architect autonomous AI agents, engineer machine learning systems, and run resilient cloud infrastructure that powers working products.</p>
            <div className="hero-actions">
              <a className="button primary" href="#work" onClick={(e)=>{e.preventDefault();scrollTo('work')}}>Explore my work <LuArrowDown size={18}/></a>
              <a className="button secondary" href="/documents/raka-putra-cv.pdf" download>Download CV <LuDownload size={17}/></a>
            </div>
            <div className="hero-meta">
              <span><LuMapPin size={14}/>Bandung, Indonesia</span>
              <i/>Machine Learning · AI Systems · Cloud
            </div>
          </div>
          <div className="portrait-area">
            <div className="portrait-top"><span className="mono">THE PERSON BEHIND THE CODE</span><span>+</span></div>
            <div className="portrait-frame">
              <img src="/images/raka.jpg" alt="Raka Putra Pratidina smiling with his arms crossed" width={630} height={1120} fetchPriority="high"/>
              <div className="portrait-caption">
                <span>Raka Putra Pratidina</span>
                <span className="mono">LEARN. BUILD. ITERATE.</span>
              </div>
            </div>
            <div className="portrait-bottom"><LuCode size={18}/><span>Curiosity, translated into code.</span><span>+</span></div>
          </div>
        </section>

        <div className="credibility container">
          <p className="mono">LEARNED &<br/>BUILT WITH</p>
          <div className="org"><strong>BRIN</strong><span>Research & innovation</span></div>
          <div className="org"><strong>Coding Camp<span className="accent">.</span></strong><span>Powered by DBS Foundation</span></div>
          <div className="org gdsc"><LuCode/><div><strong>Google Developer<br/>Student Clubs</strong><span>UNIKOM</span></div></div>
        </div>

        <section id="work" className="work-section container" aria-labelledby="work-title">
          <div className="section-top">
            <div>
              <p className="eyebrow"><span>01 /</span> SELECTED WORK</p>
              <h2 id="work-title">From experiments<br/>to <span className="subtle">working products.</span></h2>
            </div>
            <p className="section-note">Production systems, applied machine learning,<br className="desktop-break"/> and active digital products.</p>
          </div>

          <div className="featured-grid">
            {projects.slice(0, 5).map((p, i) => (
              <article className="project-card" key={p.id}>
                <button
                  className={'project-visual ' + getVisualClass(p.id)}
                  onClick={() => setSelected(p)}
                  aria-label={'Read ' + p.title + ' case study'}
                >
                  <span className="image-label">0{i + 1} / {p.title.toUpperCase()}</span>
                  {renderVisual(p, i)}
                  <span className="project-type">
                    {p.id === 'finance' ? (
                      <span className="badge-pill active-build"><span/>Active UI Build</span>
                    ) : (
                      p.badge || 'PROJECT'
                    )}
                  </span>
                </button>
                <div className="project-body">
                  <p className="eyebrow">{p.category}</p>
                  <div className="project-title-row">
                    <h3>{p.title}</h3>
                    <button className="icon-button" aria-label={'Read ' + p.title + ' case study'} onClick={() => setSelected(p)}>
                      <LuArrowUpRight/>
                    </button>
                  </div>
                  <p>{p.summary}</p>
                  <Tags items={p.stack.slice(0, 3)}/>
                  <div className="project-footer">
                    <button onClick={() => setSelected(p)}>View case study <LuArrowRight size={16}/></button>
                    {p.link && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        {p.linkLabel || 'Visit project'} <LuArrowUpRight size={15}/>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="systems-heading">
            <div>
              <span className="mono">CURRENT EXPLORATIONS</span>
              <h3>Beyond the notebook.</h3>
            </div>
            <p>Independent builds in AI, cloud, and automation.</p>
          </div>

          <div className="systems-grid">
            {projects.slice(5, 8).map((p, i) => {
              const Icon = [LuNetwork, LuCpu, LuDatabase][i];
              return (
                <article className="system-card" key={p.id}>
                  <div className="system-card-top">
                    <div className="system-icon"><Icon size={24}/></div>
                    <span className="mono">0{i + 6}</span>
                  </div>
                  <p className="system-label">{p.category}</p>
                  <h3>{p.title}</h3>
                  <p className="system-description">{p.summary}</p>
                  <div className="mini-stack">{p.stack.slice(0, 3).join(' / ')}</div>
                  <button className="text-link" onClick={() => setSelected(p)}>
                    Explore the build <LuArrowUpRight size={16}/>
                  </button>
                </article>
              );
            })}
          </div>

          <div className="more-work">
            <div className="more-work-heading">
              <LuLayers3 size={20}/>
              <h3>More from the workbench</h3>
              <span className="mono">COURSE PROJECTS</span>
            </div>
            {projects.slice(8).map((p, i) => (
              <button className="work-row" key={p.id} onClick={() => setSelected(p)}>
                <span className="work-row-number mono">0{i + 9}</span>
                <span className="work-row-title">{p.title}</span>
                <span className="work-row-stack">{p.stack.slice(1, 3).join(' · ')}</span>
                <LuArrowUpRight size={19}/>
              </button>
            ))}
          </div>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="eyebrow"><span>02 /</span> A LITTLE ABOUT ME</p>
              <h2 id="about-title">Curious by nature.<br/><span className="subtle">Builder by choice.</span></h2>
              <div className="about-location"><LuMapPin size={17}/>Based in Bandung, Indonesia</div>
            </div>
            <div className="about-copy">
              <p>I’m <strong>Raka Putra Pratidina</strong>, an Informatics Engineering student at Universitas Komputer Indonesia. My work connects applied machine learning, autonomous systems, and scalable full-stack products.</p>
              <p>I founded <strong>Akar Poros</strong> to engineer autonomous agent flywheels and high-performance digital platforms, built <strong>AlertFlow</strong> for sub-10s creator notifications on Discord, and am currently developing <strong>Finance</strong> (a modern PSAK double-entry accounting engine & ERP). I’ve also conducted NLP sentiment research at BRIN and led food recommendation systems.</p>
              <p className="about-closing">I like understanding the whole system.<br/><span>Then making it work, one piece at a time.</span></p>
            </div>
          </div>
          <div className="container skill-grid">
            {skillGroups.map(({ Icon, title, text, tags }) => (
              <div className="skill-block" key={title}>
                <Icon size={24}/>
                <h3>{title}</h3>
                <p>{text}</p>
                <Tags items={tags}/>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section container" aria-labelledby="experience-title">
          <div className="experience-intro">
            <p className="eyebrow"><span>03 /</span> THE JOURNEY SO FAR</p>
            <h2 id="experience-title">Learning by<br/><span className="subtle">doing the work.</span></h2>
            <a className="text-link" href="/documents/raka-putra-cv.pdf" download>Get the full résumé <LuDownload size={16}/></a>
            <div className="education">
              <span className="mono">EDUCATION</span>
              <h3>Informatics Engineering</h3>
              <p>Universitas Komputer Indonesia</p>
              <p className="education-detail">2022–present · GPA 3.83 / 4.00</p>
            </div>
          </div>
          <div className="timeline">
            {[
              ['2026 — PRESENT', 'Founder & Builder', 'AI Studio & Systems Engineer', 'Akar Poros & AlertFlow', 'Tech Ecosystem', 'Architected autonomous AI agent flywheels, Discord notification engines, and PSAK financial ERP tooling across cloud and edge platforms.'],
              ['JUL — AUG 2025', 'Research internship', 'Machine Learning Practical Work', 'Badan Riset dan Inovasi Nasional', 'BRIN', 'Developed NLP sentiment models, evaluated their performance, built an interactive dashboard, and co-authored a research report.'],
              ['FEB — JUL 2025', 'Intensive training', 'Machine Learning Engineer Cohort', 'Coding Camp', 'DBS Foundation', 'Completed six months of data and machine learning training. Led the NutriMood capstone team through planning, collaboration, and delivery.'],
              ['MAR 2023 — JAN 2024', 'Community', 'Assistant Public Relations Manager', 'Google Developer Student Clubs', 'UNIKOM', 'Helped manage community communications and coordinate technology events for the university\'s developer community.']
            ].map(([date, kind, title, org, extra, body]) => (
              <article key={title}>
                <div className="timeline-meta">
                  <span className="mono">{date}</span>
                  <span>{kind}</span>
                </div>
                <h3>{title}</h3>
                <p className="timeline-org">{org}<span>{extra}</span></p>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <CertificationSection />

        <section id="contact" className="contact-section container" aria-labelledby="contact-title">
          <div className="contact-top">
            <p className="eyebrow"><span>05 /</span> WHAT’S NEXT?</p>
            <span className="availability"><span/>Open to opportunities</span>
          </div>
          <h2 id="contact-title">Have something<br/>in mind? <span className="accent">Let’s build it.</span></h2>
          <div className="contact-bottom">
            <p>I’m looking for opportunities in machine learning,<br className="desktop-break"/> AI engineering, and scalable systems. Let’s start a conversation.</p>
            <a className="button primary" href="mailto:rakario14@gmail.com">Say hello <LuArrowUpRight size={20}/></a>
          </div>
          <div className="contact-links">
            <a href="mailto:rakario14@gmail.com"><LuMail size={17}/>rakario14@gmail.com</a>
            <button onClick={copyEmail} aria-live="polite">
              {copied ? <><LuCheck size={14}/>Copied</> : 'Copy email'}
            </button>
            <a className="linkedin-link" href="https://www.linkedin.com/in/rakaputrapratidina/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={14} aria-hidden="true"/>LinkedIn <LuArrowUpRight size={14}/>
            </a>
          </div>
        </section>
      </main>

      <footer className="container site-footer">
        <a className="wordmark" href="/" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>
          raka<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Raka Putra Pratidina</span>
        <a href="/" onClick={(e)=>{e.preventDefault();window.scrollTo({top:0,behavior:'smooth'})}}>Back to top <LuArrowUpRight size={14}/></a>
      </footer>

      <Dialog open={!!selected} onOpenChange={open => { if(!open) setSelected(null); }}>
        <DialogContent className="case-dialog">
          {selected && (
            <>
              <div className="case-meta mono">{selected.category}</div>
              <DialogTitle className="case-title">{selected.title}</DialogTitle>
              <DialogDescription className="case-description">{selected.summary}</DialogDescription>
              <p className="case-role">{selected.role}</p>
              <div className="case-flow" aria-label="Project workflow">
                {selected.flow.map((s, i) => (
                  <div key={s}>
                    <span className="mono">0{i + 1}</span>
                    <p>{s}</p>
                  </div>
                ))}
              </div>
              {[
                ['The problem', selected.problem],
                ['My contribution', selected.approach],
                ['The outcome', selected.outcome]
              ].map(([title, text]) => (
                <div className="case-section" key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              ))}
              {selected.note && <p className="case-note">{selected.note}</p>}
              <Tags items={selected.stack}/>
              {selected.link && (
                <a className="button primary case-action" href={selected.link} target="_blank" rel="noopener noreferrer">
                  {selected.linkLabel || 'Visit project'}
                  <LuArrowUpRight size={17}/>
                </a>
              )}
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
