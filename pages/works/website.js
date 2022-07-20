import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import Footer from "../../components/footer";
import Layout from "../../components/layouts/article";
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title="Website">
            <Container>
                <Title>
                    This Website <Badge>2022</Badge>
                </Title>
                <P>
                    This website was created using
                    {' '}
                    {' '}
                    {' '}
                    <Link href="https://reactjs.org/" target="_blank"><u>React JS</u><ExternalLinkIcon mx="2px" /></Link>,
                    <Link href="https://chakra-ui.com/" target="_blank"><u>Chakra UI</u><ExternalLinkIcon mx="2px" /></Link>, and&nbsp;
                    <Link href="https://nextjs.org/" target="_blank"><u>Next JS</u><ExternalLinkIcon mx="2px" /></Link>.
                    The video that I learned all of this from is
                    {' '}
                    <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA" target="_blank"><u> this video</u><ExternalLinkIcon mx="2px" /></Link>
                    , made by one of my favorite youtubers
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://portfolio-cherryyeti.vercel.app/' target="_blank">
                            <u>https://portfolio-cherryyeti.vercel.app/</u>  <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Any modern web browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href='https://www.github.com/CherryYeti/portfolio/' target="_blank">
                            <u>https://www.github.com/CherryYeti/portfolio/</u>  <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Footer />
            </Container>
        </Layout>
    )
}
export default Work