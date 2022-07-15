import { Container, Badge, Link, List, ListItem, Button, SimpleGrid, GridItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub } from 'react-icons/io5'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";
import Section from "../../components/section";
import { Heading } from "@chakra-ui/react";
import Links from "../../components/links";
const Work = () => {
    return (
        <Layout title="Firestarter">
            <Container>
                <Title>
                    Firestarter <Badge>2022</Badge>
                </Title>
                <P>
                    A node.js discord bot written to help start, stop and manage minecraft servers.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href='https://www.github.com/CherryYeti/firestarter/wiki'>
                            https://www.github.com/CherryYeti/firestarter/wiki <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href='https://www.github.com/CherryYeti/firestarter/'>
                            https://www.github.com/CherryYeti/firestarter/ <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Links />
            </Container>
        </Layout>
    )
}
export default Work