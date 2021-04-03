export interface IpifyIPResponseDTO {
  ip: string;
  location: LocationDTO;
  as: AsDTO;
  isp: string;
  proxy: ProxyDTO
}

interface LocationDTO {
  country: string;
  region: string;
  city: string;
  lat: number;
  lng: number;
  postalCode: string;
  geonameId: number;
  timezone: string;
}

interface AsDTO {
  asn: number;
  name: string;
  route: string;
  domain: string;
  type: string;
}

interface ProxyDTO {
  proxy: boolean;
  vpn: boolean;
  tor: boolean;
}

export interface GetIpInfoReqParams {
  ipAddress?: string;
  domain?: string;
}
