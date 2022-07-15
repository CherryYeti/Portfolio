import { Container, Heading, Box, SimpleGrid, Divider } from "@chakra-ui/react"
import Section from '../components/section'
import { WorkGridItem } from "../components/grid-item"
import thumbFirestarter from "../public/images/works/firestarter.png"

const works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id="firestarter" title="Firestarter" thumbnail={thumbFirestarter}>
                        Discord bot for launching and managin minecraft servers
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default works