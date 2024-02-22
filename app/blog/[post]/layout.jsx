const BlogLayout = ({ children }) => {
  return children
}
export default BlogLayout

export async function generateMetadata({ params }) {
  return {
    title: params.post.split('-').join(' '),
  }
}
