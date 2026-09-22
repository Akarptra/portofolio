"use client";

import { useRef, useState } from 'react';
import { LuEye, LuFileText, LuCode } from 'react-icons/lu';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { CertificatePreview, type CertificateDocument } from '@/components/certificate-preview';
import { courseCertificates } from './certifications';
import certificatePreviews from './certificate-previews.json';

const dicodingPreviews: Record<string, Pick<CertificateDocument, 'file' | 'pages' | 'documentCredentialId'>> = certificatePreviews;

const featuredCertificates = [
  {
    title: 'Sertifikasi Kompetensi BNSP',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    category: 'Professional certification',
    file: '/documents/certifications/bnsp-competency-certificate.pdf',
    pages: [{ src: '/images/certifications/bnsp-competency-certificate.webp' }],
  },
  {
    title: 'DBS Foundation Coding Camp Certificate',
    issuer: 'Coding Camp · DBS Foundation',
    category: 'Intensive training',
    file: '/documents/certifications/dbs-foundation-coding-camp-certificate.pdf',
    pages: [{ src: '/images/certifications/dbs-foundation-coding-camp-certificate.webp' }],
  },
  {
    title: 'Certificate of Appreciation: Assistant Public Relations Manager (GDSC UNIKOM)',
    issuer: 'Google Developer Student Clubs · UNIKOM',
    category: 'Community recognition',
    file: '/documents/certifications/gdsc-unikom-appreciation-certificate.pdf',
    pages: [{ src: '/images/certifications/gdsc-unikom-appreciation-certificate.webp' }],
  },
];

export function CertificationSection() {
  const [selected, setSelected] = useState<CertificateDocument | null>(null);
  const previewTrigger = useRef<HTMLButtonElement | null>(null);
  const previewDialog = useRef<HTMLDivElement | null>(null);

  function openPreview(certificate: CertificateDocument, trigger: HTMLButtonElement) {
    previewTrigger.current = trigger;
    setSelected(certificate);
  }

  return (
    <>
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
            <button type="button" className="text-link" onClick={event => openPreview(certificate, event.currentTarget)} aria-haspopup="dialog" aria-label={`View ${certificate.title} (PDF preview)`}>
              View certificate <LuEye size={17} aria-hidden="true" />
            </button>
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
                <button type="button" className="text-link" aria-haspopup="dialog" onClick={event => openPreview({ ...dicodingPreviews[certificate.credentialId], title: certificate.title, issuer: 'Dicoding Indonesia', credentialId: certificate.credentialId }, event.currentTarget)} aria-label={`Show credential for ${certificate.title}, ${certificate.credentialId} (PDF preview)`}>
                  Show credential <LuEye size={15} aria-hidden="true" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
    <Dialog open={!!selected} onOpenChange={open => { if (!open) setSelected(null); }}>
      <DialogContent ref={previewDialog} className="certificate-dialog" tabIndex={-1} onOpenAutoFocus={event => { event.preventDefault(); previewDialog.current?.focus({ preventScroll: true }); }} onCloseAutoFocus={event => { event.preventDefault(); previewTrigger.current?.focus({ preventScroll: true }); }}>
        {selected && <CertificatePreview key={selected.file} certificate={selected} />}
      </DialogContent>
    </Dialog>
    </>
  );
}
