import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { useSearchParams } from 'react-router-dom';

import { peopleService } from 'services/People.service';

import {
  setCharacterItems,
  getCharacterItems,
  setPages,
  getCharacterPages,
} from 'store/CharacterItems';

export const CharacterItemsViewModel = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  let [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const characterItems: any = useSelector(getCharacterItems);
  const characterPages: any = useSelector(getCharacterPages);

  const fetchCharacter = useCallback(
    ({ page }: any = {}) => {
      setLoading(true);

      try {
        peopleService
          .getPeople({
            params: {
              page,
            },
          })
          .then(({ data }) => {
            const _data = data.results.map((item: any) => {
              const match = item.url.match(/\/([^/]+)\/?$/);
              const id = match ? match[1] : null;
              return {
                ...item,
                id,
              };
            });
            dispatch(setCharacterItems(_data));
            dispatch(setPages(Math.ceil(data.count / 10)));
          })
          .finally(() => {
            setLoading(false);
          });
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    [dispatch]
  );

  const handleChangePage = useCallback(
    (e: any, page: any) => {
      setPage(page);
      fetchCharacter({
        page,
      });
      setSearchParams({
        page,
      });
    },
    [fetchCharacter, setSearchParams]
  );

  const onClick = useCallback(
    (id: string) => {
      navigate(`character/${id}`);
    },
    [navigate]
  );

  useEffect(() => {
    const page = searchParams.get('page');

    fetchCharacter({
      page,
    });

    if (page) {
      setPage(Number(page));
    }

    return () => {
      dispatch(setCharacterItems([]));
    };
  }, []);

  return {
    loading,
    characterItems,
    characterPages,
    handleChangePage,
    page,
    onClick,
  } as const;
};
