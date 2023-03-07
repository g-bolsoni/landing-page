import Head                   from 'next/head';
import { Header }             from '@/components/Header';
import { Course }             from '@/components/Course';
import { Topics }             from '@/components/Topics';
import { MainVideo }          from '@/components/MainVideo';
import { TestimonialsBlue }   from '@/components/TestimonialsBlue';
import { TestimonialsWhite }  from '@/components/TestimonialsWhite';
import { AboutUs }            from '@/components/About_us';
import { Footer }             from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Site de Vendas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/" /> */}
      </Head>
      <Header />
      <Course />
      <Topics />
      <MainVideo />
      <TestimonialsBlue videoUrl="https://www.youtube.com/embed/bkT5G5P9q6E"  videoTitle="Depoimentos 1"/>
      <TestimonialsWhite videoUrl="https://www.youtube.com/embed/oKBRZbTmS_0" videoTitle="Depoimento 2"/>
      <TestimonialsBlue videoUrl="https://www.youtube.com/embed/uggCX6lE6XU"  videoTitle="Depoimento 3"/>
      <TestimonialsWhite videoUrl="https://www.youtube.com/embed/Dv56sQRKcvs" videoTitle="Depoimento 4"/> 
      <AboutUs/>
      <Footer/>
    </>
  )
}
