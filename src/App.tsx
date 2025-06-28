
import { useEffect, useState } from 'react'

import FontFaceObserver from 'fontfaceobserver'
import { InView } from 'react-intersection-observer'
import './App.css'

function App() {
  const [hideHeroSection, setHideHeroSection] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fontData: Record<string, object> = {
      'Arsenal SC': {},
      'Fahkwang': {},
      'Six Caps': {}
    };

    let observers: Promise<void>[] = [];

    Object.keys(fontData).forEach(function (family) {
      var data = fontData[family];
      var obs = new FontFaceObserver(family, data);
      observers.push(obs.load());
    });

    Promise.all(observers)
      .then(() => setLoaded(true))
      .catch(function (err) {
        console.warn('Some critical font are not available:', err);
        setLoaded(false);
      });
  }, [])

  const projects = [
    {
      img: "/img/nue.png",
      name: "Nue Cloud Service",
      link: "https://nue.rf.gd"
    },
    {
      img: "/img/florania.png",
      name: "Florania Shop",
      link: "https://florania.rf.gd"
    },
    {
      img: "/img/news.png",
      name: "Baybayin News",
      link: "#"
    }];

  if (!loaded) {
    return <div className='flex items-center justify-center h-screen'>
      Loading...
    </div>
  }
  return (
    <>
      <main className='bg-zinc-800 text-neutral-100 overflow-hidden'>
        <img src="/background.jpg" className='fixed transition-all opacity-100 top-0 left-0 w-full h-full object-cover' />
        <header className='fixed top-0 left-0 w-full border-b border-b-zinc-600 z-50'>
          <div className='px-5 md:px-8 md:mx-auto lg:max-w-6xl py-5 flex items-center text-neutral-100'>
            <h1 className={`uppercase font-bold text-xl`}>Lee Lorem Ipsum</h1>
            <ul className={`hidden md:flex items-center ml-auto text-xl`} data-swipe>
              <li className='mr-8'>
                <a href="#stack">Tech Stack</a>
              </li>
              <li className='mr-8'>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </header>

        <section className='fixed top-0 left-0 w-full h-full' hidden={hideHeroSection ? true : false}>
          <div className='min-h-screen flex flex-col items-center justify-center px-5 md:px-20 md:justify-start md:flex-row md:mx-auto lg:px-0 lg:max-w-6xl'>
            <div className='basis-full md:basis-1/2 md:mr-10 lg:mr-0'>
              <span className='uppercase pl-1'>Hi, I am Lee <span className='text-4xl font-bold'>李</span></span>
              <h1 className='font-["Six_Caps"] uppercase text-9xl md:text-[10rem] lg:text-[13rem] relative leading-none'>
                <span className='block clear-both'>Developer</span>
                <span className='block clear-both'>&amp;Designer</span>
              </h1>
            </div>
            <div className='mt-8 md:mt-0 basis-full md:basis-1/2'>
              <div>
                <p className='text-2xl md:text-4xl lg:text-7xl mb-5 font-semibold uppercase flex flex-col'>
                  <span className='inline-block mr-4 mb-4 md:mb-7 lg:mb-10'>Innovative.</span>
                  <span className='inline-block mr-4 mb-4 md:mb-7 lg:mb-10'>Dedicated.</span>
                  <span className='inline-block'>Curious.</span>
                </p>
              </div>
              <div className='mt-10 flex items-center'>
                <a href="#contact" className='flex-auto text-center block text-zinc-100 px-10 transition-all border-2 border-zinc-100 py-2 text-xl md:3xl lg:text-5xl'>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>
        <div className='pt-[100vh]'>
          <section className='relative bg-white text-zinc-950' id="stack">
            <div className='max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center'>
              <div className='relative'>
                <h1 className='font-["Six_Caps"] uppercase text-8xl md:text-[10rem] lg:text-[13rem] relative leading-none px-5 text-center sm:px-0'>
                  <span className='block clear-both'>Technology Stack</span>
                </h1>
              </div>
              <div className='relative mt-10'>
                <ul className='grid grid-cols-2 gap-5 sm:flex sm:items-center sm:justify-center flex-wrap leading-loose text-xl md:px-10 lg:px-0 md:text-3xl' data-swipe>
                  <li className='text-center sm:text-left sm:mr-8'>
                    PHP
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    Node.js
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    HTML
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    CSS
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    Javascript
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    Typescript
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    React
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    React Native
                  </li>
                  <li className='text-center sm:text-left sm:mr-8'>
                    Svelte
                  </li>
                  <li className='text-center sm:text-left'>
                    Laravel
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <InView threshold={0} trackVisibility={true} delay={100} onChange={(inView, _entry) => {
            if (inView) {
              setHideHeroSection(true);
            } else {
              setHideHeroSection(false);
            }
          }}>
            <section className='max-w-6xl mx-auto'>
              <div className='min-h-screen flex flex-col items-center justify-center'>
                <div className='relative'>
                  <h1 className='font-["Six_Caps"] uppercase text-8xl md:text-[10rem] lg:text-[13rem] relative leading-none px-5 text-center sm:px-0'>
                    <span className='block clear-both'>Software Integration</span>
                  </h1>
                </div>
                <div className='relative mt-10'>
                  <ul className='grid grid-cols-2 gap-5 sm:flex sm:items-center sm:justify-center flex-wrap leading-loose text-xl md:px-10 lg:px-0 md:text-3xl' data-swipe>
                    <li className='text-center sm:text-left sm:mr-8'>
                      Github/Gitlab
                    </li>
                    <li className='text-center sm:text-left sm:mr-8'>
                      VSCode
                    </li>
                    <li className='text-center sm:text-left sm:mr-8'>
                      Android Studio
                    </li>
                    <li className='text-center sm:text-left sm:mr-8'>
                      Insomnia
                    </li>
                    <li className='text-center sm:text-left sm:mr-8'>
                      XAMPP
                    </li>
                    <li className='text-center sm:text-left sm:mr-8'>
                      Gemini
                    </li>
                    <li className='text-center sm:text-left sm:mr-8'>
                      Firebase
                    </li>
                    <li className='text-center sm:text-left'>
                      Termux
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </InView>
          <section className='relative bg-white text-zinc-950' id="projects">
            <div className='py-10 md:py-0 md:px-20 xl:px-0 xl:max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center'>
              <div className='relative'>
                <h1 className='font-["Six_Caps"] uppercase text-8xl md:text-[10rem] lg:text-[13rem] relative leading-none px-5 text-center sm:px-0'>
                  <span className='block clear-both'>Personal Projects</span>
                </h1>
              </div>
              <div className='relative mt-10'>
                <ul className='grid grid-cols-1 px-5 md:px-0 md:grid-cols-3 gap-10 mt-7 md:mt-0'>
                  {projects.map((project, index) => (
                    <li key={index}>
                      <div className='relative group overflow-hidden rounded-3xl cursor-pointer'>
                        <img src={project.img} className='w-full h-auto aspect-square object-fill' />
                        <div className='bg-black/80 backdrop-blur-md absolute top-0 opacity-0 left-0 w-full h-full flex items-center justify-center text-white transition-all group-hover:opacity-100'>
                          <b>{project.name}</b>
                        </div>
                      </div>
                    </li>
                  ))}

                </ul>
              </div>
            </div>
          </section>
          <InView threshold={0} trackVisibility={true} delay={100} onChange={(inView, _entry) => {
            if (inView) {
              setHideHeroSection(true);
            }
          }}>
            <section className='xl:max-w-6xl md:mx-auto' id="contact">
              <div className='md:px-20 xl:px-0 min-h-screen flex items-center justify-center flex-col md:items-center md:flex-row'>
                <div className='flex-none md:basis-1/2 relative lg:pl-10'>
                  <span className='uppercase pl-1 absolute h-full -rotate-90 left-0 top-0 text-nowrap hidden md:inline-block'>Got something good?</span>
                  <h1 className='font-["Six_Caps"] uppercase text-8xl w-[220px] md:w-auto md:text-[10rem] lg:text-[13rem] relative leading-none'>
                    <span className='block clear-both'>Let us</span>
                    <span className='block clear-both'>Connect</span>
                  </h1>
                </div>
                <div className='flex-none mt-16 md:mt-0 md:basis-1/2 relative'>
                  <ul className='inline-flex flex-col text-xl lg:text-5xl' data-swipe>
                    <li className='mb-6'>
                      <a href="#">
                        LinkedIn
                      </a>
                    </li>
                    <li className='mb-6'>
                      <a href="https://github.com/ychwah">
                        Github
                      </a>
                    </li>
                    <li className='mb-6'>
                      <a href="https://facebook.com/rikimurasan">
                        Facebook
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        Discord
                      </a>
                    </li>
                  </ul>
                  <div className='flex items-center justify-center'>
                    <a href="mailto:xxlxx@duck.com" className='inline-block border border-zinc-100 text-zinc-100 px-5 md:px-8 lg:px-10 w-full text-center py-3 mt-5 text-xl md:text-2xl lg:text-5xl hover:bg-zinc-100 hover:text-zinc-950'>xxlxx[at]duck.com</a>
                  </div>
                </div>
              </div>
            </section>
          </InView>
        </div>
      </main>
    </>
  )
}

export default App
