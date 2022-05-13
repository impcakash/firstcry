import AllProd from "./AllProd";
import styled from "@emotion/styled";
import FilterSection from "./FilterSection";
import Navbaar from "../../Components/Navbaar/Navbaar";
import Navbaar2 from "../../Components/Navbaar/Navbaar2";
import { Box } from "@mui/system";

const DIV = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#ffffff",
});

function MenProduct() {
  return (
    <div>
      <Navbaar />
      <Navbaar2 />
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <DIV>
          <FilterSection />
          <AllProd />
        </DIV>
      </Box>
    </div>
  );
}

export default MenProduct;
