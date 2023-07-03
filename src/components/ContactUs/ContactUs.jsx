"use client";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { Container, FormControl ,FormLabel ,Heading, Input, Textarea , FormErrorMessage, Button, Text, useToast} from "@chakra-ui/react";
import { useState } from "react";
import { sendContactForm } from "./api";

    const initValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    }

    const initState = {values: initValues}

export default function ContactUs() {
    const toast = useToast()
    const [state, setState] = useState(initState)
    const [touched, setTouched] = useState({})

    const {values,isLoading, error } = state;

    const onBlur = ({target}) => setTouched((prev) => ({...prev,[target.name]: true}))

    const handleChange = ({target}) => setState((prev) => ({
        ...prev,
        values:{
        ...prev.values,
        [target.name]:target.value
        }
    }))

    const onSubmit = async () => {
    setState((prev)=>({
        ...prev,
        isLoading:true,
    }))

    try {
        await sendContactForm(values)
        setTouched({});
        setState(initState)
        toast({
        title:"Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
        })
    } catch (error) {
        setState((prev)=>({
        ...prev,
        isLoading:false,
        error: error.message,
        }))
    }


    }
    return (
        <ChakraProvider theme={theme}>
        <Container textAlign="center" fontSize="2xl" p="1em" maxW="450px" mt={12}>
        <Heading>Contact Us</Heading>

        {error && (
            <Text color="red.300" my={4} fontSize ="xl" >{error}</Text>
        )}

        <FormControl isRequired isInvalid={touched.name && !values.name} mb={5}>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" errorBorderColor="red.300" onBlur={onBlur} value={values.name} onChange={handleChange}/>
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.email && !values.email} mb={5}>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" errorBorderColor="red.300" onBlur={onBlur} value={values.email} onChange={handleChange}/>
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.subject && !values.subject} mb={5}>
            <FormLabel>Subject</FormLabel>
            <Input type="text" name="subject" errorBorderColor="red.300" onBlur={onBlur} value={values.subject} onChange={handleChange}/>
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <FormControl isRequired isInvalid={touched.message && !values.message} mb={5}>
            <FormLabel>Message</FormLabel>
            <Textarea type="text" name="message" rows={5} errorBorderColor="red.300" onBlur={onBlur} value={values.message} onChange={handleChange}/>
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>

        <Button isLoading={isLoading} variant="outline" colorScheme='blue' disabled={!values.name ||!values.email ||!values.subject ||!values.message} onClick={onSubmit} >Submit</Button>

        </Container>
        </ChakraProvider>
    )
    }
