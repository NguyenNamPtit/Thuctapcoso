import React, { useRef, useState } from "react";
import { Container, Grid, Box, Pagination } from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import games from "../games/Games.module.css";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Slider from "@mui/material/Slider";
import SearchIcon from "@mui/icons-material/Search";
import CardGame from "../components/card-game/CardGame";
import { Form } from "react-bootstrap";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useDispatch, useSelector } from "react-redux";
import {
  selectGenres,
  selectProductsList,
} from "../../store/feature/games/games.slice";
import Banner from "../components/banner/Banner";

const Games = () => {
  const {
    products,
    currentPage,
    totalPage,
    pageChanged,
    filterChanged,
    filterByPrice,
    searchByName,
    sortAscName,
    sortDesName,
    sortAscNumber,
    sortDesNumber,
    clearFilter,
  } = useSelector(selectProductsList);
  const [sort, setSort] = React.useState("");
  const [value, setValue] = React.useState([0, 2000000]);
  const dispatch = useDispatch();
  const filterRef = useRef();
  const genres = [...new Set(useSelector(selectGenres))];

  // pagination
  const handleChangePage = (event, value) => {
    event.preventDefault();
    dispatch(pageChanged(value - 1));
  };

  // search
  const changeSearchTerm = (e) => {
    dispatch(searchByName(e.target.value));
  };

  // sort
  const handleChange = (event) => {
    setSort(event.target.value);
    if (event.target.value == 10) dispatch(sortAscName());
    else if (event.target.value == 20) dispatch(sortDesName());
    else if (event.target.value == 30) dispatch(sortAscNumber());
    else if (event.target.value == 40) dispatch(sortDesNumber());
  };

  // filter price
  const handleChangeValue = (event, newValue) => {
    setValue(newValue);
    dispatch(filterByPrice(newValue));
  };

  // cv
  const convertVnd = (item) => {
    return Intl.NumberFormat().format(item).split(".").join(",");
  };
  return (
    <div>
      <Banner parent="Home" linkChildren="Store" />

      <section className={games["section-games"]}>
        <Container>
          <Grid container>
            <Grid item={true} xs={12} md={3}>
              <section className={games["box-filter"]}>
                <div>
                  <p className={games.title}>Search Games</p>
                  <div>
                    <Box
                      sx={{
                        padding: "16px 0",
                        width: "max",
                      }}
                    >
                      <Grid position={"relative"} width={"max-content"}>
                        <input
                          className={games["ip-search"]}
                          type="text"
                          name="ip-search"
                          id="ip-search-2"
                          placeholder="Search games"
                          onKeyUp={(e) => changeSearchTerm(e)}
                        />
                        <SearchIcon
                          sx={{
                            position: "absolute",
                            top: "5px",
                            right: "5px",
                            color: "white",
                            fontSize: "32px",
                            cursor: "pointer",
                            ":hover": {
                              color: "var(--blue)",
                            },
                          }}
                        ></SearchIcon>
                      </Grid>
                    </Box>
                  </div>
                </div>
                <br />
                <div>
                  <p className={games.title}>Sort</p>
                  <Box
                    sx={{
                      padding: "16px 0",
                      minWidth: 120,
                      "& .MuiFormLabel-root": {
                        color: "white",
                      },
                      "& .MuiInput-input": {
                        color: "white",
                        borderBottom: "2px solid white",
                        paddingBottom: "12px",
                        ":hover": {
                          borderBottom: "2px solid white",
                        },
                      },
                      "& .MuiInputBase-root:after": {
                        borderBottom: "2px solid var(--blue)",
                      },
                      "& .MuiSelect-iconStandard": {
                        color: "white",
                        top: "calc(50% - .7em)",
                      },
                      "& .css-1c2i806-MuiFormLabel-root-MuiInputLabel-root.Mui-focused":
                        {
                          color: "var(--blue)",
                        },
                      "& .css-a3l6o-MuiInputBase-root-MuiInput-root-MuiSelect-root":
                        {
                          borderBottom: "none",
                        },
                    }}
                  >
                    <FormControl variant="standard" fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sort by
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Sort by"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>ascending name</MenuItem>
                        <MenuItem value={20}>descending name</MenuItem>
                        <MenuItem value={30}>ascending price</MenuItem>
                        <MenuItem value={40}>descending price</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <br />
                <div>
                  <p className={games.title}>Genres</p>

                  <FormControl
                    sx={{
                      padding: "16px 0",
                      "& .Mui-checked": {
                        color: "var(--blue)",
                      },
                      "& .MuiSvgIcon-root": {
                        border: "2px solid white !important",
                        fontSize: 24,
                      },
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "12px",
                      flexDirection: {
                        xs: "row",
                        md: "column",
                      },
                      "& .MuiTypography-root": {
                        color: "white",
                      },
                    }}
                  >
                    <Form
                      style={{
                        fontFamily: "var(--font-default)",
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        gap: "16px",
                      }}
                      action=""
                      onChange={() => {
                        const newFilter = [];

                        filterRef.current.elements.filter.forEach(
                          (checkbox) => {
                            if (checkbox.checked)
                              newFilter.push(checkbox.value);
                          }
                        );

                        dispatch(filterChanged(newFilter));
                      }}
                      ref={filterRef}
                    >
                      {genres.map((item) => (
                        <Form.Check
                          className={games.checkbox}
                          key={item}
                          name="filter"
                          type="checkbox"
                          label={item}
                          value={item}
                        />
                      ))}
                    </Form>

                    {/* {genres.map((item) => (
                      <FormControlLabel
                        key={item}
                        control={<Checkbox value={item} />}
                        label={item}
                        value={item}
                      />
                    ))} */}
                  </FormControl>
                </div>

                <br />
                <div>
                  <p className={games.title}>Filter by Price</p>
                  <Box
                    sx={{
                      maxWidth: "300px",
                      padding: "16px 0",
                      margin: "0 auto",
                    }}
                  >
                    <Slider
                      value={value}
                      onChange={handleChangeValue}
                      sx={{
                        color: "var(--blue)",
                      }}
                      min={0}
                      max={2000000}
                      step={5}
                    />
                  </Box>
                  <div className={games["box-price"]}>
                    {/* min */}
                    <div>
                      <Grid
                        style={{
                          width: "100px",
                        }}
                      >
                        {convertVnd(value[0])} ₫
                      </Grid>
                    </div>

                    {/* max */}
                    <div>
                      <Grid
                        style={{
                          width: "100px",
                        }}
                      >
                        {convertVnd(value[1])} ₫
                      </Grid>
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <div>
                  <button
                    className="btn"
                    onClick={(e) => {
                      const textSearch = document.getElementById("ip-search-2");
                      const checkbox =
                        document.querySelectorAll(".form-check-input");
                      textSearch.value = "";
                      checkbox.forEach((item) => (item.checked = false));
                      setSort("");
                      setValue([0, 2000000]);
                      dispatch(clearFilter());
                    }}
                  >
                    Clear Filter
                  </button>
                </div>
              </section>
            </Grid>
            <Grid item={true} xs={12} md={9}>
              <section className={games["box-list-games"]}>
                <Grid container>
                  {products.map((item) => (
                    <CardGame item={item} key={item.id}></CardGame>
                  ))}
                </Grid>
              </section>
              <Box className={games.pagigation}>
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
            </Grid>
          </Grid>
        </Container>
      </section>
    </div>
  );
};

export default Games;
