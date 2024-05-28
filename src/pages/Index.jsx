import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Spacer, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Home</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>About</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Blog</Link>
          <Link href="#" _hover={{ textDecoration: "none", color: "gray.400" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Blog Posts Section */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Blog Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post content...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderLeftWidth={{ md: "1px" }} mt={{ base: 8, md: 0 }}>
          <VStack spacing={4} align="stretch">
            <Box>
              <Heading fontSize="lg" mb={2}>Recent Posts</Heading>
              <VStack align="start">
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 1</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Recent Post 2</Link>
              </VStack>
            </Box>
            <Box>
              <Heading fontSize="lg" mb={2}>Categories</Heading>
              <VStack align="start">
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 1</Link>
                <Link href="#" _hover={{ textDecoration: "none", color: "gray.600" }}>Category 2</Link>
              </VStack>
            </Box>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" p={4} mt={8}>
        <Flex justify="center" align="center">
          <HStack spacing={4}>
            <Link href="#" _hover={{ color: "gray.400" }}><FaFacebook /></Link>
            <Link href="#" _hover={{ color: "gray.400" }}><FaTwitter /></Link>
            <Link href="#" _hover={{ color: "gray.400" }}><FaInstagram /></Link>
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;