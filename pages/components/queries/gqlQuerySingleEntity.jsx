import { gql } from '@apollo/client';

 const QUERY = gql`
  {
    posts(id: "3gMQ6ePbPtOCBd8fAGdOV9") {
      title
      author
      publishDate
      inshorts
      featuredImage {
        url
      }
    }
  }
`;

export default QUERY;