import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

interface HeroProps {
  title: string
  description: string
  image: string
  author: {
    name: string
    avatar: string
    date: string
  }
  categories: string[]
  readTime: string
}

export function Hero({
  title,
  description,
  image,
  author,
  categories,
  readTime
}: HeroProps) {
  return (
    <div className="relative h-[600px] overflow-hidden rounded-lg">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <h1 className="text-4xl font-medium text-white mb-4 max-w-3xl">
            {title}
          </h1>
          <p className="text-gray-200 mb-6 max-w-2xl">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={author.avatar} />
                <AvatarFallback>{author.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex items-center space-x-2 text-white">
                <span>{author.name}</span>
                <span>•</span>
                <span>{author.date}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <Badge key={category} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                  {category}
                </Badge>
              ))}
              <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                {readTime} read
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

