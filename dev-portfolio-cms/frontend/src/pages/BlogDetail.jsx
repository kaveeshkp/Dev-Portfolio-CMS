import { useParams } from 'react-router-dom'

function BlogDetail() {
  const { id } = useParams()

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold text-white">Blog Detail</h1>
      <p className="text-slate-300">Showing post id: {id}</p>
    </section>
  )
}

export default BlogDetail
