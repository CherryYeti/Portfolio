import { Container, Badge, Link, List, ListItem, Button, SimpleGrid, GridItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import NextLink from 'next/link'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { Heading } from "@chakra-ui/react";
import Links from "../../components/links";
const Work = () => {
    return (
        <Layout title="Website">
            <Container>
                <Title>
                    Website <Badge>2022</Badge>
                </Title>
                <P>
                    This website was created using ReactJS, Chakra UI, and NextJS.
                    The video that I learned all of this from is {' '}
                    <NextLink href="https://www.youtube.com/watch?v=bSMZgXzC9AA">
                        <Link>This Video</Link>
                    </NextLink>,
                    made by one of my favorite youtubers
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://portfolio-cherryyeti.vercel.app/'>
                        https://portfolio-cherryyeti.vercel.app/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Any Modern Web Browser</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href='https://www.github.com/CherryYeti/portfolio/'>
                            https://www.github.com/CherryYeti/portfolio/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Links />
            </Container>
        </Layout>
    )
}
export default Work