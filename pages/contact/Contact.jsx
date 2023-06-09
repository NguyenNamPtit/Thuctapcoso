import React from "react";
import { Container, Grid, Box } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import contact from "../contact/Contact.module.css";
import Link from "next/link";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useForm } from "react-hook-form";
import Banner from "../components/banner/Banner";

const Contact = () => {
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
      <Banner parent="Home" linkChildren="Contact" />

      <section className={contact["secion-info"]}>
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <p className={contact.title}>We Would Love To Hear From You</p>
          <p style={{ color: "var(--gray)" }}>
            if you’ve got great products your making or looking to work with us
            then drop us a line.
          </p>
          <div className={contact["box-info"]}>
            <div className={contact["card-info"]}>
              <FmdGoodOutlinedIcon
                className={contact.icon}
              ></FmdGoodOutlinedIcon>
              <p className={contact.title}>Phone</p>
              <Link href={"#"}>+96 6860 104 </Link>
            </div>
            <div className={contact["card-info"]}>
              <PhoneAndroidOutlinedIcon
                className={contact.icon}
              ></PhoneAndroidOutlinedIcon>
              <p className={contact.title}>Address</p>
              <Link href={"#"}>Ngõ 91, đường Đại Mỗ, Nam Từ Liêm,Hà Nội</Link>
            </div>
            <div className={contact["card-info"]}>
              <EmailOutlinedIcon className={contact.icon}></EmailOutlinedIcon>
              <p className={contact.title}>Email</p>
              <Link href={"#"}>nguyennamhoai01042002@gmail.com</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className={contact["seciton-map"]}>
        <Container maxWidth="xl">
          <iframe
            className={contact.map}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7446.828175561408!2d105.72723982403885!3d21.056117343934204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454570374c5e3%3A0xdeb4689fca01b0ff!2zTmjhu5VuLCBNaW5oIEtoYWksIFThu6sgTGnDqm0sIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1671058805021!5m2!1svi!2s"
            loading="lazy"
          ></iframe>
        </Container>
      </section>

      <section className={contact["section-contact"]}>
        <Container>
          <Box
            width={"100%"}
            paddingTop={"36px"}
            sx={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <p className={contact.title}>Contact Form </p>

            <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
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
                    <div className="form-message">This field is required</div>
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
                        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                        message: "This field must be email!",
                      },
                    })}
                  />
                  {errors.email && (
                    <div className="form-message">{errors.email.message}</div>
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
              <button className="btn">Send message</button>
            </form>
          </Box>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
