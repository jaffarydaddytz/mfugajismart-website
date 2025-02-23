import { Box, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { chicken, logo, phone, phoneholding } from "../../../assets";
import { useTheme } from "@mui/material/styles";
import { blue, green } from "@mui/material/colors";

const BlogPage = () => {
  const maxLength = 350;
  const text =
    "Poultry farming is an essential industry that provides high-quality meat and eggs to millions worldwide.Poultry farming is an essential industry that provides high-quality meat and eggs to millions worldwide. With the right practices, farmers can ensure healthy, disease-free flocks while maximizing productivity. Key factors such as proper nutrition, biosecurity measures, and ethical rearing methods contribute to sustainable poultry farming.";

  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  const theme = useTheme();
  return (
    <Box sx={{ mt: "70px", width: { xs: "100%" } }}>
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        Latest Articles
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 0, sm: 1 },
          mt: {xs:1, sm:0}
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "900px" },
            backgroundColor: green[100],
            borderRadius: "5px",
          }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "transparent",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                flexShrink: 0,
              }}>
              <img
                alt="logo"
                src={phone}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ height: "100%" }}>
              <Box>
                {" "}
                <Typography variant="h6">
                  {" "}
                  The Essentials of Raising Healthy Poultry
                </Typography>{" "}
              </Box>
              <Box> Maintaining healthy poultry is crucial for producing high-quality meat and eggs. Key factors such as proper nutrition, clean housing, and disease management are essential for optimizing productivity. With the right care, farmers can achieve healthier flocks and higher yields, contributing to the success of their farms. </Box>
              <Box>
                {" "}
                <Typography variant="body2" sx={{ fontWeight: 300, mt: "1px" }}>
                  {" "}
                  1 hrs ago | Broiler | 220k views
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 0, sm: 1 },
          mt: {xs:1, sm:0},
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "900px" },
            backgroundColor: green[100],
            borderRadius: "5px",
          }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "transparent",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                flexShrink: 0,
              }}>
              <img
                alt="logo"
                src={logo}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ height: "100%" }}>
              <Box>
                {" "}
                <Typography variant="h6">
                  {" "}
                  Maximizing Poultry Farming Efficiency
                </Typography>{" "}
              </Box>
              <Box>Efficiency is key in poultry farming. By adopting smart farming practices such as automated feeding systems, improved breeding techniques, and data-driven management, farmers can increase output while reducing costs. These methods help poultry producers achieve a higher return on investment, ensuring long-term success.

</Box>
              <Box>
                {" "}
                <Typography variant="body2" sx={{ fontWeight: 300, mt: "1px" }}>
                  {" "}
                  1 hrs ago | Broiler | 220k views
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>



      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 0, sm: 1 },
          mt: {xs:1, sm:0}
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "900px" },
            backgroundColor: green[100],
            borderRadius: "5px",
          }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "transparent",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                flexShrink: 0,
              }}>
              <img
                alt="logo"
                src={chicken}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ height: "100%" }}>
              <Box>
                {" "}
                <Typography variant="h6">
                  {" "}
                  Sustainable Poultry Farming: A Path to Healthy & Profitable
                  Livestock
                </Typography>{" "}
              </Box>
              <Box> {truncatedText} </Box>
              <Box>
                {" "}
                <Typography variant="body2" sx={{ fontWeight: 300, mt: "1px" }}>
                  {" "}
                  1 hrs ago | Broiler | 220k views
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 0, sm: 1 },
          mt: {xs:1, sm:0}
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "900px" },
            backgroundColor: green[100],
            borderRadius: "5px",
          }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "transparent",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                flexShrink: 0,
              }}>
              <img
                alt="logo"
                src={phone}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ height: "100%" }}>
              <Box>
                {" "}
                <Typography variant="h6">
                  {" "}
                  Poultry Farming: Ensuring Animal Welfare and Productivity
                </Typography>{" "}
              </Box>
              <Box> Ethical poultry farming practices are fundamental for animal welfare and farm profitability. By providing adequate space, proper nutrition, and disease prevention, farmers can promote the well-being of their birds, which in turn leads to healthier livestock and more efficient production systems. </Box>
              <Box>
                {" "}
                <Typography variant="body2" sx={{ fontWeight: 300, mt: "1px" }}>
                  {" "}
                  1 hrs ago | Broiler | 220k views
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>


      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 0, sm: 1 },
          mt: {xs:1, sm:0},
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "900px" },
            backgroundColor: green[100],
            borderRadius: "5px",
          }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "transparent",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                flexShrink: 0,
              }}>
              <img
                alt="logo"
                src={logo}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ height: "100%" }}>
              <Box>
                {" "}
                <Typography variant="h6">
                  {" "}
                  Sustainable Poultry Farming: A Path to Healthy & Profitable
                  Livestock
                </Typography>{" "}
              </Box>
              <Box> {truncatedText} </Box>
              <Box>
                {" "}
                <Typography variant="body2" sx={{ fontWeight: 300, mt: "1px" }}>
                  {" "}
                  1 hrs ago | Broiler | 220k views
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>



      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          p: { xs: 0, sm: 1 },
          mt: {xs:1, sm:0}
        }}>
        <Box
          sx={{
            width: { xs: "100%", sm: "900px" },
            backgroundColor: green[100],
            borderRadius: "5px",
          }}>
          <Box
            sx={{
              p: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
            }}>
            <Box
              sx={{
                width: { xs: "100%", sm: "150px" },
                backgroundColor: "transparent",
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                borderRadius: "5px",
                flexShrink: 0,
              }}>
              <img
                alt="logo"
                src={chicken}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            </Box>

            <Box sx={{ height: "100%" }}>
              <Box>
                {" "}
                <Typography variant="h6">
                  {" "}
                  Sustainable Poultry Farming: A Path to Healthy & Profitable
                  Livestock
                </Typography>{" "}
              </Box>
              <Box> {truncatedText} </Box>
              <Box>
                {" "}
                <Typography variant="body2" sx={{ fontWeight: 300, mt: "1px" }}>
                  {" "}
                  1 hrs ago | Broiler | 220k views
                </Typography>{" "}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default BlogPage;
