import { LuArrowUpRight, LuFileText, LuCode } from 'react-icons/lu';
import { courseCertificates, dicodingCredentialUrl } from './certifications';

const featuredCertificates = [
  {
    title: 'Sertifikasi Kompetensi BNSP',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    category: 'Professional certification',
    file: '/documents/certifications/bnsp-competency-certificate.pdf',
  },
  {
    title: 'DBS Foundation Coding Camp Certificate',
    issuer: 'Coding Camp · DBS Foundation',
    category: 'Intensive training',
    file: '/documents/certifications/dbs-foundation-coding-camp-certificate.pdf',
  },
  {
    title: 'Certificate of Appreciation: Assistant Public Relations Manager (GDSC UNIKOM)',
    issuer: 'Google Developer Student Clubs · UNIKOM',
    category: 'Community recognition',
    file: '/documents/certifications/gdsc-unikom-appreciation-certificate.pdf',
  },
];

export function CertificationSection() {
  return (
    <section id="certification" className="certification-section container" aria-labelledby="certification-title">
      <div className="section-top">
        <div>
          <p className="eyebrow"><span>04 /</span> CONTINUING TO GROW</p>
          <h2 id="certification-title">Certification<span className="accent">.</span></h2>
        </div>
        <p className="section-note">Professional qualifications, community contributions, and learning along the way.</p>
      </div>

      <div className="certificate-grid">
        {featuredCertificates.map((certificate, index) => (
          <article className="certificate-card" key={certificate.file}>
            <div className="certificate-card-top">
              <div className="system-icon"><LuFileText size={23} aria-hidden="true" /></div>
              <span className="mono">0{index + 1} / PDF</span>
            </div>
            <p className="eyebrow">{certificate.category}</p>
            <h3>{certificate.title}</h3>
            <p className="certificate-issuer">{certificate.issuer}</p>
            <a className="text-link" href={certificate.file} target="_blank" rel="noopener noreferrer" aria-label={`View ${certificate.title} (PDF, opens in a new tab)`}>
              View certificate <LuArrowUpRight size={17} aria-hidden="true" />
            </a>
          </article>
        ))}
      </div>

      <div className="course-certificates" aria-labelledby="course-certificates-title">
        <div className="course-certificates-heading">
          <div>
            <p className="eyebrow"><LuCode size={18} aria-hidden="true" /> CONTINUOUS LEARNING</p>
            <h3 id="course-certificates-title">Various Programming and Machine Learning Class Certificates.</h3>
          </div>
          <span className="mono">{courseCertificates.length} CERTIFICATES</span>
        </div>
        <ul className="course-certificate-list">
          {courseCertificates.map(certificate => (
            <li className="course-certificate" key={certificate.credentialId}>
              <h4>{certificate.title}</h4>
              <p className="course-issuer">Dicoding Indonesia</p>
              <p className="course-dates">Issued {certificate.issued} <span aria-hidden="true">·</span> {certificate.expired ? 'Expired' : 'Expires'} {certificate.expires}</p>
              {certificate.skills && <p className="course-skills">Skills: {certificate.skills.join(', ')}</p>}
              <div className="course-credential">
                <p>Credential ID <span>{certificate.credentialId}</span></p>
                <a className="text-link" href={dicodingCredentialUrl(certificate.credentialId)} target="_blank" rel="noopener noreferrer" aria-label={`Show credential for ${certificate.title}, ${certificate.credentialId} (opens in a new tab)`}>
                  Show credential <LuArrowUpRight size={15} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
