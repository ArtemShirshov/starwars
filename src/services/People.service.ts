import { AxiosResponse } from 'axios';

import { instance } from 'services/instance';

interface PeopleData {
  params: Partial<{
    page: string | number;
    search: string;
  }>;
  id: string | number;
}

class People {
  getPeople({
    params,
    id,
  }: Partial<PeopleData>): Promise<AxiosResponse<any, any>> {
    return instance.get(`/people${id ? `/${id}` : ''}`, {
      params,
    });
  }
}
export const peopleService = new People();
