import { commitMutation, graphql } from 'react-relay';
import environment from '../Environment';

const mutation = graphql`
  mutation CreateTagMutation($input: CreateTagInput!) {
    createTag(input: $input) {
      tag {
        id
        name
        user {
          id
          email
        }
      }
    }
  }
`;
export default (name, user, callback) => {
  const variables = {
    input: {
      name,
      user,
    },
  };
  commitMutation(environment, {
    mutation,
    variables,
    onComplete: () => {
      callback();
    },
    onError: err => console.error(err),
  });
};
