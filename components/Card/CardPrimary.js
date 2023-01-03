import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea, CardActions } from "@mui/material";
import Image from "next/image";
import Typography from "@/components/shared/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TextLink from "../shared/Link";
import { alpha, styled } from "@mui/material/styles";

const ActionArea = styled(CardActionArea)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
}));

export default function CardPrimary({ data, small }) {
  return (
    <Card
      sx={{
        minWidth: { xs: `${small ? "" : "250px"}`, md: `${small ? "" : "324px"}` },
        width: { xs: `${small ? "100%" : ""}`, md: `${small ? "380px" : ""}` },
        // maxHeight: { xs: "306px" },
        scrollSnapAlign: "center",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <ActionArea>
        <div className={`${small ? "md:h-56" : "h-36 md:h-48"}`}>
          <Image src={data.image} alt="Card" />
        </div>
        {/* <CardMedia component="img" height="140" image={data.image} alt="green iguana" /> */}
        <div className="p-3 md:py-4 md:px-6">
          <Typography md={!small} semibold>
            {data.name}
          </Typography>
          <div className="flex gap-2 mt-3">
            <CalendarMonthIcon fontSize="small" color="disabled" />
            <Typography className="text-gray-500">{data.tanggal}</Typography>
          </div>
          <div className="flex gap-2 mt-3">
            <AccessTimeIcon fontSize="small" color="disabled" />
            <Typography className="text-gray-500">{data.jam}</Typography>
          </div>
          <div>
            <Typography className={`mt-2 line-clamp-5 ${small ? "text-[10px]" : "text-xs"}`}>
              {data.description}
            </Typography>
          </div>
        </div>
      </ActionArea>
      <div className="flex justify-center items-center mb-2">
        <TextLink href={"#"} style={{ color: "#840A8B", fontWeight: 600 }}>
          Join this Class
        </TextLink>
      </div>
    </Card>
  );
}
