import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Unitarian Logo" width={50} height={50} />
          </Link>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-yellow-400">HOME</Link>
            <Link href="#" className="hover:text-yellow-400">ABOUT</Link>
            <Link href="#" className="hover:text-yellow-400">SERVICES</Link>
            <Link href="#" className="hover:text-yellow-400">RENT OUR SPACES</Link>
            <Link href="#" className="hover:text-yellow-400">VIDEOS</Link>
            <Link href="#" className="hover:text-yellow-400">EVENTS</Link>
            <Link href="#" className="hover:text-yellow-400">BLOG</Link>
            <Link href="#" className="hover:text-yellow-400">CONTACT</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white pt-20">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/hero-image.jpg"
          alt="Diverse hands united"
          fill
          sizes="100vw"
          quality={100}
          className="object-cover"
          priority
        />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-left">
          <div className="space-y-4 text-3xl md:text-4xl lg:text-5xl font-light">
            <p>We love <span className="font-medium">Jesus</span>. We love <span className="font-medium">Buddha</span> too.</p>
            <p>And <span className="font-medium">Muhammad</span> and <span className="font-medium">Krishna</span> and</p>
            <p><span className="font-medium">Moses</span> and <span className="font-medium">Guru Nanak</span> and <span className="font-medium">Julian</span></p>
            <p><span className="font-medium">of Norwich</span>. And lots of other folks.</p>
            <p className="mt-8">We are <span className="font-medium text-yellow-400">Unitarians</span>.</p>
          </div>
          <p className="mt-8 text-xl">Welcome to the Dunham Road Unitarian Chapel, Altrincham.</p>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px]">
            <Image
              src="/community.jpg"
              alt="Diverse community"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-4xl font-playfair mb-6">Join us</h2>
            <p className="text-xl mb-8">
              We would love to see you at our next Sunday service, normally held 11.30 am every Sunday both in person and via Zoom
            </p>
            <Link
              href="#"
              className="inline-block bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors"
            >
              CHECK UPCOMING DATES
            </Link>
          </div>
        </div>
      </section>

      {/* Progressive Section */}
      <section className="py-20 bg-yellow-400">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-16">We are <span className="font-medium">progressive</span></h2>
          <div className="grid md:grid-cols-4 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <Image src="/icons/church.png" alt="Church icon" width={96} height={96} />
              </div>
              <p className="text-sm">1st to have female ministers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <Image src="/icons/marriage.png" alt="Marriage icon" width={96} height={96} />
              </div>
              <p className="text-sm">1st to marry divorcees of any faith</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <Image src="/icons/same-sex.png" alt="Same sex icon" width={96} height={96} />
              </div>
              <p className="text-sm">1st to offer same sex marriages</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 mb-4">
                <Image src="/icons/ceremony.png" alt="Ceremony icon" width={96} height={96} />
              </div>
              <p className="text-sm">1st in the North West to perform same sex ceremonies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-16">We are part of <span className="font-medium">one big Unitarian family</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <p className="text-5xl font-medium text-red-500 mb-4">179</p>
              <p>Unitarian churches<br />in the UK</p>
            </div>
            <div>
              <p className="text-5xl font-medium text-red-500 mb-4">13</p>
              <p>churches in Greater<br />Manchester</p>
            </div>
            <div>
              <p className="text-5xl font-medium text-red-500 mb-4">7,000</p>
              <p>UK Unitarians</p>
            </div>
            <div>
              <p className="text-5xl font-medium text-red-500 mb-4">150</p>
              <p>UK Unitarian<br />ministers</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-16">Can you guess these <span className="font-medium">famous Unitarians?</span></h2>
          <div className="relative h-[200px] mb-8">
            <Image
              src="/famous-unitarians.jpg"
              alt="Famous Unitarians"
              fill
              className="object-contain"
            />
          </div>
          <Link
            href="#"
            className="inline-block bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition-colors"
          >
            TAKE THE QUIZ
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <Image
            src="/logo.png"
            alt="Unitarian Logo"
            width={60}
            height={60}
            className="mx-auto mb-6"
          />
          <div className="flex justify-center space-x-6">
            <Link href="#" className="hover:text-yellow-400">Facebook</Link>
            <Link href="#" className="hover:text-yellow-400">Twitter</Link>
            <Link href="#" className="hover:text-yellow-400">Instagram</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
