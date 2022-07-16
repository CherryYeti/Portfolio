import { Container, Badge, Link, List, ListItem, Button, SimpleGrid, GridItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import Footer from "../../components/footer";
import Layout from "../../components/layouts/article";
import Links from "../../components/links";
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title="Firestarter">
            <Container>
                <Title>
                    Firestarter <Badge>2022</Badge>
                </Title>
                <P>
                    FireStarter is a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Node.js
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
                <Footer />
            </Container>
        </Layout>
    )
}
export default Work