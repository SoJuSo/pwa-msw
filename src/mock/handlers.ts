import { HttpResponse, http } from "msw";
import people from "./dummy.json";

const handlers = [
  http.get("/dummy", async () => {
    await sleep(200);
    return HttpResponse.json(people);
  }),
];
async function sleep(timeout: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

export default handlers;
