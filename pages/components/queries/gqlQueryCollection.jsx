import { gql } from '@apollo/client';

 const QUERY_COLLECTION = gql`
  {
    postsCollection {
      items {
        title
        author
        publishDate
        inshorts
        featuredImage {
          url
        }
      }
    }
  }
`;

export default QUERY_COLLECTION;
