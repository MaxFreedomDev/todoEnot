import React, { memo } from "react";
import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import { useQuery } from "react-query";
import { Image } from "mui-image";
import CircularProgress from "@mui/material/CircularProgress";
import { fetchNews } from "api/news";
import { INews } from "types/newsWidget";
import defaultImage from "assets/image/default.jpg";
import { ReactFCWithChildren } from "types";

const news = keyframes`
  from {
    transform: translate(0, 0);
  }
  to {
    transform: translate(-160%, 0);
  }
`;

const Container = styled("div")({
  animation: `${news} 1000s infinite linear`,
  display: "flex",
  columnGap: 20,
  width: "max-content",
});

const Wrapper: ReactFCWithChildren = ({ children }) => (
  <Box
    display="flex"
    alignItems="center"
    justifyContent="center"
    padding="10px 0"
    margin="0 20px"
    marginTop="auto"
    overflow="hidden"
    minHeight={140}
  >
    {children}
  </Box>
);

const DefaultImg = (
  <img src={defaultImage} alt="" style={{ width: 100, height: 50 }} />
);

const NewsWidget: React.FC = () => {
  const { isLoading, error, data, isError } = useQuery<INews, Error>(
    "news",
    fetchNews
  );

  if (isLoading) {
    return (
      <Wrapper>
        <CircularProgress />
      </Wrapper>
    );
  }

  if (isError) {
    return <Wrapper>Error: {error.message}</Wrapper>;
  }

  return (
    <Wrapper>
      <Container>
        {data?.articles.map((el, index) => (
          <Box key={index} display="flex" flexDirection="column" rowGap={1}>
            <Image
              src={el.urlToImage || defaultImage}
              alt=""
              height={50}
              width={100}
              showLoading={DefaultImg}
              errorIcon={DefaultImg}
            />
            <Link target="_blank" href={el.url} rel="noreferrer">
              <Typography
                fontSize="10px"
                sx={{
                  maxWidth: 100,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: "3",
                  WebkitBoxOrient: "vertical",
                }}
              >
                {el.title}
              </Typography>
            </Link>
          </Box>
        ))}
      </Container>
    </Wrapper>
  );
};

export default memo(NewsWidget);
