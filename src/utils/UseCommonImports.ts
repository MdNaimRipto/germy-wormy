import { useRouter } from "next/router";

export function UseCommonImports() {
  const router = useRouter();

  return {
    Router: router,
  };
}
