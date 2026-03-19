import { Link } from 'react-router-dom'

const samplePosts = [
  { id: '1', title: 'How I built this portfolio' },
  { id: '2', title: 'React routing tips' },
]

function Blog() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold text-white">Blog</h1>
      <ul className="space-y-3">
        {samplePosts.map((post) => (
          <li key={post.id}>
            <Link className="text-cyan-300 hover:text-cyan-200" to={`/blog/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Blog
