import { NextApiRequest, NextApiResponse } from 'next';
import { getIpInfo } from '../../../service/ipify';

const getIpInfoProxy = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getIpInfo();
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(error);
  }
};

export default getIpInfoProxy;
