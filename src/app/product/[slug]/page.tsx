import { Button, Grid, IconButton, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ImageSlider from "@/app/components/ImageSlider";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ProductTabs from "@/app/components/ProductTabs";
import Link from "next/link";

// app/product/[slug]/page.tsx
interface Post {
  title: string;
  content: string;
}

// interface Params {
//   params: <Promise {
//     slug: string;
//   }>;
// }
export const metadata = {
  title: "Hickoku - The Perfume for every occasion",
  description: `A scent is more than an aroma—it is a story whispered on the skin, a lingering memory in the air, a signature of sophistication. At Hickoku, we craft exquisite fragrances that transcend time, capturing the essence of grace, allure, and opulence in every drop.
Each bottle is a masterpiece, blending the world’s most precious essences with unparalleled artistry. From the first delicate note to the final, lingering trail, Hickoku Perfumes are an invitation to indulge in luxury, to embrace elegance, and to leave an unforgettable impression.
Your scent. Your signature. Your legacy.Step into a world of refinement—welcome to Hickoku.`,
};

export default async function Product({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;
  const post = await getPosts(slug);
  console.log(post);

  // Render the post content
  return (
    <Grid container m={"20px"} height={500}>
      {/* <Typography variant="body1">{post?.content}</Typography> */}
      <Grid size={{ xs: 12, md: 6, lg: 6, sm: 6 }}>
        <ImageSlider />
      </Grid>
      <Grid
        size={{ xs: 12, md: 6, lg: 6, sm: 6 }}
        px={4}
        mt={{ xs: 2, md: 0, lg: 0, sm: 0 }}
      >
        <Grid container alignItems="center">
          <IconButton>
            <ChevronLeftIcon />
          </IconButton>
          <Link href={"/collection"}>
            <Typography variant="h6" sx={{ alignContent: "center" }}>
              Collection
            </Typography>
          </Link>
        </Grid>
        <Typography variant="h5" my={3}>
          Azzaro Chrome Eau De Toilette Gift Set For Men
        </Typography>
        <Typography variant="body2" mb={3}>
          Rs 4,000
        </Typography>

        {/* Additional information */}
        <Typography variant="body2" mb={3}>
          Tax included.
        </Typography>
        <Typography variant="body2" mb={3}>
          100% Authentic Products
        </Typography>
        <Typography variant="body2" mb={3} alignContent={"center"}>
          Free Delivery in 2 to 5 Days{" "}
        </Typography>
        <Typography variant="body2" mb={3}>
          Earn reward points on every purchase
        </Typography>
        <Grid container>
          {/* Connect to WhatsApp button */}
          <Button
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<WhatsAppIcon />}
          >
            Connect to WhatsApp
          </Button>
          <ProductTabs />
        </Grid>
      </Grid>
    </Grid>
  );
}

async function getPosts(slug: string): Promise<Post | undefined> {
  const posts: Record<string, Post> = {
    "post-1": { title: "Post 1", content: "This is the content of post 1." },
    "post-2": { title: "Post 2", content: "This is the content of post 2." },
    "post-3": { title: "Post 3", content: "This is the content of post 3." },
  };

  // Fetch data from mock data based on the slug
  const post = posts[slug];
  // Pass data to the page via props
  return post;
}

export async function generateStaticParams() {
  return [{ slug: "post-1" }, { slug: "post-2" }, { slug: "post-3" }];
}
