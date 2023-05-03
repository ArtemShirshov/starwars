import { AxiosResponse } from 'axios';

import { instance } from 'services/instance';

class People {
  getPeople({ params, id }: any): Promise<AxiosResponse<any, any>> {
    return instance.get(`/people${id ? `/${id}` : ''}`, {
      params,
    });
  }
}
export const peopleService = new People();
