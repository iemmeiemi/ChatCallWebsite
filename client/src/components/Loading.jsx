import React from "react";
import {
  Box,
  Skeleton,
  Backdrop,
  CircularProgress,
  Stack,
} from "@mui/material";

export const Loading = ({ type = "spinner" }, { times = 1 }) => {
  switch (type) {
    case "spinner":
      return (
        <Backdrop
          open={true}
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      );

    case "skeleton":
      return (
        <Stack spacing={1}>
          {/* For variant="text", adjust the height via font-size */}
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          {/* For other variants, adjust the size with `width` and `height` */}
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="rectangular" width={210} height={60} />
          <Skeleton variant="rounded" width={210} height={60} />
        </Stack>
      );

    case "menu":
      return (
        <>
          {Array.from({ length: times }).map((_, i) => (
            <Box key={i} sx={{ pt: 0.5 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          ))}
        </>
      );

    case "animation":
      return (
        <Box sx={{ width: 300 }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      );

    case "text":
      return <p>Loading...</p>;

    default:
      return null;
  }
};
