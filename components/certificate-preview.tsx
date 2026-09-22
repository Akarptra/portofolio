"use client";

import { useState } from 'react';
import { LuChevronLeft, LuChevronRight, LuDownload } from 'react-icons/lu';
import { DialogDescription, DialogTitle } from '@/components/ui/dialog';

export type CertificateDocument = {
  title: string;
  issuer: string;
  credentialId?: string;
  documentCredentialId?: string;
  file: string;
  pages: { src: string; width?: number; height?: number }[];
};

export function CertificatePreview({ certificate }: { certificate: CertificateDocument }) {
  const [pageIndex, setPageIndex] = useState(0);
  const [imageState, setImageState] = useState<'loading' | 'ready' | 'error'>('loading');
  const page = certificate.pages[pageIndex];

  function changePage(nextIndex: number) {
    setImageState('loading');
    setPageIndex(nextIndex);
  }

  return (
    <>
      <div className="certificate-preview-heading">
        <p className="eyebrow">CERTIFICATE PREVIEW</p>
        <DialogTitle className="certificate-preview-title">{certificate.title}</DialogTitle>
        <DialogDescription className="certificate-preview-description">
          {certificate.issuer}
          {certificate.credentialId && <span> · Credential ID {certificate.credentialId}</span>}
        </DialogDescription>
        {certificate.documentCredentialId && certificate.documentCredentialId !== certificate.credentialId && (
          <p className="certificate-preview-note">Dicoding currently provides an updated PDF for this course, with credential ID {certificate.documentCredentialId}.</p>
        )}
      </div>
      <div className="certificate-preview-page" aria-busy={imageState === 'loading'}>
        <img
          key={page.src}
          src={page.src}
          width={page.width}
          height={page.height}
          alt={`${certificate.title}, page ${pageIndex + 1} of ${certificate.pages.length}`}
          onLoad={() => setImageState('ready')}
          onError={() => setImageState('error')}
          className={imageState === 'ready' ? 'is-ready' : ''}
        />
        {imageState !== 'ready' && (
          <p className="certificate-preview-status" role="status">
            {imageState === 'loading' ? 'Loading certificate…' : 'Preview unavailable. You can still download the PDF below.'}
          </p>
        )}
      </div>
      <div className="certificate-preview-footer">
        <div className="certificate-page-controls" aria-label="Certificate pages">
          {certificate.pages.length > 1 && (
            <button type="button" aria-label="Previous certificate page" disabled={pageIndex === 0} onClick={() => changePage(pageIndex - 1)}>
              <LuChevronLeft size={18} aria-hidden="true" />
            </button>
          )}
          <span aria-live="polite">Page {pageIndex + 1} of {certificate.pages.length}</span>
          {certificate.pages.length > 1 && (
            <button type="button" aria-label="Next certificate page" disabled={pageIndex === certificate.pages.length - 1} onClick={() => changePage(pageIndex + 1)}>
              <LuChevronRight size={18} aria-hidden="true" />
            </button>
          )}
        </div>
        <a className="text-link" href={certificate.file} download>
          Download PDF <LuDownload size={16} aria-hidden="true" />
        </a>
      </div>
    </>
  );
}
