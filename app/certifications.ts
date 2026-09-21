export type CourseCertificate = {
  title: string;
  credentialId: string;
  issued: string;
  expires: string;
  expired?: boolean;
  skills?: string[];
};

export const courseCertificates: CourseCertificate[] = [
  {
    title: 'Machine Learning Terapan',
    credentialId: 'RVZKWN6ROZD5',
    issued: 'May 2025',
    expires: 'May 2028',
  },
  {
    title: 'Belajar Fundamental Pemrosesan Data',
    credentialId: '1OP8231W8PQK',
    issued: 'May 2025',
    expires: 'May 2028',
  },
  {
    title: 'Financial Literacy 101',
    credentialId: '0LZ0R03WQP65',
    issued: 'Apr 2025',
    expires: 'Apr 2028',
  },
  {
    title: 'Belajar Pengembangan Machine Learning',
    credentialId: '53XEDGE79PRN',
    issued: 'Apr 2025',
    expires: 'Apr 2028',
  },
  {
    title: 'Belajar Machine Learning untuk Pemula',
    credentialId: 'KEXL7M87MXG2',
    issued: 'Mar 2025',
    expires: 'Mar 2028',
  },
  {
    title: 'Belajar Analisis Data dengan Python',
    credentialId: 'GRX53WNJKZ0M',
    issued: 'Feb 2025',
    expires: 'Feb 2028',
  },
  {
    title: 'Belajar Machine Learning untuk Pemula',
    credentialId: '81P2V7VMYPOY',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
  },
  {
    title: 'Belajar Dasar Manajemen Proyek',
    credentialId: 'JMZVDN60OZN9',
    issued: 'Aug 2023',
    expires: 'Aug 2026',
    expired: true,
  },
  {
    title: 'Belajar Dasar Visualisasi Data',
    credentialId: '81P2V8LNNPOY',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
  },
  {
    title: 'Cloud Practitioner Essentials (Belajar Dasar AWS Cloud)',
    credentialId: '81P2V8VEQPOY',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
  },
  {
    title: 'Memulai Pemrograman dengan Python',
    credentialId: '07Z6WGR5YZQR',
    issued: 'Dec 2023',
    expires: 'Dec 2026',
    skills: ['Data Analysis'],
  },
  {
    title: 'Belajar Membuat Aplikasi Back-End untuk Pemula',
    credentialId: '4EXG40GD1PRL',
    issued: 'Nov 2023',
    expires: 'Nov 2026',
    skills: ['JavaScript'],
  },
  {
    title: 'Belajar Dasar Structured Query Language (SQL)',
    credentialId: 'JMZV1LMKQXN9',
    issued: 'Oct 2023',
    expires: 'Oct 2026',
    skills: ['SQL'],
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    credentialId: '1RXY0QYNQZVM',
    issued: 'Oct 2023',
    expires: 'Oct 2026',
    skills: ['Android basic'],
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    credentialId: '6RPN4G834X2M',
    issued: 'Oct 2023',
    expires: 'Oct 2026',
    skills: ['JavaScript'],
  },
  {
    title: 'Memulai Pemrograman dengan Kotlin',
    credentialId: '2VX3J5LO4PYQ',
    issued: 'Jun 2023',
    expires: 'Jun 2026',
    expired: true,
  },
];

export const dicodingCredentialUrl = (credentialId: string): string =>
  `https://www.dicoding.com/certificates/${credentialId}`;
