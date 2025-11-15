import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Calendar, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'

export default async function BlogPage() {
  const supabase = await createClient()
  
  const { data: posts } = await supabase
    .from('blog_posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Blog BIOTEC</h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Artigos, reflexões e novidades sobre educação científica e divulgação da ciência
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts?.map((post) => (
                  <Card key={post.id} className="border-2 hover:border-primary transition-colors flex flex-col">
                    <CardHeader>
                      <div className="aspect-video relative rounded-lg mb-4 overflow-hidden">
                        <img
                          src={post.image_url || "/placeholder.svg?height=300&width=400"}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <CardTitle className="text-xl leading-tight">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        {post.excerpt}
                      </p>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>Por {post.author}</p>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.published_at).toLocaleDateString('pt-BR')}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="w-full" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Ler mais
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
