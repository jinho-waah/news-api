import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .contents {
    margin-top: 1rem;
    margin-left: 1rem;
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, url } = article;
  return (
    <NewsItemBlock>
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      </div>
    </NewsItemBlock>
  );
};

export default NewsItem;
