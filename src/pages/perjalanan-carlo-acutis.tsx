import React from 'react';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Timeline from '@site/src/components/TimeLine';
import TimelineItem from '@site/src/components/TimeLine/TimeLineItem';

export default function PerjalananCarloAcutis() {
  return (
    <Layout title="Perjalanan Carlo Acutis" description="Perjalanan Carlo Acutis Sejak Kecil">
      <header className='hero hero--primary'>
        <div className="container">
          <Heading as="h1" className="hero__title">
            Perjalanan Carlo Acutis
          </Heading>
          <p className="hero__subtitle">Menelusuri kehidupan singkat namun luar biasa dari Carlo Acutis</p>
        </div>
      </header>
      <main>
        <section>
          <div className='container margin-vert--lg'>
            <Timeline variant='primary'>
              <TimelineItem align='left' textAlign='left' style={{ backgroundColor: 'var(--ifm-background-color)', border: 'var(--ifm-button-border-width) solid var(--ifm-color-primary)' }}>
                <h2>1991</h2>
                <img className='margin-vert--lg' src={require('@site/static/img/foto-carlo-acutis/foto_021.jpg').default} alt="not-found" style={{ maxWidth: '100%', maxHeight: '35vh', display: 'block', margin: '1rem auto' }} />
                <img className='margin-vert--lg' src={require('@site/static/img/foto-carlo-acutis/foto_004.jpg').default} alt="not-found" style={{ maxWidth: '100%', maxHeight: '35vh', display: 'block', margin: '1rem auto' }} />
                <p>Carlo Acutis lahir pada 3 Mei di London, Inggris. Ia adalah anak dari Andrea Acutis dan Antonia Salzano.</p>
                <p>Pada 18 Mei Carlo dibaptis di gereja Our Lady of Dolours.</p>
                <p className='margin--none'>Carlo kembali ke Milan bersama orangtuanya pada 8 September.</p>
              </TimelineItem>
              <TimelineItem align='right' textAlign='left' style={{ backgroundColor: 'var(--ifm-background-color)', border: 'var(--ifm-button-border-width) solid var(--ifm-color-primary)' }}>
                <h2>1995</h2>
                <blockquote className='quote-block'>
                Semua orang dilahirkan sebagai orisinal, tetapi banyak yang mati sebagai fotokopi.
                </blockquote>
                <p className='margin--none'>Carlo Acutis bersekolah di taman kanak-kanak umum setempat, Parco Pagani, di Milan.</p>
              </TimelineItem>
              <TimelineItem align='left' textAlign='left' style={{ backgroundColor: 'var(--ifm-background-color)', border: 'var(--ifm-button-border-width) solid var(--ifm-color-primary)' }}>
                <h2>1997</h2>
                <p>Pada bulan September, Carlo memulai sekolah dasar di institut San Carlo.</p>
                <p className='margin--none'>Tetapi tiga bulan kemudian, ia dipindahkan ke Institut Tommaseo, yang dikelola oleh Suster-suster Santa Marcellina, tempat ia tinggal selama seluruh pendidikan dasar dan menengah pertamanya.</p>
              </TimelineItem>
              <TimelineItem align='right' textAlign='left' style={{ backgroundColor: 'var(--ifm-background-color)', border: 'var(--ifm-button-border-width) solid var(--ifm-color-primary)' }}>
                <h2>1998</h2>
                <p className='margin--none'>Pada 16 Juni, ketika Carlo berusia 7 tahun, ia menerima Sakramen Komuni Pertama di biara para Suster Romite Santo Ambrosius.</p>
              </TimelineItem>
              <TimelineItem align='left' textAlign='left' style={{ backgroundColor: 'var(--ifm-background-color)', border: 'var(--ifm-button-border-width) solid var(--ifm-color-primary)' }}>
                <h2>2003</h2>
                <p className='margin--none'>Pada 24 Mei, Carlo menerima Sakramen Krisma di paroki tempat ia berasal, Santa Maria Segreta.</p>
              </TimelineItem>
            </Timeline>
          </div>
        </section>
      </main>
    </Layout>
  );
}