import { useState, useMemo } from "react";
import { capitalize, Box, Breadcrumbs, Link, Typography } from "@mui/material";

// Next Tools
import { useRouter } from "next/router";
import NextLink from "next/link";

const BreadcrumbsC = () => {
  const [paths, setPaths] = useState<string[]>([]);
  const [to, setTo] = useState<string[]>([]);

  const router = useRouter();
  const { asPath } = router;

  useMemo(() => {
    const calc = asPath.split("/").slice(1);
    setPaths(calc);
    setTo(calc.map((path, index) => calc.slice(0, index + 1).join("/")));
  }, [asPath]);

  return (
    <Box sx={{ padding: 1, boxSizing: "border-box" }}>
      <Breadcrumbs sx={{ color: "#001122" }}>
        {paths?.map((path, index) =>
          index + 1 === paths.length ? (
            <Typography key={path} color="inherit" fontWeight={600}>
              {capitalize(path)}
            </Typography>
          ) : (
            <NextLink key={path} href={`/${to[index]}`} passHref>
              <Link underline="hover" color="inherit">
                {capitalize(path)}
              </Link>
            </NextLink>
          )
        )}
      </Breadcrumbs>
    </Box>
  );
};

export { BreadcrumbsC };
