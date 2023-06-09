import React from "react";
import { Container, Grid, Box, Pagination } from "@mui/material";
import PaginationItem from "@mui/material/PaginationItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import blog from "../blog/Blog.module.css";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { selectBlogsList } from "../../store/feature/blogs/blogs.slice";
import Banner from "../components/banner/Banner";

const Blog = () => {
  const { blogs, currentPage, totalPage, pageChanged } =
    useSelector(selectBlogsList);
  const dispatch = useDispatch();

  // pagination
  const handleChangePage = (event, value) => {
    event.preventDefault();
    dispatch(pageChanged(value - 1));
  };
  return (
    <div>
      <Banner parent="Home" linkChildren="Blog" />

      <section className={blog["section-blog-list"]}>
        <Container>
          <Box className={blog["blog-list"]}>
            <Grid container>
              {blogs.map((item) => (
                <Grid
                  key={item.id}
                  xs={12}
                  sm={6}
                  md={4}
                  item={true}
                  display="flex"
                  alignItems={"center"}
                  justifyContent={"center"}
                  padding="20px 0"
                >
                  <Box className={blog["blog-card"]}>
                    <Link
                      as={"/blog-detail/[bid]"}
                      href={{
                        pathname: "/blog-detail/[bid]",
                        query: { bid: item.id },
                      }}
                      style={{
                        color: "var(--bg)",
                      }}
                    >
                      <img
                        src={item.img}
                        alt="sdsad"
                        style={{
                          maxWidth: "100%",
                          verticalAlign: "middle",
                          transition: "all 0.2s linear",
                        }}
                      />
                      <div className={blog.content}>
                        <div className={blog.title}>{item.name}</div>
                        <div className={blog.p}>{item.content}</div>
                        <div className={blog.date}>{item.date}</div>
                      </div>
                    </Link>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className={blog.pagigation}>
            <Pagination
              sx={{
                "& .MuiPaginationItem-page": {
                  color: "white",
                  border: "2px solid white",
                },
                "& .MuiPaginationItem-page:hover": {
                  backgroundColor: "var(--blue)",
                },
                "& .MuiPaginationItem-page.Mui-selected": {
                  backgroundColor: "var(--gray)",
                },
                "& .MuiPaginationItem-icon": {
                  color: "white",
                },
                "& .MuiPaginationItem-previousNext": {
                  border: "2px solid white",
                },
                "& .MuiPaginationItem-previousNext:hover": {
                  backgroundColor: "var(--blue)",
                },
                "& .MuiPaginationItem-ellipsis": {
                  color: "white",
                },
              }}
              count={totalPage}
              size="large"
              page={currentPage + 1}
              onChange={handleChangePage}
              renderItem={(item) => (
                <PaginationItem
                  slots={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                ></PaginationItem>
              )}
            ></Pagination>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Blog;
