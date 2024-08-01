import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Button } from "./ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { getBlogName } from "@/lib/requests";
import { FaLinkedin } from 'react-icons/fa';
import { FaGlobe } from 'react-icons/fa';
// import { FaPen } from 'react-icons/fa';


const GITHUB_URL = "https://github.com/bainash10";
const LINKEDIN_URL = "https://www.linkedin.com/in/nischal-baidar-aa8943208/";
const PERSONAL_WEBSITE_URL = "https://nischalbaidar.com.np/";
const HASHNODE_URL = "https://nischalbaidar.hashnode.dev/";

export default async function Navbar() {
  const title = await getBlogName();

  return (
    <div className="w-full border-b mb-5">
  <div className="max-w-7xl w-full px-3 xl:p-0 my-5 mx-auto flex justify-between items-center">
    <div className="text-xl font-bold">
      <Link href="/">Blogs by Nischal Baidar</Link>
    </div>
    <div className="flex items-center gap-5">
      <ThemeToggler />

      <Button variant="secondary">
  <Link className="gap-2 flex items-center" href={LINKEDIN_URL} target="_blank">
    <FaLinkedin /> LinkedIn
  </Link>
</Button>

      <Button variant="secondary">
        <Link className="gap-2 flex items-center" href={GITHUB_URL} target="_blank">
          <GitHubLogoIcon /> GitHub
        </Link>
      </Button>

      {/* <Button variant="secondary">
        <Link className="gap-2 flex items-center" href={HASHNODE_URL} target="_blank">
          <FaPen /> Hashnode
        </Link>
      </Button> */}

      

<Button variant="secondary">
  <Link className="gap-2 flex items-center" href={PERSONAL_WEBSITE_URL} target="_blank">
    <FaGlobe /> Website
  </Link>
</Button>

    </div>
  </div>
</div>

  );
}
