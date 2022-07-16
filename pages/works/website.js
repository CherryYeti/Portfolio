import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import Footer from "../../components/footer";
import Layout from "../../components/layouts/article";
import Links from "../../components/links";
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title="Website">
            <Container>
                <Title>
                    Website <Badge>2022</Badge>
                </Title>
                <P>
                    This website was created using
                    {' '}
                    {' '}
                    {' '}
                    <Link href="https://reactjs.org/" target="_blank">React JS<ExternalLinkIcon mx="2px" /></Link>,
                    <Link href="https://chakra-ui.com/" target="_blank">Chakra UI<ExternalLinkIcon mx="2px" /></Link>, and&nbsp;
                    <Link href="https://nextjs.org/" target="_blank">Next JS<ExternalLinkIcon mx="2px" /></Link>.
                    The video that I learned all of this from is
                    {' '}
                    <Link href="https://www.youtube.com/watch?v=bSMZgXzC9AA" target="_blank">this video<ExternalLinkIcon mx="2px" /></Link>
                    ,made by one of my favorite youtubers
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://portfolio-cherryyeti.vercel.app/' target="_blank">
                            https://portfolio-cherryyeti.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Any modern web browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href='https://www.github.com/CherryYeti/portfolio/' target="_blank">
                            https://www.github.com/CherryYeti/portfolio/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Links />
                <Footer />
            </Container>
        </Layout>
    )
}
export default Work