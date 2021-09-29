import { useSnackbar } from "notistack";

export const useSnackbarSuccess = () => {
  const { enqueueSnackbar } = useSnackbar();

  const enqueueSuccessSnackbar = (message: string) =>
    enqueueSnackbar(message, {
      variant: "success",
    });

  return { enqueueSuccessSnackbar };
};
