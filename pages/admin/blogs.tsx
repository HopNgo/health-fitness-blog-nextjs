import { blogApi } from "@/apiClient";
import { Seo } from "@/components/common";
import { Post } from "@/models";
import MaterialTable from "@material-table/core";
import { Box, Typography } from "@mui/material";
import { AdminLayout } from "components/layout";
import { format } from "date-fns";
import { useEffect, useState } from "react";

interface PostDataTable {
  id: string;
  order: number;
  title: string;
  publishedDate: string;
  tagList: string[];
  author: string;
  slug: string;
}

export interface IAdminPageProps {}

export default function AdminPage(props: IAdminPageProps) {
  const [posts, setPosts] = useState<PostDataTable[]>();

  const columns = [
    {
      title: "ID",
      field: "order",
      width: "5%",
    },
    {
      title: "Title",
      field: "title",
      width: "30%",
    },
    { title: "Publish Date", field: "publishedDate", width: "15%" },
    { title: "Tags", field: "tagList", width: "30%" },
    { title: "Author", field: "author", width: "20%" },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await blogApi.getAllPostList();
      setPosts(
        data.postList.map((post: Post, index: number) => ({
          id: post.id,
          order: index + 1,
          title: post.title,
          publishedDate: format(Number(post.publishedDate), "dd MMM yyyy"),
          tagList: post.tagList.join(", "),
          author: post.author?.name || "",
          slug: post.slug,
        }))
      );
    };
    fetchPosts();
  }, []);

  return (
    <Box>
      <Seo
        data={{
          title: "Dashboard | Health And Fitness Education Blogs",
          description: "This is admin page",
          url: "",
          thumbnailUrl:
            "https://res.cloudinary.com/dquveexgp/image/upload/v1664418633/learn-nextjs/healthy-lifestyle_mek8fy.webp",
        }}
      />
      <Box mb="15px">
        <Typography
          component="h1"
          variant="h4"
          color="primary.main"
          textAlign="center"
        >
          Manage Blogs
        </Typography>
      </Box>
      <MaterialTable
        style={{
          color: "rgb(8, 33, 116)",
          backgroundColor: "#f9f9f9",
          padding: "0.5rem",
        }}
        columns={columns}
        data={posts || []}
        title={"Health & Fitness Blogs"}
        isLoading={posts ? false : true}
        editable={{
          onRowDelete: (selectedRow: any) =>
            new Promise((resolve) => {
              if (posts)
                setTimeout(() => {
                  blogApi.deletePost(selectedRow.id).then((res) => {
                    //clone array Post to delete
                    const deletedPosts = [...posts];

                    //find index post to be deleted
                    const deletedPostIndex = deletedPosts.findIndex(
                      (post: PostDataTable) => post.id === selectedRow.id
                    );

                    //delete post
                    deletedPosts.splice(deletedPostIndex, 1);

                    //update order deletedPosts array
                    const postsToBeSetstate: PostDataTable[] = deletedPosts.map(
                      (post: PostDataTable, index: number) => ({
                        ...post,
                        order: index + 1,
                      })
                    );

                    setPosts(postsToBeSetstate);

                    console.log(process.env.MY_SECRET_REVALIDATE_TOKEN);

                    //revalidate blog detail
                    blogApi.revalidateBlogDetailPage(
                      process.env.MY_SECRET_REVALIDATE_TOKEN || "",
                      selectedRow.slug
                    );
                  });
                  resolve(undefined);
                }, 600);
            }),
        }}
        options={{
          rowStyle: {
            overflowWrap: "break-word",
            textAlign: "center",
          },
          headerStyle: {
            backgroundColor: "#f9f9f9",
            color: "rgb(8, 33, 116)",
            fontStyle: "italic",
          },
          search: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          paging: true,
          pageSize: 6,
          pageSizeOptions: [],
          addRowPosition: "first",
          actionsColumnIndex: -1,
        }}
        localization={{
          toolbar: { searchPlaceholder: "Search blogs..." },
          header: {
            actions: "",
          },
          body: {
            editRow: {
              deleteText: "Are you sure to want to remove this blog?",
            },
          },
        }}
      />
    </Box>
  );
}

AdminPage.Layout = AdminLayout;
