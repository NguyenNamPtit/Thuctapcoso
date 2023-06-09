import React from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import blogdetal from "../blog-detail/BlogDetail.module.css";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { selectBlogsById } from "../../store/feature/blogs/blogs.slice";
import { useSelector } from "react-redux";
import Banner from "../components/banner/Banner";

const BlogDetail = () => {
  const router = useRouter();
  const {
    query: { bid },
  } = router;
  const blog = useSelector(selectBlogsById(bid));
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    criteriaMode: "all",
  });
  const onSubmit = (e) => console.log(e);
  return (
    <div>
      <Banner parent="Blog" linkChildren={blog.name} />

      <section className={blogdetal["section-blog-detail"]}>
        <Container>
          <Grid container>
            <Grid item={true} xs={12} lg={8}>
              <div className={blogdetal["box-left"]}>
                <Box
                  style={{
                    fontSize: "48px",
                    fontWeight: "700",
                    fontFamily: "var(--font-title)",
                  }}
                >
                  {blog.name}
                </Box>
                <Box>
                  <div className={blogdetal["box-user"]}>
                    <img src={blog.user.img} alt="user" />
                    <div>{blog.user.name}</div>
                  </div>
                  <div className={blogdetal.date}>{blog.date}</div>
                </Box>
                <Box padding={"32px 0"}>
                  <img
                    src={blog.img_bg}
                    alt=""
                    style={{
                      maxWidth: "100%",
                      verticalAlign: "middle",
                    }}
                  />
                </Box>
                <Box
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "24px",
                  }}
                >
                  <div className={blogdetal.title}>{blog.content}</div>
                  <p>{blog.text.text1}</p>
                  <p>{blog.text.text2}</p>
                  <p>{blog.text.text3}</p>
                  <p>{blog.text.text4}</p>
                </Box>

                <Box
                  marginTop={"36px"}
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <p className={blogdetal.title}>Comments</p>
                  {blog.comments.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        display: "flex",
                        gap: "12px",
                      }}
                    >
                      <img
                        src={item.avatar}
                        alt="img-user"
                        style={{
                          width: "60px",
                          height: "60px",
                          verticalAlign: "middle",
                          borderRadius: "50%",
                        }}
                      />
                      <Box
                        sx={{
                          width: "100%",
                          padding: "10px",
                          backgroundColor: "var(--dark-2)",
                          display: "flex",
                          flexDirection: "column",
                          gap: "12px",
                        }}
                      >
                        <p>
                          <strong>{item.username}</strong> - {item.date}
                        </p>
                        <p>{item.content}</p>
                        <Box maxWidth={"120px"}>
                          <button className="btn">Reply</button>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                </Box>

                <Box
                  marginTop={"36px"}
                  sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
                >
                  <p className={blogdetal.title}>Leave a Reply </p>

                  <p>
                    Your email address will not be published. Required fields
                    are marked *
                  </p>

                  <form
                    action=""
                    className="form"
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div className="box-form">
                      <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input
                          id="name"
                          type="text"
                          placeholder="Your Name"
                          className="input"
                          {...register("name", { required: true })}
                        />
                        {errors.name && (
                          <div className="form-message">
                            This field is required
                          </div>
                        )}
                      </div>
                      <div className="form-control">
                        <p>Email</p>
                        <input
                          type="text"
                          placeholder="Your Email"
                          className="input"
                          {...register("email", {
                            required: "Please enter this field!",
                            pattern: {
                              value:
                                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                              message: "This field must be email!",
                            },
                          })}
                        />
                        {errors.email && (
                          <div className="form-message">
                            {errors.email.message}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="form-control-2">
                      <p>Comment</p>
                      <textarea
                        placeholder="Your comment"
                        name=""
                        id=""
                        cols="30"
                        rows="15"
                        style={{
                          border: "1px solid var(--gray)",
                          backgroundColor: "var(--dark)",
                          color: "var(--gray)",
                          fontFamily: "var(--font-default)",
                          fontSize: "16px",
                          padding: "12px 30px",
                        }}
                      ></textarea>
                    </div>
                    <button className="btn">Post comment</button>
                  </form>
                </Box>
              </div>
            </Grid>
            <Grid item={true} xs={12} lg={4}>
              <div className={blogdetal["box-right"]}>
                <section className={blogdetal["recent-posts"]}>
                  <p className={blogdetal.title}>Recent posts</p>
                  <Link href={"#"}>
                    <div className="box-form">
                      <img
                        src="/img/blog-2.jpg"
                        alt="img-blog-post"
                        style={{
                          maxWidth: "50%",
                          verticalAlign: "middle",
                        }}
                      />
                      <div className="form-control">
                        <div className={blogdetal["title-re-post"]}>
                          Final Fantasy XVI is said to be a more “mature” take
                          on the fantasy RPG franchise
                        </div>
                        <div className={blogdetal.date}> May 10, 2022 </div>
                      </div>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-form">
                      <img
                        src="/img/blog-3.jpg"
                        alt="img-blog-post"
                        style={{
                          maxWidth: "50%",
                          verticalAlign: "middle",
                        }}
                      />
                      <div className="form-control">
                        <div className={blogdetal["title-re-post"]}>
                          Never Underestimate The Influence Of Gaming
                        </div>
                        <div className={blogdetal.date}> May 7, 2022 </div>
                      </div>
                    </div>
                  </Link>
                  <Link href={"#"}>
                    <div className="box-form">
                      <img
                        src="/img/blog-4.jpg"
                        alt="img-blog-post"
                        style={{
                          maxWidth: "50%",
                          verticalAlign: "middle",
                        }}
                      />
                      <div className="form-control">
                        <div className={blogdetal["title-re-post"]}>
                          GTA 5 on PS5 and Xbox Series: Everything you need to
                          know about the next-gen version
                        </div>
                        <div className={blogdetal.date}> May 5, 2022 </div>
                      </div>
                    </div>
                  </Link>
                </section>
                <section className={blogdetal.archives}>
                  <p className={blogdetal.title}>Archives</p>
                  <Link href={"#"}>September 2022</Link>
                  <Link href={"#"}>June 2022</Link>
                  <Link href={"#"}>May 2022</Link>
                  <Link href={"#"}>April 2022</Link>
                  <Link href={"#"}>March 2022</Link>
                  <Link href={"#"}>February 2022</Link>
                  <Link href={"#"}>January 2022</Link>
                </section>
                <section className={blogdetal.categories}>
                  <p className={blogdetal.title}>Categories</p>
                  <Link href={"#"}>Buy Guide</Link>
                  <Link href={"#"}>Game News</Link>
                  <Link href={"#"}>Players</Link>
                  <Link href={"#"}>Recommended</Link>
                  <Link href={"#"}>Work On</Link>
                </section>
                <section>
                  <p className={blogdetal.title}>Tags</p>
                  <Box
                    sx={{
                      marginTop: "16px",
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "16px",
                    }}
                  >
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>FF16</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>NieR</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>GTA 5</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>GOW 4</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>RRD 2</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>Resident Evil</div>
                    </Link>
                    <Link href={"#"}>
                      <div className={blogdetal.tags}>Tales of Immortal</div>
                    </Link>
                  </Box>
                </section>
              </div>
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default BlogDetail;
