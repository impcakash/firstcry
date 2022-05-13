import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../Redux/Posts/action";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { addToCart } from "../../Redux/Cart/action";
// import { border, padding } from "@mui/system";
import { Box } from "@mui/material";

const DIV1 = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "70%",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "20px",
});

const DIV2 = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#ffffff",
  flexWrap: "wrap",
  gap: "20px",
});

const DIV3 = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "260px",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  borderRadius: "5px",
  marginTop: "25px",
  overflow: "hidden",
});
const DIV4 = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  backgroundColor: "#fc2779",
});

const P = styled("p")({
  textAlign: "center",
  padding: "20px",
  fontWeight: "700",
  fontFamily: "serif",
});

function AllProd() {
  const [page, setPage] = useState(1);
  const [lists, setLists] = useState([]);

  // console.log(lists);

  useEffect(() => {
    getMensData();
  }, []);

  const setRange = (e) => {
    // console.log(e.price >= 500 && e.price <= 1000);
    return e.price >= 500 && e.price <= 1000;
  };

  const getMensData = (page = 1, featured = null, mrp = null) => {
    if (!featured && !mrp) {
      // console.log(page);
      fetch(
        ` https://api-server-xyz.herokuapp.com/menData?_page=${page}&_limit=9`
      )
        .then((d) => d.json())
        .then((res) => {
          setLists(res);
        });
      // console.log('Called top');
    } else if (featured !== null) {
      fetch(
        ` https://api-server-xyz.herokuapp.com/menData?featured=${featured}`
      )
        .then((d) => d.json())
        .then((res) => {
          setLists(res);
        });
      // console.log('Called featured');
    } else if (mrp !== null) {
      fetch(`https://api-server-xyz.herokuapp.com/menData`)
        .then((d) => d.json())
        .then((res) => {
          const x = res.filter(setRange);
          // console.log(x);
          setLists(x);
        });
      // console.log('Called Price', lists);
    }
  };

  let url = `https://api-server-xyz.herokuapp.com/menData?_page=${page}&_limit=9`;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData(url));
  }, url);

  const data2 = useSelector((state) => state.post.data);
  //console.log(data2)

  const handleChange = (event, value) => {
    setPage(value);
  };

  function addCart(data) {
    dispatch(addToCart(data));
  }

  return (
    <DIV1>
      <DIV2>
        {data2.map((item) => (
          <DIV3 className="hoverStyle">
            <p style={{ color: "coral", padding: "20px", fontSize: "13px" }}>
              {" "}
              Featured : <span style={{ color: "teal" }}>{item.featured}</span>
            </p>
            <Link to={`/product/${item.id}`}>
              {" "}
              <img width={"80%"} src={item.image} alt="No" key={item.id} />
            </Link>
            <P>{item.desc}</P>
            <P>Price : ₹{item.mrp}</P>
            <P>
              <img
                width={"30%"}
                src="https://www.pngkit.com/png/detail/39-399026_4-1-2-stars-logo-4-stars.png"
                alt=""
              />
              <p>({item.review})</p>
            </P>

            <DIV4>
              <div
                onClick={() => addCart(item)}
                style={{
                  width: "100%",
                  height: "30px",
                  textAlign: "center",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "white",
                }}
              >
                ADD TO BAG
              </div>
            </DIV4>
          </DIV3>
        ))}
      </DIV2>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // display: { xs: "none", sm: "block" },
        }}
      >
        <Pagination
          sx={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", padding: "20px" }}
          count={5}
          size="large"
          variant="outlined"
          color="newColor"
          page={page}
          onChange={handleChange}
        />
      </Box>

      {/* <Box
        sx={{
          width: "93%",
          margin: "20px 0 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // display: { xs: "block", sm: "none" },
        }}
      >
        <Pagination
          sx={{ boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", padding: "10px" }}
          count={5}
          size="small"
          variant="outlined"
          color="newColor"
          page={page}
          onChange={handleChange}
        />
      </Box> */}
    </DIV1>
  );
}

export default AllProd;
