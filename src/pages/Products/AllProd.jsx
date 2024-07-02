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

  let req_data = [
    {
      id: 1,
      featured: "Bestseller",
      desc: "Transparent Engine With Music And Lights",
      mrp: 400,
      off: "20%",
      review: 240,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10466675a.webp",
    },
    {
      id: 2,
      featured: "Vehicle",
      desc: "Shinsei Pull Back Patrol Toy Boat",
      mrp: 300,
      off: "10%",
      review: 52,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3488914a.webp",
    },
    {
      id: 3,
      featured: "Vehicle",
      desc: "Mini Motorcycle Push And Go Scooter",
      mrp: 500,
      off: "10%",
      review: 339,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9467314a.webp",
    },
    {
      id: 4,
      featured: "Vehicle",
      desc: "Pull Back Ranger Jungle Safari Jeep",
      mrp: 200,
      off: "40%",
      review: 279,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2318792a.webp",
    },
    {
      id: 5,
      featured: "Bestseller",
      desc: "YAMAMA Transparent Concept Racing Car",
      mrp: 700,
      off: "20%",
      review: 44,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10528874a.webp",
    },
    {
      id: 6,
      featured: "Vehicle",
      desc: "Centy Rugged Pull Back Bike",
      mrp: 600,
      off: "30%",
      review: 65,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2901038a.webp",
    },
    {
      id: 7,
      featured: "Vehicle",
      desc: "Centy Jet 747 Airplane Toy",
      mrp: 500,
      off: "10%",
      review: 332,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/202522a.webp",
    },
    {
      id: 8,
      featured: "Vehicle",
      desc: "Toyzone Friction Powered Rescue Crane",
      mrp: 900,
      off: "20%",
      review: 372,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10522158a.webp",
    },
    {
      id: 9,
      featured: "Bestseller",
      desc: "Racing Car To Robot Friction Toy",
      mrp: 300,
      off: "10%",
      review: 169,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8345502a.webp",
    },
    {
      id: 10,
      featured: "Bestseller",
      desc: "VGRASSP Battery Operated Police Car",
      mrp: 800,
      off: "30%",
      review: 391,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9353946a.webp",
    },
    {
      id: 11,
      featured: "Vehicle",
      desc: "Karma Bus With Music And Lights",
      mrp: 200,
      off: "20%",
      review: 240,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/10450252a.webp",
    },
    {
      id: 12,
      featured: "Vehicle",
      desc: "Centy Pullback CNG Auto Rickshaw",
      mrp: 500,
      off: "10%",
      review: 52,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/1384734a.webp",
    },
    {
      id: 13,
      featured: "Vehicle",
      desc: "Toyzone Batman Friction Racing Car",
      mrp: 600,
      off: "10%",
      review: 339,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11089811a.webp",
    },
    {
      id: 14,
      featured: "Vehicle",
      desc: "Lamborghini Car with Sounds and Lights",
      mrp: 700,
      off: "20%",
      review: 279,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/3501195a.webp",
    },
    {
      id: 15,
      featured: "Bestseller",
      desc: "Service Vehicle Police Truck Toy",
      mrp: 100,
      off: "30%",
      review: 44,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11181261a.webp",
    },
    {
      id: 16,
      featured: "Puzzle",
      desc: "Anindita Wooden Number Puzzle Multicolor",
      mrp: 400,
      off: "20%",
      review: 65,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2895768a.webp",
    },
    {
      id: 17,
      featured: "Puzzle",
      desc: "Imagi Make Mapology India With Capitals",
      mrp: 500,
      off: "10%",
      review: 332,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2022461a.webp",
    },
    {
      id: 18,
      featured: "Bestseller",
      desc: "Wooden 1 to 20 Numbers & Shapes Puzzle",
      mrp: 900,
      off: "30%",
      review: 372,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2895776a.webp",
    },
    {
      id: 19,
      featured: "Puzzle",
      desc: "Alphabets And Numbers Puzzle Foam Mat",
      mrp: 300,
      off: "10%",
      review: 169,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/9805970a.webp",
    },
    {
      id: 20,
      featured: "Bestseller",
      desc: "Skillofun Animal Alphabet Wooden Tray",
      mrp: 200,
      off: "10%",
      review: 391,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/81197a.webp",
    },
    {
      id: 21,
      featured: "Puzzle",
      desc: "Wooden Solar System Jigsaw Puzzle",
      mrp: 400,
      off: "20%",
      review: 240,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/8886983a.webp",
    },
    {
      id: 22,
      featured: "Puzzle",
      desc: "Anindita Toys Toddler Puzzles",
      mrp: 700,
      off: "10%",
      review: 52,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/755803a.webp",
    },
    {
      id: 23,
      featured: "Puzzle",
      desc: "Babyhug Wooden Shapes Puzzle",
      mrp: 600,
      off: "10%",
      review: 339,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2611417a.webp",
    },
    {
      id: 24,
      featured: "Puzzle",
      desc: "Babyhug Wooden Fruits Puzzle",
      mrp: 800,
      off: "40%",
      review: 279,
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/2611413a.webp",
    },
  ];

  return (
    <DIV1>
      <DIV2>
        {req_data.map((item) => (
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
