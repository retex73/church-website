import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 text-white" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="flex items-center" aria-label="Home">
            <Image src="/logo.png" alt="Unitarian Logo" width={100} height={100} />
          </Link>
          <div className="ml-10">
            <ul className="flex gap-8 list-none" role="menubar">
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">HOME</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">ABOUT</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">SERVICES</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">RENT OUR SPACES</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">VIDEOS</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">EVENTS</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">BLOG</Link></li>
              <li role="none"><Link href="#" className="hover:text-yellow-400" role="menuitem">CONTACT</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[700px] bg-black pt-16">
        <div className="absolute inset-0 z-10">
          <div className="h-full max-w-7xl mx-auto grid md:grid-cols-2 items-center">
            {/* Text Content */}
            <div className="relative px-4 pt-40 text-left hero-content">
              <div className="space-y-1 text-2xl md:text-3xl lg:text-4xl font-light text-white">
                <p>We love <span className="font-medium">Jesus</span>. We love <span className="font-medium">Buddha</span> too.</p>
                <p>And <span className="font-medium">Muhammad</span> and <span className="font-medium">Krishna</span> and</p>
                <p><span className="font-medium">Moses</span> and <span className="font-medium">Guru Nanak</span> and <span className="font-medium">Julian</span></p>
                <p><span className="font-medium">of Norwich</span>. And lots of other folks.</p>
                <p className="mt-3">We are <span className="font-medium text-yellow-400">Unitarians</span>.</p>
              </div>
              <p className="text-lg mt-3 text-gray-300">Welcome to the Dunham Road Unitarian Chapel, Altrincham.</p>
            </div>

            {/* Image Container */}
            <div className="relative h-full overflow-hidden hero-image">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/80 z-10"></div>
              <Image
                src="/hero-image.jpg"
                alt="Diverse hands united"
                fill
                sizes="50vw"
                quality={100}
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="relative h-[430px] bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] shadow-xl rounded-lg overflow-hidden">
            <Image
              src="/community.jpg"
              alt="Our diverse community"
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center">
            <h2 className="text-4xl font-playfair mb-4">Join us</h2>
            <p className="text-xl mb-6">
              We would love to see you at our next Sunday service, normally held 11.30 am every Sunday both in person and via Zoom
            </p>
            <Link
              href="#"
              className="inline-block bg-red-500 text-white px-8 py-3 rounded shadow-lg hover:bg-red-600 transition-colors"
            >
              CHECK UPCOMING DATES
            </Link>
          </div>
        </div>
      </section>

      {/* Progressive Section */}
      <section className="bg-yellow-400 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-12">We are <span className="font-medium">progressive</span></h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4">
                <Image src="/icons/church.png" alt="Church icon" width={80} height={80} />
              </div>
              <p className="text-sm">1st to have female ministers</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4">
                <Image src="/icons/marriage.png" alt="Marriage icon" width={80} height={80} />
              </div>
              <p className="text-sm">1st to marry divorcees of any faith</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4">
                <Image src="/icons/same-sex.png" alt="Same sex icon" width={80} height={80} />
              </div>
              <p className="text-sm">1st to offer same sex marriages</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4">
                <Image src="/icons/ceremony.png" alt="Ceremony icon" width={80} height={80} />
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
