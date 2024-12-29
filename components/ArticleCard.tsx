import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface ArticleCardProps {
  title: string
  excerpt: string
  image: string
  author: {
    name: string
    avatar: string
    date: string
  }
  href: string
}

export function ArticleCard({
  title,
  excerpt,
  image,
  author,
  href
}: ArticleCardProps) {
  return (
    <Link href={href}>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-medium mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{excerpt}</p>
          <div className="flex items-center space-x-4">
            <Avatar className="h-8 w-8">
              <AvatarImage src={author.avatar} />
              <AvatarFallback>{author.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <span>{author.name}</span>
              <span>•</span>
              <span>{author.date}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

