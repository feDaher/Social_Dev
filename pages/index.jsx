import styled from 'styled-components'
import Navbar from '../src/components/layout/Navbar'
import Container from '../src/components/layout/Container'
import CreatePost from '../src/components/cards/CreatePost'
import H3 from '../src/components/typography/H3'
import Post from '../src/components/cards/Post'
import { withIronSessionSsr} from 'iron-session/next'
import { ironConfig } from '../lib/middlewares/ironSession'

const Content = styled.div`
  margin: 50px 0;
`
const LastPostText = styled(H3)`
  padding: 40px 0;
`
const RefreshPost = styled.span`
  font-weight: bold;
  color: ${props => props.theme.primary};
  cursor: pointer;
`
const RefreshPostsContainer = styled.div`
  text-align: center;
`
const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
`

function HomePage ( { user }) {
  return (
    <>
      <Navbar /> 
      <Content>
        <Container>
          <CreatePost username={user.user} />
            <LastPostText>Últimas postagens:</LastPostText>
              <RefreshPostsContainer> 
                <RefreshPost>Carregar novas postagens</RefreshPost>
              </RefreshPostsContainer>
              <PostContainer>
                <Post> </Post>
                <Post> </Post>
                <Post> </Post>
              </PostContainer>
        </Container>
      </Content>
    </>
  )
}

export const getServerSideProps = withIronSessionSsr (
  async function getServerSideProps ({ req }) {
    const user = req.session.user
    if (!user) {
      return{
        redirect: {
          permanent: false,
          destination:'/login'
        }
      }
    }
    return {
      props: {
        user: user // ou somente user.
      }
    }
  },
  ironConfig
 )

export default HomePage