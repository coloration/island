import Signin from './Signin.vue'
import Signup from './Signup.vue'
import ResetPassword from './ResetPassword.vue'

export default {
  title: 'Practice/Authentication',
  component: Signin,
}

export const PracticeSignin = () => ({
  components: { Signin },
  template: `
    <Signin />
  `,
})

export const PracticeSignup = () => ({
  components: { Signup },
  template: `
    <Signup />
  `,
})

export const PracticeResetPassword = () => ({
  components: { ResetPassword },
  template: `
    <ResetPassword />
  `,
})




