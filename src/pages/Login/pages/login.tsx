import LoginIcon from "@mui/icons-material/Login";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
// import { useAuth } from "../../../hooks/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email({ message: "Email inválido" }),
  password: z
    .string({ required_error: "Uma senha é obrigatória" })
    .min(8, { message: "A senha é muito curta" })
    .max(20, { message: "A senha é muito longa" }),
});

type LoginFormSchema = z.infer<typeof loginFormSchema>;

export default function Login() {
  // const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = async (data: LoginFormSchema) => {
    console.log(`Clicked! ${JSON.stringify(data)}`);
    window.alert(`Clicked! ${JSON.stringify(data)}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        maxWidth: "280px",
        margin: "0 auto",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          direction="column"
          spacing={2}
          sx={{
            padding: "16px",
            border: "1px solid grey",
            borderRadius: "15px",
          }}
        >
          <Grid
            item
            sx={{
              textAlign: "left",
              paddingRight: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h3">Login</Typography>
            <LoginIcon fontSize="large" />
          </Grid>
          <Grid item paddingRight="16px" textAlign="left">
            <TextField
              placeholder="Email"
              {...register("email")}
              error={Boolean(errors?.email)}
              helperText={errors?.email?.message}
              fullWidth
            />
          </Grid>
          <Grid item paddingRight="16px" textAlign="left">
            <TextField
              placeholder="Senha"
              {...register("password")}
              error={Boolean(errors?.password)}
              helperText={errors?.password?.message}
              type="password"
              fullWidth
            />
          </Grid>
          <Grid item paddingRight="16px" textAlign="left">
            <Button
              fullWidth
              type="submit"
              sx={{ color: "lightgray", backgroundColor: "#424345" }}
            >
              Entrar 🎉
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}
