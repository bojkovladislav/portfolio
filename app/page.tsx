import Encryption from '@/components/main/Encryption';
import Hero from '@/components/main/Hero';
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';
import AnimatedCursor from 'react-animated-cursor';

export default function Home() {
  return (
    <main className="h-full w-full overflow-x-hidden">
      <div className="flex flex-col gap-20">
        <AnimatedCursor
          innerSize={10}
          outerSize={10}
          color="242, 194, 255"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            'a',
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            'label[for]',
            'select',
            'textarea',
            'button',
            '.link',
            {
              target: '.custom',
            },
          ]}
        />
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
