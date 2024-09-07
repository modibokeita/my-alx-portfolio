import {Contenair, Form,
    FormButton, FormContent, FormH1,
    FormInput, FormWrap, FormLabel, Icon, Text
} from "./SignupElements"

const Signup = () => {
  return (
    <Contenair>
        <FormWrap>
            <Icon to="/">Home</Icon>
            <FormContent>
                <Form action="#">
                    <FormH1> Sign Up</FormH1>
                    <FormLabel htmlFor="for">Email</FormLabel>
                    <FormInput type="email" required />
                    <FormLabel htmlFor="for">Your username</FormLabel>
                    <FormInput type="username" required />
                    <FormLabel htmlFor="for">Password</FormLabel>
                    <FormInput type="password" required />
                    <FormButton type="submit">Submit</FormButton>
                    <Text>Forgot password</Text>

                </Form>
            </FormContent>
        </FormWrap>
    </Contenair>
  )
}

export default Signup

