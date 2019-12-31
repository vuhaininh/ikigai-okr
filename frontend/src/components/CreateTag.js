import React, { Component } from 'react';
import {
  EuiFlexGrid,
  EuiFlexItem,
  EuiForm,
  EuiFormRow,
  EuiFieldText,
  EuiButton,
} from '@elastic/eui';
import CreateTagMutation from '../mutations/CreateTagMutation';
class CreateTag extends Component {
  state = {
    name: ' ',
    user: 'VXNlck5vZGU6Mw==',
  };
  render() {
    return (
      <div>
        <EuiFlexGrid columns={2}>
          <EuiFlexItem>
            <EuiForm>
              <EuiFormRow
                label="Create new tag"
                helpText="Add new tag here"
              >
                <EuiFieldText
                  name="tag-name"
                  value={this.state.name}
                  onChange={e =>
                    this.setState({ name: e.target.value })
                  }
                  placeholder="Add tag for new topic"
                ></EuiFieldText>
              </EuiFormRow>
              <EuiButton
                type="submit"
                fill
                onClick={() => this._createTag()}
              >
                Add Tag
              </EuiButton>
            </EuiForm>
          </EuiFlexItem>
        </EuiFlexGrid>
      </div>
    );
  }

  _createTag = () => {
    const { name, user } = this.state;
    CreateTagMutation(name, user, () =>
      console.log('Mutation completed'),
    );
  };
}

export default CreateTag;
