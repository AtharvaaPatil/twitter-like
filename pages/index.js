import Link from 'next/link';
import fetch from 'isomorphic-unfetch'; // helps us make https calls on next
import {Button,Card, Divider} from 'semantic-ui-react'

const Index = ({posts}) => {
  return (
  <div className='posts-container'>
    <h1>Posts</h1>
    <div className='grid wrapper'>
      {posts.map(post => {
        return (
          <div key={post._id}>
            <Card>
              <Card.Content>
                <Card.Header>
                  <Link href={`/${post._id}`}>
                    <a>{post.title}</a>
                  </Link>
                </Card.Header>
              </Card.Content>
              <Card.Content extra>
                <Link href={`/${post._id}`}>
                  <Button primary>View</Button>
                </Link>
                <Link href={`/${post._id}/edit`}>
                  <Button primary>Edit</Button>
                </Link>
              </Card.Content>
            </Card>
          </div>
        )
      })}
    </div>
  </div>
)
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/posts');
  const { data } = await res.json(); // destructure the data

  return { posts: data}
}

// getInitialProps next.js function that allows us to run some code before the actual component gets rendered out to the page runs server side so we make request to get data that we want on the index page and return that data to prop

export default Index;