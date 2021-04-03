import { IpInfo } from '../../model/IpInfo';
import { IpifyIPResponseDTO } from './interface';

export const mapResponseTOIpInfo = (response:IpifyIPResponseDTO): IpInfo => {
  const { ip, isp, location } = response;
  const {
    city, postalCode, region, timezone, lat, lng,
  } = location;
  return {
    ipAddress: ip,
    isp,
    timezone,
    location: `${city}, ${region} ${postalCode}`,
    lat,
    long: lng,
  };
};

export default {};
