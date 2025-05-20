import { GeradorPix } from "@/@types/geradorPix";

export function getPixData(payload: GeradorPix.Payload) {
  const queryParams = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (key == "key") return;

    queryParams.set(key, `${value}`);
  });

  return fetch(
    `https://pix.v7r.dev/${payload.key}?${queryParams.toString()}`
  ).then((res) => res.json() as Promise<GeradorPix.PixData>);
}

export function getPixUrlImage(payload: GeradorPix.Payload) {
  const queryParams = new URLSearchParams();

  Object.entries(payload).forEach(([key, value]) => {
    if (key == "key") return;

    queryParams.set(key, `${value}`);
  });

  return `https://pix.v7r.dev/image/${payload.key}?${queryParams.toString()}`
}