import React, { Component } from 'react';
import Tag from './Tag';
import {
    createFragmentContainer,
    graphql
  } from 'react-relay'
class TagList extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                {this.props.viewer.allTags.edges.map(({node})=>
                    <Tag key={node.__id} tag={node} />
                )}
            </div>
         );
    }
}
 
export default createFragmentContainer(TagList, graphql`
    fragment TagList_alltags on Query{
        allTags(first: 10) @connection(key: "TagList_allTags", filters: []){
            edges{
                node{
                    ...Tag_tag
                }
                
            }
        }
    }

`);