import { Box, Button, Container, Heading, Image, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import Links from '../components/links'
const Page = () => {
    return (
        <Layout>
            <Container>
                <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
                    Hello, I&apos;m a college student and linux enthusiast.
                </Box>
                <Box display={{ md: 'flex' }}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Jason Javandel
                        </Heading>
                        <p>Fill this in later!</p>
                    </Box>
                </Box>
                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        Work
                    </Heading>
                    <Paragraph>
                        Hello! I am a 17 year old freshman at the University of California Merced.
                        I am majoring in computer science, and I love creating things.
                        My most recent project that I have taken up is {' '}
                        <NextLink href="/works/firestarter">
                            <Link>Firestarter</Link>
                        </NextLink>.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon />} colorScheme="blue">
                                Stuff I've made
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>2004</BioYear>
                        Born in Oakland, California
                    </BioSection>
                    <BioSection>
                        <BioYear>2014</BioYear>
                        Introduced to programming
                    </BioSection>
                    <BioSection>
                        <BioYear>2021</BioYear>
                        Quit playing baseball and started to coach teams
                    </BioSection>
                    <BioSection>
                        <BioYear>2022</BioYear>
                        Started development on  {' '}
                        <NextLink href="/works/firestarter"><Link>Firestarter</Link>
                        </NextLink>.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 to present</BioYear>
                        Attending the University of California Merced, studying Computer Science
                    </BioSection>
                </Section>
                <Links />
            </Container>
        </Layout>
    )
}
export default Page