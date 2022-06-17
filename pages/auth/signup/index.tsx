import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { AuthLayout, Layout } from "../../../components/layout";

// API - Next
import { signInAuth } from "../../../auth";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
} from "next-auth/react";

// Redux
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { incrementClicks, newNotification } from "../../../reducers";

// Components
import { ActiveLink } from "../../../components/ui";

// uuid
import { v4 as uuid } from "uuid";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import GoogleIcon from "@mui/icons-material/Google";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

// Interfaces
import { INotification } from "../../../interfaces";
import { BuiltInProviderType } from "next-auth/providers";
import { GetServerSideProps } from "next";

interface LoginInfo {
  email: string;
  name: string;
  password: string;
  password2: string;
}

const SignUpPage = () => {
  const dispatch = useAppDispatch();

  const { ux } = useAppSelector((state) => state);

  const currentClicks = useMemo(() => ux.clicks, [ux.clicks]);

  const [clicked, setClicked] = useState(false);

  const [registerInfo, setLoginInfo] = useState<LoginInfo>({
    email: "",
    name: "",
    password: "",
    password2: "",
  });

  const [providers, setProviders] = useState<any | null>(null);

  const [touchedInputs, setTouchedInputs] = useState({
    email: false,
    name: false,
    password: false,
    password2: false,
  });

  const validEmail = useMemo(
    () => registerInfo.email.length <= 0 && touchedInputs.email,
    [registerInfo.email, touchedInputs.email]
  );

  const validName = useMemo(
    () => registerInfo.name.length <= 0 && touchedInputs.name,
    [registerInfo.name, touchedInputs.name]
  );

  const validPassword = useMemo(
    () => registerInfo.password.length <= 0 && touchedInputs.password,
    [registerInfo.password, touchedInputs.password]
  );

  const validPassword2 = useMemo(
    () => registerInfo.password2.length <= 0 && touchedInputs.password2,
    [registerInfo.password2, touchedInputs.password2]
  );

  useEffect(() => {
    if (clicked) {
      dispatch(incrementClicks());
    }
  }, [clicked, dispatch]);

  const handleSignUp = async () => {
    const { hasError, message } = await signInAuth({ ...registerInfo });
    if (hasError) {
      const payload: INotification = {
        id: uuid(),
        title: "Error:",
        message: message!,
        severity: "error",
      };
      dispatch(newNotification(payload));
      return;
    }

    const { email, password } = registerInfo;

    await signIn("credentials", { email, password });
  };

  useEffect(() => {
    getProviders().then((provs) => setProviders(provs));
  }, []);

  return (
    <Layout title={"App - Signup"}>
      <AuthLayout>
        <Box className={"signup__container"}>
          <Box
            className={
              currentClicks > 1
                ? "signup__right signup__animation-toLeft"
                : "signup__right fade-animation"
            }
          >
            <Typography variant="h4">Crear una cuenta</Typography>
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
                        className="signup__providers"
                        onClick={async () => await signIn(provider.id)}
                      >
                        {provider.name === "Google" && <GoogleIcon />}
                        {provider.name === "GitHub" && <GitHubIcon />}
                      </Button>
                    </Tooltip>
                  );
                })}
              </Box>
            )}
            <Typography variant="body2" sx={{ fontStyle: "italic" }}>
              ó usa tu e-mail para registrarte.
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
                  validEmail ? "Datos no válidos" : "Escribe tu e-mail..."
                }
                onBlur={() =>
                  setTouchedInputs({
                    ...touchedInputs,
                    email: true,
                  })
                }
                onChange={(e) =>
                  setLoginInfo({ ...registerInfo, email: e.target.value })
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
                sx={{ marginBottom: "1em" }}
                placeholder="Nombre"
                label="Nombre"
                error={validName}
                helperText={
                  validName ? "Datos no válidos" : "Escribe tu nombre..."
                }
                onBlur={() =>
                  setTouchedInputs({
                    ...touchedInputs,
                    name: true,
                  })
                }
                onChange={(e) =>
                  setLoginInfo({ ...registerInfo, name: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                sx={{ marginBottom: "1em" }}
                placeholder="Contraseña"
                label="Contraseña"
                error={validPassword}
                helperText={
                  validPassword
                    ? "Datos no válidos"
                    : "Escribe tu contraseña..."
                }
                onBlur={() =>
                  setTouchedInputs({
                    ...touchedInputs,
                    password: true,
                  })
                }
                onChange={(e) =>
                  setLoginInfo({ ...registerInfo, password: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PasswordIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                fullWidth
                sx={{ marginBottom: "1em" }}
                placeholder="Confirma contraseña"
                label="Confirma contraseña"
                error={validPassword2}
                helperText={
                  validPassword2
                    ? "Datos no válidos"
                    : "Confirma tu contraseña..."
                }
                onBlur={() =>
                  setTouchedInputs({
                    ...touchedInputs,
                    password2: true,
                  })
                }
                onChange={(e) =>
                  setLoginInfo({ ...registerInfo, password2: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <ThumbUpAltIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" fullWidth onClick={handleSignUp}>
                RESGISTRARME
              </Button>
            </Box>
          </Box>
          <Box
            className={
              currentClicks > 1
                ? "signup__left signup__animation-toRight"
                : "signup__left fade-animation"
            }
          >
            <Typography variant="h4" className="fade-animation">
              ¡Hola, Amigo!
            </Typography>
            <Typography variant="body1" className="fade-animation">
              Digita tus datos personales y comienza a aprender con nosotros.
            </Typography>
            <ActiveLink href="/auth/login">
              <Button
                variant={"outlined"}
                className="fade-animation"
                onClick={() => setClicked(true)}
              >
                <Typography variant="body1">INICIAR SESIÓN</Typography>
              </Button>
            </ActiveLink>
          </Box>
        </Box>
      </AuthLayout>
    </Layout>
  );
};

export default SignUpPage;
