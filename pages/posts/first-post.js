import Link from 'next/link'

const FirstPost = () => {
  return (
  <>
    <h1>First Post</h1>
    <p>
      <Link href='/'>
        <a>Back to home</a>
      </Link>
    </p>
  </>
  )

}

export default FirstPost;