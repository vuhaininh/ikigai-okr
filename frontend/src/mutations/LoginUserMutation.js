import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation LoginUserMutation($email: String, $password: String) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default (email, password, callback) => {
  const variables = {
    email,
    password,
  };
  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
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
