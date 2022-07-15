import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import thumbFirestarter from "../public/images/works/firestarter.png"
import thumbWebsite from "../public/images/works/website.png"

const works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="firestarter" title="Firestarter" thumbnail={thumbFirestarter}  year={2022}>
                        FireStarter is a free and open source Discord bot used to start, stop and manage options on your minecraft servers using Node.js
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="website" title="This Website" thumbnail={thumbWebsite} year={2022}>
                        This website was created using ReactJS, Chakra UI, and NextJS
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default works