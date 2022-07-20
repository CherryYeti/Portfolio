import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { WorkGridItem } from "../components/grid-item"
import Footer from "../components/footer"
import Layout from "../components/layouts/article"
import Section from '../components/section'
import thumbFirestarter from "../public/images/works/firestarter.png"
import thumbPortfolio from "../public/images/works/portfolio.png"
import thumbFirestarterWeb from  "../public/images/works/firestarter-website.png"
import thumbOsu from "../public/images/works/osu.png"
const works = () => {
    return (
        <Layout title="Works">
            <Container>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem id="firestarter" title="Firestarter" thumbnail={thumbFirestarter} year={2022}>
                            FireStarter is a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Node.js
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="website" title="This Website" thumbnail={thumbPortfolio} year={2022}>
                            This website was created using ReactJS, Chakra UI, and NextJS
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="firestarter-website" title="FireStarter Website" thumbnail={thumbFirestarterWeb} year={2022}>
                            The website was created using ReactJS, Chakra UI, and NextJS
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="osu-scripts" title="Osu on Linux Install Scripts" thumbnail={thumbOsu} year={2022}>
                            Simple bash scripts to install and run Osu on linux!
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Footer />
            </Container>
        </Layout>
    )
}

export default works