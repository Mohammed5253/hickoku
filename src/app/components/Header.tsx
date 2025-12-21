import { Box, Button, Tooltip } from "@mui/material";
import styles from "../page.module.css";
import Link from "next/link";
import Image from "next/image";
import { useDrawer } from "../context/DrawerContext";

export default function Header() {
  const { openDrawer } = useDrawer();

  return (
    <>
      <Box className={styles.header} component="header">
        <Link href="/" className={styles.logoLink}>
          <Image
            className={styles.logo}
            alt="hickoku logo"
            width={120}
            height={80}
            src="/hickoku/logo.jpeg"
          />
        </Link>
        <Box className={styles.iconButtons}>
          <Tooltip title="Menu" placement="bottom" arrow>
            <Button
              variant="text"
              size="small"
              aria-label="Open menu"
              className={styles.headerButtonColor}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                color="#cbcbcb"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </Tooltip>
          <Tooltip title="Collections" placement="bottom" arrow>
            <Button
              variant="text"
              size="small"
              className={styles.headerButtonColor}
            >
              <Link
                href={"/collection"}
                aria-label="Collection"
                className={styles.headerSvgLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="8" height="8" />
                  <rect x="13" y="3" width="8" height="8" />
                  <rect x="3" y="13" width="8" height="8" />
                  <rect x="13" y="13" width="8" height="8" />
                </svg>
              </Link>
            </Button>
          </Tooltip>
          <Tooltip title="Cart" placement="bottom" arrow>
            <Button
              variant="text"
              size="small"
              aria-label="Cart"
              className={styles.headerButtonColor}
            >
              <Link
                href={"#"}
                aria-label="Cart"
                className={styles.headerSvgLink}
                onClick={openDrawer}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="9" cy="20" r="1" />
                  <circle cx="20" cy="20" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
              </Link>
            </Button>
          </Tooltip>
          <Tooltip title="About" placement="bottom" arrow>
            <Button
              variant="text"
              size="small"
              aria-label="About"
              className={styles.headerButtonColor}
            >
              <Link
                href={"/about"}
                aria-label="About"
                className={styles.headerSvgLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                </svg>
              </Link>
            </Button>
          </Tooltip>
          <Tooltip title="Contact" placement="bottom" arrow>
            <Button
              variant="text"
              size="small"
              aria-label="Contact"
              className={styles.headerButtonColor}
            >
              <Link
                href={"/contact"}
                aria-label="Contact"
                className={styles.headerSvgLink}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="5" width="20" height="14" rx="2" ry="2" />
                  <polyline points="22,7 12,13 2,7" />
                </svg>
              </Link>
            </Button>
          </Tooltip>
        </Box>
      </Box>
    </>
  );
}
