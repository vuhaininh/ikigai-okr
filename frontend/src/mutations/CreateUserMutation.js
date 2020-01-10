import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation CreateUserMutation(
    $input: CreateUserInput!
    $login: LogInMutationInput!
  ) {
    createUser(input: $input) {
      user {
        id
      }
    }
    login(input: $login) {
      token
      user {
        id
        email
      }
    }
  }
`;
export default (form, callback) => {
  const { firstName, lastName, email, password } = form;
  const variables = {
    input: {
      firstName,
      lastName,
      email,
      password,
    },
    login: {
      email,
      password,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log(response);

      if (response.login != null) {
        const id = response.login.user.id;
        const token = response.login.token;
        callback(id, token, null);
      } else callback(null, null, errors[0].message);
    },
    onError: err => {
      console.error(err);
    },
  });
};
