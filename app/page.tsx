import Layout from '@/components/Layout'
import { Breadcrumb } from '@/components/Breadcrumb'
import { Hero } from '@/components/Hero'
import { ArticleCard } from '@/components/ArticleCard'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'My Mind', href: '/' },
            { label: 'What is HTML?', href: '#' },
          ]}
        />

        <div className="my-8">
          <h1 className="text-4xl font-medium mb-4">
            HTML: Dasar Web Developing
          </h1>
          <p className="text-gray-600 max-w-3xl">
            HTML, atau HyperText Markup Language, adalah salah satu teknologi paling mendasar dalam dunia web development. Setiap kali kamu membuka sebuah website, baik itu untuk mencari informasi, membaca berita, atau menonton video, di balik layar browser kamu sedang membaca dan merender HTML untuk menampilkan konten tersebut. Tapi apa sebenarnya HTML itu, bagaimana ia tercipta, dan apa kegunaannya? Yuk, kita bahas!
          </p>
          <h3 className='mt-2'>Apa itu HTML?</h3>
          <p className="text-gray-600 max-w-3xl mb-2">
            HTML adalah bahasa markup yang digunakan untuk membuat struktur dasar halaman web. Ia bukan bahasa pemrograman seperti JavaScript atau Python, melainkan sebuah sistem penandaan (markup) yang membantu browser memahami elemen-elemen apa yang harus ditampilkan di layar. Dengan HTML, kamu bisa menentukan bagian mana dari halaman yang menjadi judul, paragraf, gambar, tabel, atau bahkan video.

            Contoh sederhana dokumen HTML:
          </p>
          <Image src="/Snap.png" alt="HTML" width={300} height={300} />
          <p className="text-gray-600 max-w-3xl mt-2">
            HTML adalah fondasi dari segala sesuatu yang kita lihat di web. Meski terlihat sederhana, ia memiliki kekuatan besar dalam membangun dunia digital yang kita nikmati setiap hari. Dengan memahami HTML, kamu telah mengambil langkah pertama menuju dunia pengembangan web. Jangan takut untuk bereksperimen dan terus belajar, karena dunia web development selalu berkembang.
          </p>
        </div>

        {/* <Hero
          title="Sophia Mesabhi from Untitled Ventures on Sustainable and Profitable Growth & What We Can Learn From the Gumroad Mess"
          description="A deep dive into sustainable growth strategies and lessons learned from recent market developments."
          image="/placeholder.svg?height=600&width=1200"
          author={{
            name: "Frankie Sullivan",
            avatar: "/placeholder.svg?height=40&width=40",
            date: "10 April 2024"
          }}
          categories={["Design", "Retail", "Business"]}
          readTime="12 min"
        />

        <div className="my-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium">Featured blog posts</h2>
            <a href="#" className="text-blue-600 hover:text-blue-800">
              View all posts
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <ArticleCard
                key={i}
                title="Interview with Photographer & UX Designer"
                excerpt="An insightful conversation about the intersection of photography and user experience design."
                image="/placeholder.svg?height=200&width=300"
                author={{
                  name: "Alex Rivera",
                  avatar: "/placeholder.svg?height=32&width=32",
                  date: "8 April 2024"
                }}
                href="#"
              />
            ))}
          </div>
        </div> */}
      </div>
    </Layout>
  )
}
