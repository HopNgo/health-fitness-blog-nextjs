import ReorderIcon from "@mui/icons-material/Reorder";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ROUTE_LIST } from "./routes";
import LOGO from "@/public/images/logo.svg";
import Stack from "@mui/material/Stack";

export default function HeaderMobile() {
  const [isOpenDrawer, setIsOpenDrawer] = React.useState<boolean>(false);

  const toggleDrawer = () => {
    setIsOpenDrawer(!isOpenDrawer);
  };

  return (
    <Box
      component={"header"}
      minHeight="80px"
      display={{ xs: "block", md: "none" }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        px="50px"
        pt="10px"
        alignItems="center"
      >
        <Box>
          <Image
            layout="fixed"
            width="50px"
            height="50px"
            objectFit="cover"
            src={LOGO}
            alt="Logo"
            priority={true}
          />
        </Box>
        <Box>
          <ReorderIcon
            sx={{
              width: "30px",
              height: "30px",
            }}
            onClick={() => toggleDrawer()}
          />
          <Box>
            <Drawer open={isOpenDrawer} onClose={() => toggleDrawer()}>
              <List>
                {ROUTE_LIST.map((route) => (
                  <ListItem
                    key={route.path}
                    sx={{
                      borderBottom: "1px solid rgba(0,0,0,0.2)",
                    }}
                  >
                    <ListItemButton
                      sx={{
                        p: "20px 50px",
                      }}
                    >
                      <Link href={`/${route.path}`}>
                        <a>
                          <ListItemText>{route.label}</ListItemText>
                        </a>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
