import { useAuth } from "@/hooks";
import LOGO from "@/public/images/logo.svg";
import EditIcon from "@mui/icons-material/Edit";
import LogoutIcon from "@mui/icons-material/Logout";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Auth } from "components/common";
import Image from "next/image";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export interface IAdminLayoutProps {
  children: ReactNode;
}

const drawerWidth = 240;

export default function ClippedDrawer() {}

export function AdminLayout({ children }: IAdminLayoutProps) {
  const { logout, profile } = useAuth();
  const router = useRouter();

  const handleClickLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Auth>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,

            [`& .MuiDrawer-paper`]: {
              minHeight: "100vh",
              bgcolor: "primary.main",
              color: "white",
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem disablePadding>
                <Stack
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="20px"
                  width="100%"
                  pt="20px"
                  pb="50px"
                >
                  <Box>
                    <Image
                      layout="fixed"
                      width="100px"
                      height="100px"
                      objectFit="cover"
                      src={LOGO}
                      alt="Logo"
                      priority={true}
                    />
                  </Box>
                  <Stack justifyContent="center" alignItems="center">
                    <Typography
                      component="span"
                      fontSize="20px"
                      fontStyle="italic"
                    >
                      Hello,
                    </Typography>
                    <Typography
                      component="span"
                      fontSize="18px"
                      fontWeight="700"
                    >
                      {profile?.username || "Admin"}
                    </Typography>
                  </Stack>
                </Stack>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ padding: "10px 15px !important" }}
                  onClick={() => router.push("/admin/blogs")}
                >
                  <ListItemIcon>
                    <NewspaperIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Blogs"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ padding: "10px 15px !important" }}
                  onClick={() => router.push("/admin/editor")}
                >
                  <ListItemIcon>
                    <EditIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Text Editor"} />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  sx={{ padding: "10px 15px !important" }}
                  onClick={() => handleClickLogout()}
                >
                  <ListItemIcon>
                    <LogoutIcon sx={{ color: "white" }} />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          {children}
        </Box>
      </Box>
    </Auth>
  );
}
