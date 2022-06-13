import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  Chip,
  Divider,
  InputAdornment,
  Link,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";

// Redux
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { incrementClicks } from "../../../reducers";

// Components
// UI
import { ActiveLink } from "../../../components/ui";
import { Layout, AuthLayout } from "../../../components/layout";

// Icons
import GoogleIcon from "@mui/icons-material/Google";
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import NextLink from "next/link";

// API - Next
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
} from "next-auth/react";
import { GetServerSideProps } from "next";

// Next Auth
import { signIn } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

interface LoginInfo {
  email: string;
  password: string;
}

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const LogInPage = ({ providers }: Props) => {
  const dispatch = useAppDispatch();

  const { ux } = useAppSelector((state) => state);

  const clicksCurrent = useMemo(() => ux.clicks, [ux.clicks]);

  const [clicked, setClicked] = useState(false);
  const [loginInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    password: "",
  });

  const [touchedUser, setTouchedUser] = useState(false);
  const [touchedPassword, setTouchedPassword] = useState(false);

  const validEmail = useMemo(
    () => loginInfo.email.length <= 0 && touchedUser,
    [loginInfo.email, touchedUser]
  );

  const validPassword = useMemo(
    () => loginInfo.password.length <= 0 && touchedPassword,
    [loginInfo.password, touchedPassword]
  );

  const handleLogin = async () => {
    await signIn("credentials", {
      ...loginInfo,
    });
  };

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  useEffect(() => {
    console.log(providers);
  }, [providers]);

  return (
    <Layout title={"App - Login"}>
      <AuthLayout>
        <Box className="login__container">
          <Box
            className={
              clicksCurrent > 1
                ? "login__left login__animation-toRight"
                : "login__left fade-animation"
            }
          >
            <Typography variant="h4">Iniciar sesión</Typography>
            {providers && (
              <Box display={"flex"}>
                {Object.values(providers).map((provider: any) => {
                  if (provider.id === "credentials") {
                    return null;
                  }

                  return (
                    <Tooltip
                      title={`Inicia sesión con ${provider.name}`}
                      key={provider.id}
                    >
                      <Button
                        variant="outlined"
                        className="login__providers"
                        onClick={async () => await signIn(provider.id)}
                      >
                        {provider.name === "Google" && <GoogleIcon />}
                      </Button>
                    </Tooltip>
                  );
                })}
              </Box>
            )}
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              ó usa tu cuenta de email
            </Typography>
            <Box
              sx={{ boxSizing: "border-box", padding: "1em", width: "100%" }}
            >
              <TextField
                fullWidth
                sx={{ marginBottom: "1em" }}
                placeholder="E-mail"
                label="E-mail"
                error={validEmail}
                helperText={
                  validEmail ? "Invalid data" : "Escribe tu e-mail..."
                }
                onBlur={() => setTouchedUser(true)}
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, email: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                placeholder="Password"
                label="Password"
                error={validPassword}
                helperText={
                  validPassword ? "Invalid data" : "Escribe tu contraseña..."
                }
                onBlur={() => setTouchedPassword(true)}
                onChange={(e) =>
                  setLoginInfo({ ...loginInfo, password: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Divider sx={{ marginBottom: "1em" }}>
                <Chip
                  label={
                    <NextLink href="/auth/restore-password" passHref>
                      <Link sx={{ textDecoration: "none" }}>
                        ¿Olvidaste la contraseña?
                      </Link>
                    </NextLink>
                  }
                />
              </Divider>
              <Button variant="contained" fullWidth onClick={handleLogin}>
                CONECTARSE
              </Button>
            </Box>
          </Box>
          <Box
            className={
              clicksCurrent > 1
                ? "login__right login__animation-toLeft"
                : "login__right fade-animation"
            }
          >
            <Typography variant="h4" className="fade-animation">
              ¡Bienvenido de nuevo!
            </Typography>
            <Typography variant="body1" className="fade-animation">
              Para mantenerte conectado con nosotros, debes iniciar sesión con
              tu información personal.
            </Typography>
            <ActiveLink href="/auth/signup">
              <Button
                variant={"outlined"}
                className="fade-animation"
                onClick={() => setClicked(true)}
              >
                <Typography variant="body1">REGÍSTRATE</Typography>
              </Button>
            </ActiveLink>
          </Box>
        </Box>
      </AuthLayout>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const providers = await getProviders();

  return {
    props: { providers },
  };
};

export default LogInPage;
