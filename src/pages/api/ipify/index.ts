import { NextApiRequest, NextApiResponse } from 'next';
import { getIpInfo } from '../../../service/ipify';

const getIpInfoProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { ipAddress, domain } = req.query;
    const response = await getIpInfo({
      ipAddress: returnString(ipAddress),
      domain: returnString(domain),
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const returnString = (param: string[] | string) => (Array.isArray(param) ? param[0] : param);

export default getIpInfoProxy;
