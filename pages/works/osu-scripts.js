import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, Meta } from "../../components/work";
import Footer from "../../components/footer";
import Layout from "../../components/layouts/article";
import Links from "../../components/links";
import P from '../../components/paragraph'

const Work = () => {
    return (
        <Layout title="Osu on Linux">
            <Container>
                <Title>
                    Osu on Linux Install Scripts <Badge>2021</Badge>
                </Title>
                <P>
                    When I was distro hopping, I found it a pain to have to install Osu! through 10 different steps, so I have consolidated it into some bash scripts.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Debian/Ubuntu/Arch/Fedora</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source Code</Meta>
                        <Link href='https://github.com/CherryYeti/OsuLinuxInstallScripts' target="_blank">
                            <u>https://github.com/CherryYeti/OsuLinuxInstallScripts</u>  <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
                <Footer />
            </Container>
        </Layout>
    )
}
export default Work