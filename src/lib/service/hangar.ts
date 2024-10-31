export interface BedrinthApiResponse {
  data: BedrinthApiData;
}

export interface BedrinthApiData {
  pageIndex: number;
  totalPages: number;
}

export const getBedrinthPackages = (
  platform: string,
): Promise<BedrinthApiResponse> =>
  fetch(
    `https://api.bedrinth.com/v2/packages?perPage=1&q=platform:${platform}&type:mod`,
  ).then((res) => res.json());
