'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MessageSquare, Trash2 } from 'lucide-react'
import { useI18n } from '@/lib/i18n/context'
import Link from 'next/link'

type Comment = {
  id: string
  content: string
  created_at: string
  user_id: string
  user_profiles: {
    display_name: string
    is_admin: boolean
  }
}

export function CommentsSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useI18n()
  const supabase = createClient()

  useEffect(() => {
    loadComments()
    loadUser()
  }, [postId])

  const loadUser = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    setUser(user)
  }

  const loadComments = async () => {
    const { data } = await supabase
      .from('blog_comments')
      .select(`
        *,
        user_profiles (
          display_name,
          is_admin
        )
      `)
      .eq('post_id', postId)
      .order('created_at', { ascending: false })

    if (data) {
      setComments(data as Comment[])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newComment.trim() || !user) return

    setIsLoading(true)

    try {
      const { error } = await supabase
        .from('blog_comments')
        .insert([
          {
            post_id: postId,
            user_id: user.id,
            content: newComment.trim(),
          },
        ])

      if (error) throw error

      setNewComment('')
      loadComments()
    } catch (error) {
      console.error('Error posting comment:', error)
      alert('Erro ao publicar comentário')
    } finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async (commentId: string) => {
    if (!confirm('Tem certeza que deseja excluir este comentário?')) return

    const { error } = await supabase
      .from('blog_comments')
      .delete()
      .eq('id', commentId)

    if (error) {
      alert('Erro ao excluir comentário')
    } else {
      loadComments()
    }
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-2">
        <MessageSquare className="h-6 w-6" />
        <h2 className="text-2xl font-bold">
          {t.blog.comments} ({comments.length})
        </h2>
      </div>

      {/* Comment Form */}
      {user ? (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Textarea
                placeholder={t.blog.writeComment}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                rows={3}
                required
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? '...' : t.blog.postComment}
              </Button>
            </form>
          </CardContent>
        </Card>
      ) : (
        <Card>
          <CardContent className="py-8 text-center">
            <p className="text-muted-foreground mb-4">{t.blog.loginToComment}</p>
            <Button asChild>
              <Link href="/auth/login">{t.auth.login}</Link>
            </Button>
          </CardContent>
        </Card>
      )}

      {/* Comments List */}
      <div className="space-y-4">
        {comments.length === 0 ? (
          <Card>
            <CardContent className="py-8 text-center text-muted-foreground">
              {t.blog.noComments}
            </CardContent>
          </Card>
        ) : (
          comments.map((comment) => (
            <Card key={comment.id}>
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold">
                      {comment.user_profiles?.display_name || 'Usuário'}
                    </span>
                    {comment.user_profiles?.is_admin && (
                      <Badge variant="default">{t.blog.admin}</Badge>
                    )}
                    <span className="text-sm text-muted-foreground">
                      {new Date(comment.created_at).toLocaleDateString('pt-BR')}
                    </span>
                  </div>
                  {user?.id === comment.user_id && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(comment.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {comment.content}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
